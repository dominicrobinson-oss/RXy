export default function MegaMenuVitamins() {
  return (
    <div
      id="megamenu-vitamins"
      className="absolute left-0 top-full w-screen border-t border-gray-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] animate-slideDown z-50"
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
