export default function MegaMenuSnacks() {
  return (
    <div
      id="megamenu-snacks"
      className="absolute left-0 top-full w-screen border-t border-gray-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] animate-slideDown z-50"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Category</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Protein Bars</a></li>
            <li><a href="#">Protein Cookies</a></li>
            <li><a href="#">Crisps & Savoury</a></li>
            <li><a href="#">Breakfast</a></li>
            <li><a href="#">Vegan Snacks</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Benefit</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">High Protein</a></li>
            <li><a href="#">Low Sugar</a></li>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">On-the-Go</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Top Ranges</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Layered Bar</a></li>
            <li><a href="#">Protein Brownie</a></li>
            <li><a href="#">Crispy Wafers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shop All Snacks</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
