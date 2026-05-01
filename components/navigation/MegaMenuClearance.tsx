export default function MegaMenuClearance() {
  return (
    <div
      id="megamenu-clearance"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Clearance Protein</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Whey Protein</a></li>
            <li><a href="#">Vegan Protein</a></li>
            <li><a href="#">Clear Protein</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Clearance Supplements</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Creatine</a></li>
            <li><a href="#">Pre-Workout</a></li>
            <li><a href="#">Vitamins</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Clearance Snacks</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Protein Bars</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Crisps</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shop All Clearance</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
