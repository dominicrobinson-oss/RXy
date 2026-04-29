'use client';

import { Search, User, ShoppingBag } from 'lucide-react';

const primaryTabs = ['Nutrition', 'Clothing', 'Brands'];

const secondaryTabs = [
  'Trending',
  'Protein',
  'Supplements',
  'Vitamins',
  'Bars, Snacks & Foods',
  'Accessories',
  'Collabs',
  'Clearance',
];

export default function NavigationLegacy() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 border-b border-gray-200">
        <div className="flex items-center gap-6 lg:gap-8 min-w-0">
          <a
            href="#"
            className="text-[34px] leading-none font-black tracking-[0.12em] text-[#0b4b59] whitespace-nowrap"
          >
            RXy+
          </a>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {primaryTabs.map((tab, index) => (
              <a
                key={tab}
                href="#"
                className={`rounded-full px-5 py-2 text-[13px] font-bold uppercase tracking-[0.05em] transition ${
                  index === 0
                    ? 'border border-[#e85d2a] text-[#0b4b59]'
                    : 'text-[#0b4b59] hover:text-black'
                }`}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full pl-3 pr-2.5 py-1.5 text-sm text-gray-700">
            <Search size={16} className="text-[#e85d2a]" />
            <span>Search</span>
            <span className="rounded-full border border-[#0b4b59] px-2 py-0.5 text-[11px] font-semibold text-[#0b4b59]">
              Fuel Coach
            </span>
          </button>

          <button className="text-[#0b4b59] hover:text-black" aria-label="Account">
            <User size={20} />
          </button>
          <button className="text-[#0b4b59] hover:text-black" aria-label="Basket">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-6 overflow-x-auto no-scrollbar border-b border-[#e85d2a]">
        {secondaryTabs.map((tab) => (
          <a
            key={tab}
            href="#"
            className="text-[12px] font-semibold text-[#0b4b59] whitespace-nowrap hover:text-black transition"
          >
            {tab}
          </a>
        ))}
      </div>
    </nav>
  );
}
