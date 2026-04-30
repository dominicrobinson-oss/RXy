import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';
import prisma from '@/lib/db';
import { decimalToPence } from '@/lib/product';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            All Products
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Explore our full range of premium supplements and performance products.
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
      </div>
    </main>
  );
}
