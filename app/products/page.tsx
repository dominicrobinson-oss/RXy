import { db } from "@/lib/db";
import ProductDisplayCard from "@/app/components/ProductDisplayCard";
import CategoryStrip from "@/components/CategoryStrip";

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await db.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">All Products</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore our full range of premium supplements.
          </p>
        </div>

        <CategoryStrip />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <ProductDisplayCard
              key={product.id}
              href={`/product/${product.slug}`}
              name={product.name}
              price={product.price.toString()}
              image={product.images[0]}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
