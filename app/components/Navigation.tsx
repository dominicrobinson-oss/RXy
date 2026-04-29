'use client';

import { Search } from 'lucide-react';

const categories = [
  'Brands A–Z',
  'Best Sellers',
  'New Season',
  'Outlet',
  'Nutrition',
  'Personal Care',
  'Technology',
  'Accessories',
  'Footwear',
  'Clothing',
  'Equipment',
];

export default function Navigation() {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-4 border-b border-gray-200 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <a
            key={cat}
            href="#"
            className="py-1.5 text-[11px] md:text-[13px] font-semibold text-[#103f4c] whitespace-nowrap hover:text-black transition tracking-[0.01em]"
          >
            {cat}
          </a>
        ))}

        <div className="ml-auto flex items-center gap-2 shrink-0">
          <button className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 text-xs text-gray-700">
            <Search size={14} className="text-[#e85d2a]" />
            <span className="hidden sm:inline">Search</span>
          </button>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 border border-gray-300 text-gray-700 font-semibold">
            AI Assistant
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 hidden lg:grid grid-cols-4 gap-6 text-sm bg-white shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
        <div>
          <h3 className="font-bold text-[#0b4b59] mb-2">Nutrition</h3>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#" className="hover:text-black">Protein Powders</a></li>
            <li><a href="#" className="hover:text-black">Creatine</a></li>
            <li><a href="#" className="hover:text-black">Pre-Workout</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#0b4b59] mb-2">Clothing</h3>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#" className="hover:text-black">New In</a></li>
            <li><a href="#" className="hover:text-black">Leggings</a></li>
            <li><a href="#" className="hover:text-black">Hoodies</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#0b4b59] mb-2">Accessories</h3>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#" className="hover:text-black">Shakers</a></li>
            <li><a href="#" className="hover:text-black">Bottles</a></li>
            <li><a href="#" className="hover:text-black">Gym Bags</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#0b4b59] mb-2">Brand Hub</h3>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#" className="hover:text-black">What’s New</a></li>
            <li><a href="#" className="hover:text-black">Gym Bag Essentials</a></li>
            <li><a href="#" className="hover:text-black">FAQs</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
