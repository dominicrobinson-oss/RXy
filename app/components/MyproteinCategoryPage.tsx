import ProductCard from "@/app/components/ProductCard";
import type { Product } from "@/app/types";

type MyproteinCategoryPageProps = {
  heading: string;
  description: string;
  highlight?: string;
};

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=80";

function buildPlaceholders(heading: string): Product[] {
  const items = [
    { name: "Performance Blend", price: 2499, badge: "bestseller" as const },
    { name: "Daily Recovery", price: 1999 },
    { name: "Limited Edition Formula", price: 2999, badge: "new" as const },
    { name: "Training Essential", price: 1499 },
    { name: "Advanced Support Stack", price: 3499, badge: "sale" as const, oldPrice: 4299 },
    { name: "Everyday Active Pick", price: 1799 },
  ];
  return items.map((item, i) => ({
    id: `${heading}-${i}`,
    name: item.name,
    description: `${heading} placeholder product.`,
    price: item.price,
    oldPrice: item.oldPrice,
    image: PLACEHOLDER_IMAGE,
    category: heading,
    badge: item.badge,
    reviews: 1200 + i * 150,
    rating: 4.5 + i * 0.05,
  }));
}

export default function MyproteinCategoryPage({
  heading,
  description,
  highlight,
}: MyproteinCategoryPageProps) {
  const products = buildPlaceholders(heading);

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
          {highlight ?? "Myprotein Collections"}
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-6">{heading}</h1>
        <p className="text-gray-600 mb-8">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
