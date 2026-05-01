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
    <section className="py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="group relative overflow-hidden rounded-lg bg-slate-900 text-white shadow-sm transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover opacity-70"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end gap-2 p-6 text-left md:p-8">
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
