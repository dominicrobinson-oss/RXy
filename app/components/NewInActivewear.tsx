import Image from 'next/image';

const items = [
  {
    name: 'High Neck Vest',
    price: '£28.00',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=760&fit=crop',
    badge: 'NEW IN',
    delivery: 'Free next-day delivery',
  },
  {
    name: '2-in-1 Floaty Shorts',
    price: '£36.00',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=760&fit=crop',
    badge: 'NEW IN',
    delivery: 'Free next-day delivery',
  },
  {
    name: 'Oversized Hoodie',
    price: '£36.00',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=760&fit=crop',
    badge: 'NEW IN',
    delivery: 'Free next-day delivery',
  },
  {
    name: 'Cropped Jacket',
    price: '£38.00',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=760&fit=crop',
    badge: 'NEW IN',
    delivery: 'Free next-day delivery',
  },
];

export default function NewInActivewear() {
  return (
    <section className="py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">New In Activewear</h2>
          <a href="#" className="text-sm font-semibold text-[#0b4b59] hover:underline">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <article key={item.name} className="border border-gray-200 rounded-md overflow-hidden bg-white hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition h-full flex flex-col">
              <div className="relative h-52 md:h-64 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute top-3 right-3 bg-black/85 text-white text-[10px] font-bold px-2 py-1 rounded">
                  {item.badge}
                </span>
                <span className="absolute top-3 left-3 bg-white text-[#0b4b59] text-[10px] font-bold px-2 py-1 rounded border border-gray-200">
                  {item.delivery}
                </span>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 min-h-[38px]">{item.name}</h3>
                <p className="text-sm font-bold text-[#0066b3] mt-1">{item.price}</p>
                <button className="mt-auto pt-2 w-full bg-[#003f4c] text-white py-2.5 text-xs font-bold rounded hover:bg-[#0a5462] transition">
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
