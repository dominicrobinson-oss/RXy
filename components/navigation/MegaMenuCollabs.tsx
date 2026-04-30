export default function MegaMenuCollabs() {
  return (
    <div
      id="megamenu-collabs"
      className="absolute left-0 top-full w-screen border-t border-gray-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] animate-slideDown z-50"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Featured Collabs</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Clear Whey x Vimto</a></li>
            <li><a href="#">Impact x Grenade</a></li>
            <li><a href="#">MP Performance Collabs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Limited Editions</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Seasonal Flavours</a></li>
            <li><a href="#">Special Drops</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Top Picks</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Clear Whey Vimto</a></li>
            <li><a href="#">Impact Grenade</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shop All Collabs</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
