'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition bg-white">
      {/* Image Container */}
      <div className="relative bg-gray-100 h-48 overflow-hidden">
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

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase">{product.category}</p>
        <h3 className="font-semibold text-sm text-gray-800 mt-1 truncate">{product.name}</h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.description}</p>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-blue-600">£{(product.price / 100).toFixed(2)}</span>
          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition" aria-label={`Add ${product.name} to basket`}>
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
