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
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="relative overflow-hidden rounded-lg bg-slate-900 text-white shadow-sm"
            >
              <div className="absolute inset-0">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover opacity-70"
                />
              </div>
              <div className="relative flex flex-col gap-2 p-6 sm:p-8">
                <h3 className="text-lg font-bold uppercase tracking-wide">
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
