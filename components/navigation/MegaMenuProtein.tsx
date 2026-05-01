export default function MegaMenuProtein() {
  return (
    <div
      id="megamenu-protein"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Protein</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/protein">Shop all protein</a></li>
            <li><a href="/protein/whey">Whey</a></li>
            <li><a href="/protein/vegan">Vegan</a></li>
            <li><a href="/protein/clear-whey">Clear whey</a></li>
            <li><a href="/protein/casein">Casein</a></li>
            <li><a href="/protein/bundles">Bundles</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Popular With Protein</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/supplements/creatine">Creatine</a></li>
            <li><a href="/supplements/pre-workout">Pre-workout</a></li>
            <li><a href="/snacks/bars">Bars</a></li>
            <li><a href="/vitamins/multivitamins">Multivitamins</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Trending Choices</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/trending/bestsellers">Protein bestsellers</a></li>
            <li><a href="/trending/new">New protein launches</a></li>
            <li><a href="/clearance/protein">Protein clearance</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/supplements">Supplements</a></li>
            <li><a href="/snacks">Bars, snacks &amp; foods</a></li>
            <li><a href="/accessories">Accessories</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
