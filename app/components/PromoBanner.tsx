export default function PromoBanner() {
  return (
    <section className="bg-[#003f4c] text-white py-4 md:py-5 shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 text-center lg:text-left">
        <div>
          <p className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em] text-[#8ad6e4]">
            24 Hour Extension
          </p>
          <h2 className="text-xl md:text-3xl font-extrabold leading-tight mt-1">
            Up to 70% Off Payday Sale
          </h2>
          <p className="text-[12px] md:text-sm text-white/90 mt-1.5 font-semibold">
            Extra 20% off summer essential supplements. Use code <span className="text-[#ffd08a]">PAYDAY</span> at checkout.
          </p>
        </div>

        <div className="flex items-center justify-center lg:justify-end gap-1.5 text-[10px] md:text-[11px] font-semibold">
          {[
            ['00', 'Days'],
            ['18', 'Hours'],
            ['18', 'Minutes'],
            ['47', 'Seconds'],
          ].map(([value, label]) => (
            <div key={label} className="flex items-center gap-1">
              <span className="px-2 py-1 rounded-sm bg-white text-[#003f4c] min-w-[34px] text-center font-bold">{value}</span>
              <span className="text-white/90">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
