"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-payday-sale.jpg"
          alt="Payday sale hero"
          fill
          priority
          className="object-cover opacity-70"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:py-24">
        <div className="max-w-xl">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#00d4ff]">
            PAYDAY SALE
          </p>
          <h1 className="text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl">
            Up to <span className="text-[#00d4ff]">70% off</span>
            <br />
            + extra 20% off
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-100">
            Summer essential supplements, limited time only. Use code{" "}
            <span className="font-semibold">PAYDAY</span> at checkout.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#0071e3] px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-[#005bb5]">
              Shop now
            </button>
            <div className="flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span>Offer ends in 02:14:36</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid flex-1 grid-cols-2 gap-3 sm:mt-0 sm:max-w-sm">
          <div className="rounded-lg bg-black/40 p-4 text-xs">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-300">
              Best for
            </p>
            <p className="mt-1 text-sm font-semibold">Muscle growth</p>
            <p className="mt-1 text-[11px] text-slate-200">
              High&#8209;quality protein blends to support your training.
            </p>
          </div>
          <div className="rounded-lg bg-black/40 p-4 text-xs">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-300">
              Free delivery
            </p>
            <p className="mt-1 text-sm font-semibold">On orders over £45</p>
            <p className="mt-1 text-[11px] text-slate-200">
              Next&#8209;day options available at checkout.
            </p>
          </div>
          <div className="col-span-2 rounded-lg bg-black/40 p-4 text-xs">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-300">
              Rated excellent
            </p>
            <p className="mt-1 text-sm font-semibold">4.7 / 5 on 100k+ reviews</p>
            <div className="mt-2 flex items-center gap-1 text-yellow-300">
              {"★★★★★"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
