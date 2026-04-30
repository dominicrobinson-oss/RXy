import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { parseImages, slugify, toDecimal } from '@/lib/product';
import { createClient } from '@/lib/supabase/server';

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('GET /api/products error', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await requireAdmin();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
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

    const product = await prisma.product.create({
      data: { name, slug, description, category, images, price },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('POST /api/products error', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
