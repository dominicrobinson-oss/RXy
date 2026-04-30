import type { Product } from '../types';

export function productToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function findProductBySlug(products: Product[], slug: string): Product | undefined {
  return products.find((product) => productToSlug(product.name) === slug);
}

export function filterProductsByCategory(products: Product[], categorySlug: string): Product[] {
  const normalized = categorySlug.toLowerCase();
  return products.filter((product) => productToSlug(product.category) === normalized);
}
