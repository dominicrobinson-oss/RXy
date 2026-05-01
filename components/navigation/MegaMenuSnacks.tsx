export default function MegaMenuSnacks() {
  return (
    <div
      id="megamenu-snacks"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
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
