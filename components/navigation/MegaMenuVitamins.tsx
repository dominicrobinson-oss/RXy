export default function MegaMenuVitamins() {
  return (
    <div
      id="megamenu-vitamins"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] max-w-screen-xl bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-sm font-semibold mb-3">Vitamins</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/vitamins">Shop all vitamins</a></li>
            <li><a href="/vitamins/multivitamins">Multivitamins</a></li>
            <li><a href="/vitamins/immunity">Immunity</a></li>
            <li><a href="/vitamins/wellbeing">Wellbeing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Paired Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/supplements/recovery">Recovery support</a></li>
            <li><a href="/supplements/energy">Energy support</a></li>
            <li><a href="/protein/vegan">Vegan-friendly range</a></li>
            <li><a href="/snacks/foods">Functional foods</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Trending In Health</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/trending/bestsellers">Health bestsellers</a></li>
            <li><a href="/trending/new">New launches</a></li>
            <li><a href="/trending/offers">Current offers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/supplements">Supplements</a></li>
            <li><a href="/clearance/supplements">Supplements clearance</a></li>
            <li><a href="/products">All products</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
