import Image from "next/image";
import Link from "next/link";

const promos = [
  {
    id: 1,
    title: "Gym bag essentials",
    text: "Everything you need for your next session.",
    cta: "Shop essentials",
    href: "/categories/essentials",
    image: "/images/promo-gymbag.jpg",
  },
  {
    id: 2,
    title: "Vegan favourites",
    text: "Plant\u2011based protein and snacks.",
    cta: "Shop vegan",
    href: "/categories/vegan",
    image: "/images/promo-vegan.jpg",
  },
];

export default function PromoBlocks() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="relative min-h-[300px] overflow-hidden rounded-lg bg-slate-900 text-white shadow-sm md:min-h-[340px]"
            >
              <div className="absolute inset-0">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover opacity-70"
                />
              </div>
              <div className="relative -translate-y-[2px] flex h-full flex-col justify-end gap-2 p-6 text-left sm:p-8">
                <h3 className="text-lg font-semibold uppercase tracking-[0.08em] text-slate-100 md:text-xl">
                  {promo.title}
                </h3>
                <p className="text-sm leading-[1.2] text-slate-100">{promo.text}</p>
                <Link href={promo.href} className="mt-3 inline-flex w-max rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 hover:bg-slate-100">
                  {promo.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
