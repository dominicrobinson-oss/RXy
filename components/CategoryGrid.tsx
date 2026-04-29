const categories = [
  { name: "Protein", image: "/images/cat-protein.jpg" },
  { name: "Creatine", image: "/images/cat-creatine.jpg" },
  { name: "Activewear", image: "/images/cat-activewear.jpg" },
  { name: "Snacks", image: "/images/cat-snacks.jpg" },
  { name: "Vitamins", image: "/images/cat-vitamins.jpg" },
  { name: "Pre\u2011Workout", image: "/images/cat-preworkout.jpg" },
];

import Image from "next/image";

export default function CategoryGrid() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-xl font-bold uppercase tracking-wider">
          Shop by category
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-lg bg-slate-100 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
