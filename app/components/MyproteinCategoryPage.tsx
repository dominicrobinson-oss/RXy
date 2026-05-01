type MyproteinCategoryPageProps = {
  heading: string;
  description: string;
  highlight?: string;
};

const placeholderProducts = [
  { name: "Performance Blend", price: "£24.99" },
  { name: "Daily Recovery", price: "£19.99" },
  { name: "Limited Edition Formula", price: "£29.99" },
  { name: "Training Essential", price: "£14.99" },
  { name: "Advanced Support Stack", price: "£34.99" },
  { name: "Everyday Active Pick", price: "£17.99" },
];

export default function MyproteinCategoryPage({
  heading,
  description,
  highlight,
}: MyproteinCategoryPageProps) {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {highlight ?? "Myprotein Collections"}
          </p>
          <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
          <p className="max-w-2xl text-gray-600">{description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {placeholderProducts.map((product) => (
            <article
              key={`${heading}-${product.name}`}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="aspect-[3/2] w-full overflow-hidden rounded-md bg-gray-100">
                <div className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Placeholder Product
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h2 className="text-base font-semibold text-gray-900">{product.name}</h2>
                <p className="text-sm text-gray-600">Myprotein-style category placeholder card.</p>
                <p className="text-sm font-semibold text-black">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
