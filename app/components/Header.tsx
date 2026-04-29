'use client';

import { Search, ShoppingBasket, User } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-6 min-w-0">
          <div className="font-black tracking-wider text-xl md:text-[30px] text-[#0b4b59] min-w-fit leading-none">
            RXy+
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="px-5 py-2 rounded-full border border-orange-500 text-[#0b4b59] text-[14px] font-semibold">
              NUTRITION
            </button>
            <button className="px-4 py-2 text-[#0b4b59] text-[14px] font-semibold hover:text-black transition">
              CLOTHING
            </button>
            <button className="px-4 py-2 text-[#0b4b59] text-[14px] font-semibold hover:text-black transition">
              BRANDS
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 min-w-fit">
          <button
            className="hidden md:flex items-center gap-2 border-2 border-[#2f3a40] rounded-full px-3 py-1.5 text-sm text-gray-700"
            title="Search"
          >
            <Search size={16} className="text-orange-500" />
            <span>Search</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 border border-gray-300">AI Assistant</span>
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg text-[#0b4b59]" title="Account">
            <User size={20} strokeWidth={2} />
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg text-[#0b4b59]" title="Basket">
            <ShoppingBasket size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
