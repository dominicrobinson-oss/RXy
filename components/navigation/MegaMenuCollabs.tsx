export default function MegaMenuCollabs() {
  return (
    <div
      id="megamenu-collabs"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Collabs</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/collabs">Shop all collabs</a></li>
            <li><a href="/collabs/gymshark">Gymshark</a></li>
            <li><a href="/collabs/limited-edition">Limited edition</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Trending Drops</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/trending/new">New drop calendar</a></li>
            <li><a href="/trending/offers">Drop offers</a></li>
            <li><a href="/trending/bestsellers">Top collab picks</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Pair With</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/protein/whey">Protein</a></li>
            <li><a href="/supplements/pre-workout">Supplements</a></li>
            <li><a href="/snacks">Snacks</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/clearance">Clearance</a></li>
            <li><a href="/products">All products</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
