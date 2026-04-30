import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/app/components/ProductCard';
import prisma from '@/lib/db';
import { decimalToPence } from '@/lib/product';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'force-dynamic';

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({ where: { slug } });

  if (!product) {
    notFound();
  }

  const related = await prisma.product.findMany({
    where: {
      category: product.category,
      id: { not: product.id },
    },
    orderBy: { createdAt: 'desc' },
    take: 4,
  });

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-[4/5] bg-gray-100 rounded-lg relative overflow-hidden">
            <Image
              src={product.images[0] ?? '/placeholder.png'}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight">
                {product.name}
              </h1>
              <p className="text-xl font-semibold">£{Number(product.price).toFixed(2)}</p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-3">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors">
                Add to cart
              </button>
              <p className="text-xs text-gray-500">
                Secure checkout • Fast delivery • Backed by science
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-3">
              <h2 className="text-sm font-semibold tracking-tight">
                Product details
              </h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Premium ingredients</li>
                <li>• Transparent dosing</li>
                <li>• Manufactured to high quality standards</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Link
                href="/products"
                className="text-sm font-medium text-gray-900 underline-offset-4 hover:underline"
              >
                Back to all products
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link key={item.id} href={`/product/${item.slug}`}>
                <ProductCard
                  product={{
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    price: decimalToPence(item.price),
                    image: item.images[0] ?? '/placeholder.png',
                    category: item.category,
                  }}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
