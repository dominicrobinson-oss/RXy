import ProductDisplayCard from "@/app/components/ProductDisplayCard";
import { db } from "@/lib/db";

export default async function BestSellers() {
  const products = await db.product.findMany({ take: 4 });

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Best sellers</h2>
          <p className="text-gray-600 max-w-2xl">
            Discover customer favourites trusted for performance and results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductDisplayCard
              key={p.id}
              name={p.name}
              price={p.price.toString()}
              image={p.images?.[0]}
              href={`/product/${p.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
