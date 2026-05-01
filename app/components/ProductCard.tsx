'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

export default function ProductCard({ product }: { product: Product }) {
  const save = product.oldPrice ? (product.oldPrice - product.price) / 100 : null;

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition bg-white h-full flex flex-col">
      {/* Image Container */}
      <div className="relative bg-gray-100 aspect-[3/2] overflow-hidden">
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

        {product.freeDelivery && (
          <span className="absolute left-3 top-3 px-2 py-1 rounded bg-white/95 text-[10px] font-bold text-[#0b4b59] border border-gray-200">
            FREE DELIVERY
          </span>
        )}
      </div>

      {product.promoRibbon && (
        <div className="bg-[#0b4b59] text-white text-[10px] font-bold uppercase tracking-[0.06em] px-3 py-1.5">
          {product.promoRibbon}
        </div>
      )}

      <div className="p-4 flex flex-col flex-1">
        <p className="text-[11px] text-gray-500 uppercase tracking-wide">{product.category}</p>
        <h3 className="font-semibold text-[15px] text-gray-900 mt-1 line-clamp-2">{product.name}</h3>

        {product.reviews && product.rating && (
          <p className="text-xs text-gray-500 mt-1">
            {product.rating.toFixed(2)} ★ ({product.reviews.toLocaleString()} reviews)
          </p>
        )}

        <div className="mt-2 space-y-1">
          <p className="text-xl font-extrabold text-[#005ca8]">£{(product.price / 100).toFixed(2)}</p>
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
