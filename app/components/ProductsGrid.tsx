import ProductCard from './ProductCard';
import type { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Whey Protein Isolate',
    description: 'Pure, fast-absorbing protein powder',
    price: 3499,
    oldPrice: 3999,
    image: 'https://images.unsplash.com/photo-1584124864456-cbbf17f3049e?w=400&h=400&fit=crop',
    category: 'Protein',
    badge: 'bestseller',
    reviews: 29502,
    rating: 4.64,
    promoRibbon: 'UP TO 70% OFF PAYDAY SALE',
    freeDelivery: true,
  },
  {
    id: '2',
    name: 'Clear Whey Isolate',
    description: 'Light, refreshing protein drink',
    price: 2999,
    oldPrice: 3449,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop',
    category: 'Shakes',
    badge: 'new',
    reviews: 12687,
    rating: 4.58,
    promoRibbon: 'EXTRA 20% OFF SUMMER ESSENTIALS',
    freeDelivery: true,
  },
  {
    id: '3',
    name: 'Creatine Monohydrate',
    description: 'Muscle strength & recovery support',
    price: 1599,
    oldPrice: 1999,
    image: 'https://images.unsplash.com/photo-1599599810694-c6d7e5e0db42?w=400&h=400&fit=crop',
    category: 'Supplements',
    reviews: 659,
    rating: 4.56,
    promoRibbon: 'APPLIES AT BASKET',
  },
  {
    id: '4',
    name: 'Pre-Workout Formula',
    description: 'Energy & focus boost for workouts',
    price: 2499,
    oldPrice: 3099,
    image: 'https://images.unsplash.com/photo-1604054609358-4e6adf11ea1c?w=400&h=400&fit=crop',
    category: 'Supplements',
    badge: 'sale',
    reviews: 3108,
    rating: 4.51,
    promoRibbon: 'EXTRA 10% OFF £50+',
    freeDelivery: true,
  },
  {
    id: '5',
    name: 'Multivitamin Complex',
    description: 'Daily essential vitamins & minerals',
    price: 1799,
    oldPrice: 2199,
    image: 'https://images.unsplash.com/photo-1631730486211-55dd35e39c5f?w=400&h=400&fit=crop',
    category: 'Vitamins',
    reviews: 874,
    rating: 4.42,
    promoRibbon: 'BEST VALUE DAILY HEALTH',
  },
  {
    id: '6',
    name: 'Protein Bars Mix',
    description: 'Convenient protein-packed snacks',
    price: 2199,
    oldPrice: 2499,
    image: 'https://images.unsplash.com/photo-1639599810694-c6d7e5e0db42?w=400&h=400&fit=crop',
    category: 'Bars, Snacks & Food',
    reviews: 1228,
    rating: 4.34,
    promoRibbon: 'SNACK SAVINGS LIVE NOW',
  },
  {
    id: '7',
    name: 'Blood Testing Kit',
    description: 'Comprehensive health biomarker analysis',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop',
    category: 'Collabs',
    badge: 'new',
    reviews: 89,
    rating: 4.8,
    promoRibbon: 'LIMITED EDITION DROP',
    freeDelivery: true,
  },
  {
    id: '8',
    name: 'BCAA Energy Drink',
    description: 'Amino acids + electrolytes',
    price: 1899,
    oldPrice: 2249,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop',
    category: 'Supplements',
    reviews: 832,
    rating: 4.26,
    promoRibbon: 'FREE DELIVERY ON £50+',
    freeDelivery: true,
  },
];

export default function ProductsGrid() {
  return (
    <section className="py-12 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[11px] uppercase tracking-[0.08em] font-bold text-[#0b4b59] mb-1">Trending</p>
        <h2 className="text-[30px] md:text-[38px] font-extrabold mb-2 text-[#101820]">Best Sellers</h2>
        <p className="text-gray-600 mb-7 md:mb-9 text-sm md:text-base">Trending this week</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
