export default function MegaMenuClearance() {
  return (
    <div
      id="megamenu-clearance"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Clearance</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/clearance">Shop all clearance</a></li>
            <li><a href="/clearance/protein">Protein</a></li>
            <li><a href="/clearance/supplements">Supplements</a></li>
            <li><a href="/clearance/snacks">Snacks</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">High Savings Picks</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/protein/whey">Whey</a></li>
            <li><a href="/supplements/creatine">Creatine</a></li>
            <li><a href="/snacks/bars">Bars</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Related Departments</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/protein">Protein</a></li>
            <li><a href="/supplements">Supplements</a></li>
            <li><a href="/snacks">Bars, snacks &amp; foods</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/trending/offers">Offers hub</a></li>
            <li><a href="/products">All products</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
