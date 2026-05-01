import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

type Params = { params: Promise<{ id: string }> };

type ProductPayload = {
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string;
};

async function requireAdminSession() {
  const cookieStore = await cookies();
  const localAdminToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (verifyAdminSessionToken(localAdminToken)) {
    return { id: "local-admin" };
  }

  try {
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    return user;
  } catch {
    return null;
  }
}

function validateId(id: unknown):
  | { ok: true; id: string }
  | { ok: false; error: string } {
  if (typeof id !== "string" || id.trim().length === 0) {
    return { ok: false, error: "Invalid product id" };
  }

  return { ok: true, id: id.trim() };
}

function validateProductPayload(input: unknown):
  | { ok: true; data: ProductPayload }
  | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid request body" };
  }

  const body = input as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const slug = typeof body.slug === "string" ? body.slug.trim() : "";
  const description =
    typeof body.description === "string" ? body.description.trim() : "";
  const category =
    typeof body.category === "string" ? body.category.trim() : "";
  const priceRaw =
    typeof body.price === "number" || typeof body.price === "string"
      ? Number(body.price)
      : NaN;

  if (!name) return { ok: false, error: "Name is required" };
  if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return {
      ok: false,
      error:
        "Slug is required and must contain lowercase letters, numbers, and hyphens only",
    };
  }
  if (!description) return { ok: false, error: "Description is required" };
  if (!category) return { ok: false, error: "Category is required" };
  if (!Number.isFinite(priceRaw) || priceRaw < 0) {
    return { ok: false, error: "Price must be a valid non-negative number" };
  }

  if (!Array.isArray(body.images)) {
    return { ok: false, error: "Images must be an array" };
  }

  const images = body.images
    .map((image) => (typeof image === "string" ? image.trim() : ""))
    .filter(Boolean);

  if (images.length === 0) {
    return { ok: false, error: "At least one image URL is required" };
  }

  const hasInvalidImage = images.some((image) => {
    try {
      const url = new URL(image);
      return !(url.protocol === "http:" || url.protocol === "https:");
    } catch {
      return true;
    }
  });

  if (hasInvalidImage) {
    return {
      ok: false,
      error: "All images must be valid absolute URLs (http/https)",
    };
  }

  return {
    ok: true,
    data: {
      name,
      slug,
      description,
      category,
      price: Number(priceRaw.toFixed(2)),
      images,
    },
  };
}

export async function GET(_req: Request, { params }: Params) {
  const user = await requireAdminSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const validated = validateId(id);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const product = await db.product.findUnique({ where: { id: validated.id } });
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req: Request, { params }: Params) {
  const user = await requireAdminSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const validatedId = validateId(id);
  if (!validatedId.ok) {
    return NextResponse.json({ error: validatedId.error }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = validateProductPayload(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { name, slug, description, price, images, category } = parsed.data;

  try {
    const product = await db.product.update({
      where: { id: validatedId.id },
      data: {
        name,
        slug,
        description,
        price: new Prisma.Decimal(price),
        images,
        category,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "A product with this slug already exists" },
        { status: 409 }
      );
    }

    throw error;
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  const user = await requireAdminSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const validated = validateId(id);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  try {
    await db.product.delete({ where: { id: validated.id } });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    throw error;
  }

  return new NextResponse(null, { status: 204 });
}
