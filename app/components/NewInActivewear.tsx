import Image from 'next/image';

const items = [
  {
    name: 'High Neck Vest',
    price: '£28.00',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=760&fit=crop',
  },
  {
    name: '2-in-1 Floaty Shorts',
    price: '£36.00',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=760&fit=crop',
  },
  {
    name: 'Oversized Hoodie',
    price: '£36.00',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=760&fit=crop',
  },
  {
    name: 'Cropped Jacket',
    price: '£38.00',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=760&fit=crop',
  },
];

export default function NewInActivewear() {
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">New In Activewear</h2>
          <a href="#" className="text-sm font-semibold text-[#0b4b59] hover:underline">View all</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((item) => (
            <article key={item.name} className="border border-gray-200 rounded-md overflow-hidden bg-white hover:shadow-md transition">
              <div className="relative h-52 md:h-64 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 min-h-[38px]">{item.name}</h3>
                <p className="text-sm font-bold text-[#0066b3] mt-1">{item.price}</p>
                <button className="mt-2 w-full bg-[#003f4c] text-white py-2 text-xs font-bold rounded hover:bg-[#0a5462] transition">
                  QUICK BUY
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
