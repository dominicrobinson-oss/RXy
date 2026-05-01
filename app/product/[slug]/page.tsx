import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import ProductDisplayCard from "@/app/components/ProductDisplayCard";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await db.product.findUnique({
    where: { slug },
  });

  if (!product) return notFound();

  const relatedProducts = await db.product.findMany({
    where: {
      category: product.category,
      NOT: { id: product.id },
    },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <main className="py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
              {product.images[0] && (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {product.images.slice(1).length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.images.slice(1).map((img, i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                    <img src={img} alt={`${product.name} ${i + 2}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-2">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
                {product.name}
              </h1>
              <p className="text-xl font-semibold">£{Number(product.price).toFixed(2)}</p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors">
              Add to cart
            </button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-16 space-y-6">
            <div className="space-y-3">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">You may also like</h2>
              <p className="text-gray-600 max-w-2xl">
                More picks from the same category.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <ProductDisplayCard
                  key={related.id}
                  href={`/product/${related.slug}`}
                  name={related.name}
                  price={related.price.toString()}
                  image={related.images[0]}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
