export default function MegaMenuSupplements() {
  return (
    <div
      id="megamenu-supplements"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Supplements</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/supplements">Shop all supplements</a></li>
            <li><a href="/supplements/energy">Energy</a></li>
            <li><a href="/supplements/strength">Strength</a></li>
            <li><a href="/supplements/endurance">Endurance</a></li>
            <li><a href="/supplements/recovery">Recovery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Training Essentials</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/supplements/pre-workout">Pre-workout</a></li>
            <li><a href="/supplements/bcaa">BCAA</a></li>
            <li><a href="/supplements/creatine">Creatine</a></li>
            <li><a href="/protein/whey">Pair with whey</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Trending In Supplements</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/trending/bestsellers">Top picks</a></li>
            <li><a href="/trending/offers">Current offers</a></li>
            <li><a href="/clearance/supplements">Supplements clearance</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/vitamins">Vitamins</a></li>
            <li><a href="/snacks">Bars, snacks &amp; foods</a></li>
            <li><a href="/products">All products</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
