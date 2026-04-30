'use client';

import { Search, ShoppingBasket, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-6 min-w-0">
          <Link href="/" className="font-black tracking-wider text-xl md:text-[30px] text-[#0b4b59] min-w-fit leading-none">
            RXy+
          </Link>
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

          <Link href="/account" className="p-2 hover:bg-gray-100 rounded-lg text-[#0b4b59] inline-flex items-center gap-1" title="Account">
            <User size={20} strokeWidth={2} />
            <span>Account</span>
          </Link>

          <Link href="/basket" className="p-2 hover:bg-gray-100 rounded-lg text-[#0b4b59] inline-flex items-center gap-1" title="Basket">
            <ShoppingBasket size={20} strokeWidth={2} />
            <span>Basket</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
