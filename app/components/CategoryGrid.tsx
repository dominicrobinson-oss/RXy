const categories = [
  'PROTEIN',
  'CREATINE',
  'BARS, FOOD & SNACKS',
  'VITAMINS',
  'PRE-WORKOUT',
];

export default function CategoryGrid() {
  return (
    <section className="py-5 md:py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a
              key={cat}
              href="#"
              className="bg-[#003f4c] text-white text-center font-bold text-xs md:text-sm py-3 md:py-4 rounded-md hover:bg-[#0a5462] transition"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
