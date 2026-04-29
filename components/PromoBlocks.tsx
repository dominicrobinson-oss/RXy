import Image from "next/image";

const promos = [
  {
    id: 1,
    title: "Gym bag essentials",
    text: "Everything you need for your next session.",
    cta: "Shop essentials",
    image: "/images/promo-gymbag.jpg",
  },
  {
    id: 2,
    title: "Vegan favourites",
    text: "Plant\u2011based protein and snacks.",
    cta: "Shop vegan",
    image: "/images/promo-vegan.jpg",
  },
];

export default function PromoBlocks() {
  return (
    <section className="bg-slate-50 py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
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
              <div className="relative flex h-full flex-col justify-end gap-2 p-6 text-left sm:p-8">
                <h3 className="text-lg font-semibold uppercase tracking-[0.08em] text-slate-100 md:text-xl">
                  {promo.title}
                </h3>
                <p className="text-sm text-slate-100">{promo.text}</p>
                <button className="mt-3 inline-flex w-max rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 hover:bg-slate-100">
                  {promo.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
