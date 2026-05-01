export default function MegaMenuAccessories() {
  return (
    <div
      id="megamenu-accessories"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Accessories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/accessories">Shop all accessories</a></li>
            <li><a href="/accessories/bottles">Bottles</a></li>
            <li><a href="/accessories/shakers">Shakers</a></li>
            <li><a href="/accessories/bags">Bags</a></li>
            <li><a href="/accessories/belts">Belts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Popular Pairings</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/protein/whey">Whey + shaker</a></li>
            <li><a href="/supplements/pre-workout">Pre-workout stack</a></li>
            <li><a href="/snacks/bars">On-the-go snacks</a></li>
            <li><a href="/trending/offers">Current offers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Trending In Accessories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/trending/bestsellers">Accessory bestsellers</a></li>
            <li><a href="/trending/new">New arrivals</a></li>
            <li><a href="/clearance">Clearance picks</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/collabs">Collabs</a></li>
            <li><a href="/products">All products</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
