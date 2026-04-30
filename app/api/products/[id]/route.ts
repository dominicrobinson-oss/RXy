import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { parseImages, slugify, toDecimal } from '@/lib/product';
import { createClient } from '@/lib/supabase/server';

type Params = { params: Promise<{ id: string }> };

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function GET(_: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const product = await prisma.product.findUnique({ where: { id } });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('GET /api/products/[id] error', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  const user = await requireAdmin();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await req.json();

    const name = String(body.name ?? '').trim();
    const description = String(body.description ?? '').trim();
    const category = String(body.category ?? '').trim();
    const slug = String(body.slug ?? '').trim() || slugify(name);
    const images = parseImages(body.images);
    const price = toDecimal(body.price);

    if (!name || !description || !category || !slug || images.length === 0) {
      return NextResponse.json(
        { error: 'name, slug, description, category, price, and at least one image are required' },
        { status: 400 }
      );
    }

    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const product = await prisma.product.update({
      where: { id },
      data: { name, slug, description, category, images, price },
    });

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('PUT /api/products/[id] error', error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: Params) {
  const user = await requireAdmin();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;

    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    await prisma.product.delete({ where: { id } });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('DELETE /api/products/[id] error', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
