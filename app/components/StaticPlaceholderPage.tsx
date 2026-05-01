import ProductCard from "@/app/components/ProductCard";
import type { Product } from "@/app/types";

type StaticPlaceholderPageProps = {
  heading: string;
  description: string;
  eyebrow?: string;
};

const placeholderImage =
  "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1200&q=80";

function buildPlaceholderProducts(heading: string): Product[] {
  return [
    {
      id: `${heading}-1`,
      name: `${heading} Essential Pick`,
      description: `Placeholder product content for the ${heading} page.`,
      price: 2499,
      oldPrice: 3199,
      image: placeholderImage,
      category: heading,
      badge: "sale",
      reviews: 128,
      rating: 4.7,
      promoRibbon: "Placeholder offer",
      freeDelivery: true,
    },
    {
      id: `${heading}-2`,
      name: `${heading} Everyday Support`,
      description: `Placeholder product content for the ${heading} page.`,
      price: 1999,
      image: placeholderImage,
      category: heading,
      badge: "new",
      reviews: 84,
      rating: 4.5,
    },
    {
      id: `${heading}-3`,
      name: `${heading} Top Rated Choice`,
      description: `Placeholder product content for the ${heading} page.`,
      price: 2999,
      oldPrice: 3699,
      image: placeholderImage,
      category: heading,
      badge: "bestseller",
      reviews: 206,
      rating: 4.8,
      freeDelivery: true,
    },
    {
      id: `${heading}-4`,
      name: `${heading} Routine Staple`,
      description: `Placeholder product content for the ${heading} page.`,
      price: 1799,
      image: placeholderImage,
      category: heading,
      reviews: 63,
      rating: 4.4,
    },
    {
      id: `${heading}-5`,
      name: `${heading} Premium Bundle`,
      description: `Placeholder product content for the ${heading} page.`,
      price: 3499,
      oldPrice: 4299,
      image: placeholderImage,
      category: heading,
      badge: "sale",
      reviews: 97,
      rating: 4.6,
      promoRibbon: "Placeholder bundle",
    },
    {
      id: `${heading}-6`,
      name: `${heading} Featured Favourite`,
      description: `Placeholder product content for the ${heading} page.`,
      price: 2299,
      image: placeholderImage,
      category: heading,
      badge: "new",
      reviews: 112,
      rating: 4.7,
    },
  ];
}

export default function StaticPlaceholderPage({
  heading,
  description,
  eyebrow = "Myprotein Information",
}: StaticPlaceholderPageProps) {
  const placeholderProducts = buildPlaceholderProducts(heading);

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-6">{heading}</h1>
          <p className="text-base leading-7 text-gray-600">{description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {placeholderProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}