import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { createClient } from "@/lib/supabase/server";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

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

export async function GET() {
  const user = await requireAdminSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const products = await db.product.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const user = await requireAdminSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
    const product = await db.product.create({
      data: {
        name,
        slug,
        description,
        price: new Prisma.Decimal(price),
        images,
        category,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
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
