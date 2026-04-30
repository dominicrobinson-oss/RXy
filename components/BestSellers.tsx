import Image from "next/image";

type Product = {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  saving?: string;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Impact Whey Protein",
    subtitle: "Best\u2011selling everyday protein",
    price: "£26.99",
    oldPrice: "£44.99",
    saving: "Save 40%",
    rating: 4.7,
    reviews: 10234,
    badge: "Best seller",
    image: "/images/protein-impact-whey.jpg",
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    subtitle: "Strength & power support",
    price: "£14.99",
    oldPrice: "£24.99",
    saving: "Save 35%",
    rating: 4.6,
    reviews: 8421,
    badge: "Trending",
    image: "/images/creatine-monohydrate.jpg",
  },
  {
    id: 3,
    name: "Layered Protein Bar",
    subtitle: "High\u2011protein snack",
    price: "£19.99",
    oldPrice: "£29.99",
    saving: "Save 30%",
    rating: 4.5,
    reviews: 5632,
    badge: "Snacking",
    image: "/images/snack-layered-bar.jpg",
  },
  {
    id: 4,
    name: "Daily Multivitamin",
    subtitle: "Everyday health support",
    price: "£9.99",
    oldPrice: "£14.99",
    saving: "Save 25%",
    rating: 4.4,
    reviews: 3120,
    badge: "Wellness",
    image: "/images/vitamins-daily-multi.jpg",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="text-[11px] text-yellow-400">
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

export default function BestSellers() {
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
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-sm p-4 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/5] bg-slate-100 rounded-md mb-4 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-center scale-[1.005]"
                />
                {p.badge && (
                  <span className="absolute left-2 top-2 rounded-full bg-[#0071e3] px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {p.badge}
                  </span>
                )}
                {p.saving && (
                  <span className="absolute right-2 top-2 rounded-full bg-black/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {p.saving}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-2 text-sm">
                <h3 className="line-clamp-2 text-sm font-medium">
                  {p.name}
                </h3>
                <p className="line-clamp-2 text-[11px] text-slate-600">
                  {p.subtitle}
                </p>

                <div className="mt-[6px] flex items-center gap-2 text-[11px]">
                  <Stars rating={p.rating} />
                  <span className="text-slate-500">
                    {p.rating.toFixed(1)} ({p.reviews.toLocaleString()})
                  </span>
                </div>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-base font-semibold">{p.price}</span>
                  {p.oldPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {p.oldPrice}
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <button className="w-full rounded-full bg-[#0071e3] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#005bb5]">
                    Quick buy
                  </button>
                </div>

                <p className="mt-2 text-[10px] text-slate-500">
                  Free delivery over £45. Next\u2011day options available.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
