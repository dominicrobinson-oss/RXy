const categories = [
  { name: "Protein", image: "/images/cat-protein.jpg" },
  { name: "Creatine", image: "/images/cat-creatine.jpg" },

  { name: "Snacks", image: "/images/cat-snacks.jpg" },
  { name: "Vitamins", image: "/images/cat-vitamins.jpg" },
  { name: "Pre\u2011Workout", image: "/images/cat-preworkout.jpg" },
];

import Image from "next/image";

export default function CategoryGrid() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider">
          Shop by category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="group relative flex aspect-[3/2] flex-col overflow-hidden rounded-lg bg-slate-100 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
