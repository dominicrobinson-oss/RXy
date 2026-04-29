export default function PromoBanner() {
  return (
    <div className="bg-[#003f4c] text-white py-1.5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-1.5 text-center md:text-left">
        <p className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wide leading-tight">
          24 Hour Extension | Up to 70% Off Payday Sale + Extra 20% Off Summer Essential Supplements | Ends In...
        </p>
        <div className="flex items-center gap-1.5 text-[10px] md:text-[11px] font-semibold">
          {[
            ['00', 'Days'],
            ['18', 'Hours'],
            ['18', 'Minutes'],
            ['47', 'Seconds'],
          ].map(([value, label]) => (
            <div key={label} className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 rounded-sm bg-white text-[#003f4c] min-w-[30px] text-center">{value}</span>
              <span className="text-white/90">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
