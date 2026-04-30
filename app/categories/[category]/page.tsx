import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/app/components/ProductCard';
import prisma from '@/lib/db';
import { decimalToPence } from '@/lib/product';

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export const dynamic = 'force-dynamic';

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: rawCategory } = await params;
  const category = decodeURIComponent(rawCategory);

  const products = await prisma.product.findMany({
    where: {
      category: {
        equals: category,
        mode: 'insensitive',
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  if (products.length === 0) {
    notFound();
  }

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {category}
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Discover our curated selection of {category.toLowerCase()} products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
            >
              <ProductCard
                product={{
                  id: product.id,
                  name: product.name,
                  description: product.description,
                  price: decimalToPence(product.price),
                  image: product.images[0] ?? '/placeholder.png',
                  category: product.category,
                }}
              />
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/products"
            className="text-sm font-medium text-gray-900 underline-offset-4 hover:underline"
          >
            View all products
          </Link>
        </div>
      </div>
    </main>
  );
}
