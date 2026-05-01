import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-14 lg:py-20">
        <div className="grid md:grid-cols-2 gap-4 items-stretch bg-[#004655] border border-[#d8e2e5] rounded-md overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
          <div className="p-7 md:p-10 text-white flex flex-col justify-center">
            <span className="inline-block w-fit bg-[#e85d2a] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] mb-3">
              Payday Sale
            </span>
            <h1 className="text-[44px] md:text-[68px] font-black leading-[0.95] mb-3">70% OFF</h1>
            <p className="text-xl md:text-[30px] font-extrabold leading-tight mb-2.5">+ EXTRA 10% OFF £50 SPEND</p>
            <p className="text-xl md:text-[30px] font-extrabold leading-tight mb-4">OR EXTRA 15% OFF £80 SPEND</p>
            <p className="text-base md:text-lg font-bold mb-6">USE CODE ‘PAYDAY’</p>
            <button className="w-fit bg-white text-[#003f4c] font-bold px-5 py-2.5 rounded-sm hover:bg-gray-100 transition">
              SHOP NOW
            </button>
          </div>

          <div className="relative aspect-[3/2] bg-[#e85d2a]">
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
