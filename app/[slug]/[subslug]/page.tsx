import { notFound } from 'next/navigation';

const allowedSubcategories = new Map<string, Set<string>>([
  ['trending', new Set(['best-sellers', 'limited-edition', 'new-in', 'seasonal'])],
  ['protein', new Set(['bars', 'blends', 'bundles', 'casein', 'clear-whey', 'snacks', 'vegan', 'whey'])],
  ['supplements', new Set(['amino-acids', 'collagen', 'creatine', 'daily-health', 'performance', 'pre-workout', 'weight-management'])],
  ['vitamins', new Set(['hair-skin-nails', 'immunity', 'joint-support', 'multivitamins', 'omega-3', 'sleep-relaxation'])],
  ['snacks', new Set(['baking', 'bars', 'cookies', 'crisps', 'meals', 'nut-butters'])],
  ['accessories', new Set(['bottles', 'gym-bags', 'shakers', 'training', 'yoga-recovery'])],
  ['collabs', new Set(['holly-b', 'influencers', 'limited-edition'])],
  ['clearance', new Set(['clothing', 'last-chance', 'protein', 'seasonal', 'snacks'])],
]);

function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>;
}) {
  const { slug, subslug } = await params;

  const subcategories = allowedSubcategories.get(slug);

  if (!subcategories || !subcategories.has(subslug)) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <p className="text-sm text-gray-500 mb-2">
        Category / {titleFromSlug(slug)} / {titleFromSlug(subslug)}
      </p>
      <h1 className="text-3xl font-bold mb-3">{titleFromSlug(subslug)}</h1>
      <p className="text-gray-600 mb-8">
        This subcategory page is ready. Next step: connect real product data and filtering.
      </p>

      <div className="rounded-xl border border-dashed border-gray-300 p-8 bg-gray-50">
        <p className="font-medium">Coming soon</p>
        <p className="text-sm text-gray-600 mt-1">
          We can now add product cards, sorting, filters, and pagination for this subcategory.
        </p>
      </div>
    </main>
  );
}
