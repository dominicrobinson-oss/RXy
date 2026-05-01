export default function MegaMenuSupplements() {
  return (
    <div
      id="megamenu-supplements"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Category</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Creatine</a></li>
            <li><a href="#">Pre-Workout</a></li>
            <li><a href="#">Amino Acids</a></li>
            <li><a href="#">Carb Powders</a></li>
            <li><a href="#">Weight Gainers</a></li>
            <li><a href="#">Joint Care</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Benefit</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Energy</a></li>
            <li><a href="#">Strength</a></li>
            <li><a href="#">Endurance</a></li>
            <li><a href="#">Recovery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Top Ranges</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">THE Pre-Workout</a></li>
            <li><a href="#">Creatine Monohydrate</a></li>
            <li><a href="#">Essential BCAA</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shop All Supplements</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
