const stripCategories = [
  'Protein',
  'Creatine',
  'Activewear',
  'Snacks',
  'Vitamins',
  'Pre-Workout',
];

export default function CategoryStrip() {
  return (
    <section className="py-3 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-2.5 md:gap-3 overflow-x-auto no-scrollbar pb-1 md:pb-0">
          {stripCategories.map((cat) => (
            <a
              key={cat}
              href="#"
              className="bg-[#003f4c] text-white text-center font-bold text-xs md:text-sm py-3 px-5 md:px-2 rounded-md hover:bg-[#0a5462] transition whitespace-nowrap min-w-[150px] md:min-w-0 shadow-sm"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
