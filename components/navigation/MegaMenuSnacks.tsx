export default function MegaMenuSnacks() {
  return (
    <div
      id="megamenu-snacks"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Bars, Snacks &amp; Foods</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/snacks">Shop all snacks</a></li>
            <li><a href="/snacks/bars">Bars</a></li>
            <li><a href="/snacks/cookies">Cookies</a></li>
            <li><a href="/snacks/drinks">Drinks</a></li>
            <li><a href="/snacks/foods">Foods</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Popular Pairings</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/protein/whey">With whey</a></li>
            <li><a href="/protein/vegan">With vegan protein</a></li>
            <li><a href="/supplements/recovery">Recovery-focused</a></li>
            <li><a href="/vitamins/wellbeing">Wellbeing picks</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Trending In Snacks</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/trending/bestsellers">Snack bestsellers</a></li>
            <li><a href="/trending/new">New snack drops</a></li>
            <li><a href="/clearance/snacks">Snack clearance</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/supplements">Supplements</a></li>
            <li><a href="/clearance">Clearance</a></li>
            <li><a href="/products">All products</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
