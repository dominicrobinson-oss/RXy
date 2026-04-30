import Image from 'next/image';

const promoBlocks = [
  {
    title: 'App Exclusive Offers',
    description: 'Unlock extra discounts and early access drops when you shop in the app.',
    cta: 'Get The App',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
  },
  {
    title: 'Clearance Deals',
    description: 'Save on limited stock products across supplements, snacks, and activewear.',
    cta: 'Shop Clearance',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=800&fit=crop',
  },
  {
    title: 'Refer A Friend',
    description: 'Give friends a discount and earn credit when they place their first order.',
    cta: 'Start Referring',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop',
  },
];

export default function HomepagePromoBlocks() {
  return (
    <section className="py-12 md:py-14 bg-[#f7f8fa] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promoBlocks.map((block) => (
            <article
              key={block.title}
              className="bg-white rounded-md overflow-hidden border border-gray-200 shadow-[0_10px_26px_rgba(0,0,0,0.06)]"
            >
              <div className="relative h-44 md:h-48">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#101820]">{block.title}</h3>
                <p className="text-sm text-gray-600 mt-1.5">{block.description}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-md bg-[#003f4c] text-white hover:bg-[#0a5462] transition"
                >
                  {block.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}