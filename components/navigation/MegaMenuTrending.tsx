export default function MegaMenuTrending() {
  return (
    <div
      id="megamenu-trending"
      className="absolute left-0 top-full w-screen border-t border-gray-200 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] animate-slideDown z-50"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Trending Now</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Clear Protein</a></li>
            <li><a href="#">Impact Whey</a></li>
            <li><a href="#">Vegan Favourites</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Popular Goals</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Build Muscle</a></li>
            <li><a href="#">Lose Weight</a></li>
            <li><a href="#">Wellness</a></li>
            <li><a href="#">Recovery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Top Ranges</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Impact</a></li>
            <li><a href="#">Clear Whey</a></li>
            <li><a href="#">Origin</a></li>
            <li><a href="#">PRO Series</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shop All</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Bundles</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
