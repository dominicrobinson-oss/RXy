export default function MegaMenuProtein() {
  return (
    <div
      id="megamenu-protein"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Category</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Whey Protein</a></li>
            <li><a href="#">Clear Protein</a></li>
            <li><a href="#">Isolate Protein</a></li>
            <li><a href="#">Collagen Protein</a></li>
            <li><a href="#">Casein Protein</a></li>
            <li><a href="#">Hydrolysed Protein</a></li>
            <li><a href="#">Vegan Protein</a></li>
            <li><a href="#">Protein Bars & Snacks</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Benefit</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Build Muscle</a></li>
            <li><a href="#">Weight Gain</a></li>
            <li><a href="#">Diet</a></li>
            <li><a href="#">Recovery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Range</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Impact</a></li>
            <li><a href="#">Origin</a></li>
            <li><a href="#">PRO</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Shop by Diet</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Vegetarian</a></li>
            <li><a href="#">Informed Choice</a></li>
            <li><a href="#">Informed Sport</a></li>
            <li><a href="#">Informed Protein</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
