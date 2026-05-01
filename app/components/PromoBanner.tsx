export default function PromoBanner() {
  return (
    <section className="bg-[#0b4b59] text-white border-b border-[#06323c] py-16">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.06em]">
        <p className="truncate text-white/95">
          UP TO 70% OFF PAYDAY SALE + EXTRA 15% OFF VIA APP | USE CODE "APPY"
        </p>

        <div className="hidden md:flex items-center shrink-0">
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-900">
            Ends soon
          </span>
        </div>
      </div>
    </section>
  );
}
