"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] text-black py-10 md:py-14 lg:py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-payday-sale.jpg"
          alt="Payday sale hero"
          fill
          priority
          className="object-cover opacity-50"
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 space-y-6">
        <div className="max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#00d4ff]">
            PAYDAY SALE
          </p>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight">
            Up to <span className="text-[#00d4ff]">70% off</span>
            <br />
            + extra 20% off
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
            Summer essential supplements, limited time only. Use code{" "}
            <span className="font-semibold">PAYDAY</span> at checkout.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#0071e3] px-8 py-3 text-base font-semibold uppercase tracking-wide text-white shadow-md hover:bg-[#005bb5]">
              Shop now
            </button>
            <div className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span>Ends soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
