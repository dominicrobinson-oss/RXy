export default function PromoBanner() {
  return (
    <section className="bg-[#0b4b59] text-white border-b border-[#06323c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.06em]">
        <p className="truncate text-white/95">
          UP TO 70% OFF PAYDAY SALE + EXTRA 15% OFF VIA APP | USE CODE "APPY"
        </p>

        <div className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.04em] text-white/90 shrink-0">
          <span>ENDS IN</span>
          {[
            ['00', 'D'],
            ['18', 'H'],
            ['18', 'M'],
            ['47', 'S'],
          ].map(([value, label]) => (
            <div key={label} className="inline-flex items-center gap-1">
              <span className="font-bold text-white">{value}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
