import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="bg-[#003f4c]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid md:grid-cols-2 gap-4 items-stretch bg-[#004f5f] border border-[#e85d2a]">
          <div className="p-6 md:p-8 text-white flex flex-col justify-center">
            <span className="inline-block w-fit bg-[#e85d2a] px-3 py-1 text-xs font-bold uppercase tracking-wide mb-3">
              Payday Sale
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-none mb-3">70% OFF</h1>
            <p className="text-xl md:text-3xl font-extrabold leading-tight mb-3">+ EXTRA 10% OFF £50 SPEND</p>
            <p className="text-xl md:text-3xl font-extrabold leading-tight mb-4">OR EXTRA 15% OFF £80 SPEND</p>
            <p className="text-base md:text-lg font-bold mb-5">USE CODE ‘PAYDAY’</p>
            <button className="w-fit bg-white text-[#003f4c] font-bold px-5 py-2.5 hover:bg-gray-100 transition">
              SHOP NOW
            </button>
          </div>

          <div className="relative min-h-[260px] md:min-h-[420px] bg-[#e85d2a]">
            <Image
              src="https://images.unsplash.com/photo-1584124864456-cbbf17f3049e?w=1200&h=900&fit=crop"
              alt="Featured supplements"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
