import Image from 'next/image';

const categories = [
  { name: 'Shakes', href: '#', image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=600&h=400&fit=crop' },
  { name: 'Protein', href: '#', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=400&fit=crop' },
  { name: 'Supplements', href: '#', image: 'https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?w=600&h=400&fit=crop' },
  { name: 'Vitamins', href: '#', image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&fit=crop' },
  { name: 'Bars, Snacks & Food', href: '#', image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&h=400&fit=crop' },
  { name: 'Collabs', href: '#', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop' },
];

export default function CategoryGrid() {
  return (
    <section className="py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Shop by Category</h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">Find the right products for your goals</p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group block rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-md transition"
            >
              <div className="relative h-28 sm:h-36 md:h-44">
                <Image
                  src={cat.image}
                  alt={`${cat.name} category placeholder`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-3 md:p-4">
                <p className="font-semibold text-sm md:text-base text-gray-900">{cat.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}