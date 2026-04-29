'use client';

const categories = ['Trending', 'Protein', 'Supplements', 'Vitamins', 'Bars, Snacks & Foods', 'Accessories', 'Collabs', 'Clearance'];

export default function Navigation() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-5 md:gap-7 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <a
            key={cat}
            href="#"
            className="py-2.5 text-[12px] md:text-[14px] font-semibold text-[#103f4c] whitespace-nowrap hover:text-black transition"
          >
            {cat}
          </a>
        ))}
      </div>
    </nav>
  );
}
