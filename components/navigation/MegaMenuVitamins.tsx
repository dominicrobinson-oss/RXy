export default function MegaMenuVitamins() {
  return (
    <div
      id="megamenu-vitamins"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Category</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Multivitamins</a></li>
            <li><a href="#">Vitamin D</a></li>
            <li><a href="#">Omega-3</a></li>
            <li><a href="#">Immunity</a></li>
            <li><a href="#">Wellbeing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Benefit</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Immunity</a></li>
            <li><a href="#">Energy</a></li>
            <li><a href="#">Sleep</a></li>
            <li><a href="#">Stress Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Top Ranges</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Daily Multivitamin</a></li>
            <li><a href="#">Omega Balance</a></li>
            <li><a href="#">Wellness Essentials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shop All Vitamins</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
