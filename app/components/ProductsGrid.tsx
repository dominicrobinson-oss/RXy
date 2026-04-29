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
  },
  {
    id: '3',
    name: 'Creatine Monohydrate',
    description: 'Muscle strength & recovery support',
    price: 1599,
    oldPrice: 1999,
    image: 'https://images.unsplash.com/photo-1599599810694-c6d7e5e0db42?w=400&h=400&fit=crop',
    category: 'Supplements',
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
  },
  {
    id: '5',
    name: 'Multivitamin Complex',
    description: 'Daily essential vitamins & minerals',
    price: 1799,
    oldPrice: 2199,
    image: 'https://images.unsplash.com/photo-1631730486211-55dd35e39c5f?w=400&h=400&fit=crop',
    category: 'Vitamins',
  },
  {
    id: '6',
    name: 'Protein Bars Mix',
    description: 'Convenient protein-packed snacks',
    price: 2199,
    oldPrice: 2499,
    image: 'https://images.unsplash.com/photo-1639599810694-c6d7e5e0db42?w=400&h=400&fit=crop',
    category: 'Bars, Snacks & Food',
  },
  {
    id: '7',
    name: 'Blood Testing Kit',
    description: 'Comprehensive health biomarker analysis',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop',
    category: 'Collabs',
    badge: 'new',
  },
  {
    id: '8',
    name: 'BCAA Energy Drink',
    description: 'Amino acids + electrolytes',
    price: 1899,
    oldPrice: 2249,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop',
    category: 'Supplements',
  },
];

export default function ProductsGrid() {
  return (
    <section className="py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Best Sellers</h2>
        <p className="text-gray-600 mb-6 md:mb-8">Trending this week</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
