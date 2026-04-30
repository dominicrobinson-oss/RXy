import { notFound } from 'next/navigation';

const allowedCategories = new Map<string, string>([
  ['trending', 'Trending'],
  ['protein', 'Protein'],
  ['supplements', 'Supplements'],
  ['vitamins', 'Vitamins'],
  ['snacks', 'Snacks'],
  ['accessories', 'Accessories'],
  ['collabs', 'Collabs'],
  ['clearance', 'Clearance'],
  ['whey-protein-shake', 'Shakes'],
  ['clear-whey', 'Shakes'],
  ['casein-shake', 'Shakes'],
  ['ready-to-drink', 'Shakes'],
  ['whey-powder', 'Protein'],
  ['plant-based', 'Protein'],
  ['casein-powder', 'Protein'],
  ['blended-protein', 'Protein'],
  ['creatine', 'Supplements'],
  ['pre-workout', 'Supplements'],
  ['bcaa', 'Supplements'],
  ['amino-acids', 'Supplements'],
  ['multivitamins', 'Vitamins'],
  ['vitamin-d', 'Vitamins'],
  ['b-complex', 'Vitamins'],
  ['minerals', 'Vitamins'],
  ['protein-bars', 'Bars, Snacks & Food'],
  ['snack-bars', 'Bars, Snacks & Food'],
  ['ready-meals', 'Bars, Snacks & Food'],
  ['healthy-snacks', 'Bars, Snacks & Food'],
  ['blood-testing-kits', 'Collabs'],
  ['partner-products', 'Collabs'],
  ['limited-edition', 'Collabs'],
]);

function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = allowedCategories.get(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-sm text-gray-500 mb-2">Category / {category}</p>
      <h1 className="text-3xl font-bold mb-3">{titleFromSlug(slug)}</h1>
      <p className="text-gray-600 mb-8">
        This category page is ready. Next step: connect real product data and filtering.
      </p>

      <div className="rounded-xl border border-dashed border-gray-300 p-8 bg-gray-50">
        <p className="font-medium">Coming soon</p>
        <p className="text-sm text-gray-600 mt-1">
          We can now add product cards, sorting, filters, and pagination for this category.
        </p>
      </div>
    </main>
  );
}
