import Link from "next/link";
import { db } from "@/lib/db";
import ProductDisplayCard from "@/app/components/ProductDisplayCard";
import CategoryStrip from "@/components/CategoryStrip";

type Props = { params: Promise<{ category: string }> };

export const dynamic = 'force-dynamic';

export default async function CategoryPage({ params }: Props) {
  const { category: rawCategory } = await params;
  const category = decodeURIComponent(rawCategory);
  const products = await db.product.findMany({
    where: { category },
    orderBy: { createdAt: "desc" },
  });

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
