export default function MegaMenuTrending() {
  return (
    <div
      id="megamenu-trending"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Trending</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/trending">Shop all trending</a></li>
            <li><a href="/trending/new">New</a></li>
            <li><a href="/trending/bestsellers">Bestsellers</a></li>
            <li><a href="/trending/offers">Offers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Featured</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/protein/whey">Whey protein</a></li>
            <li><a href="/supplements/pre-workout">Pre-workout</a></li>
            <li><a href="/snacks/bars">Protein bars</a></li>
            <li><a href="/clearance">Clearance deals</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">By Goal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/supplements/strength">Build strength</a></li>
            <li><a href="/supplements/endurance">Support endurance</a></li>
            <li><a href="/supplements/recovery">Improve recovery</a></li>
            <li><a href="/vitamins/wellbeing">Daily wellbeing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/collabs">Collabs</a></li>
            <li><a href="/accessories">Accessories</a></li>
            <li><a href="/products">All products</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
