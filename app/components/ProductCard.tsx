'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

export default function ProductCard({ product }: { product: Product }) {
  const save = product.oldPrice ? (product.oldPrice - product.price) / 100 : null;

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition bg-white h-full flex flex-col">
      {/* Image Container */}
      <div className="relative bg-gray-100 h-44 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="w-full h-full object-cover hover:scale-105 transition"
        />
        {product.badge && (
          <span className={`absolute top-3 right-3 px-3 py-1 rounded text-white text-xs font-bold ${
            product.badge === 'sale' ? 'bg-red-500' : 
            product.badge === 'new' ? 'bg-green-500' :
            'bg-blue-500'
          }`}>
            {product.badge === 'sale' ? 'SALE' : product.badge === 'new' ? 'NEW' : 'BESTSELLER'}
          </span>
        )}
      </div>
      <div className="p-3.5 flex flex-col flex-1">
        <p className="text-[11px] text-gray-500 uppercase tracking-wide">{product.category}</p>
        <h3 className="font-semibold text-[15px] text-gray-900 mt-1 line-clamp-2 min-h-[44px]">{product.name}</h3>

        <div className="mt-2 space-y-1 min-h-[58px]">
          <p className="text-xl font-extrabold text-[#0066b3]">£{(product.price / 100).toFixed(2)}</p>
          {product.oldPrice && (
            <p className="text-xs text-gray-500">
              Was <span className="line-through">£{(product.oldPrice / 100).toFixed(2)}</span>
            </p>
          )}
          {save !== null && <p className="text-xs font-semibold text-red-600">Save £{save.toFixed(2)}</p>}
        </div>

        <button
          className="mt-3 w-full bg-[#003f4c] text-white py-2.5 rounded text-sm font-bold hover:bg-[#0a5462] transition flex items-center justify-center gap-2"
          aria-label={`Add ${product.name} to basket`}
        >
          <ShoppingCart size={16} />
          QUICK BUY
        </button>

        <p className="mt-2 text-[10px] leading-tight text-gray-500 uppercase">
          Up to 70% off payday sale | Use code ‘PAYDAY’
        </p>
      </div>
    </div>
  );
}
