export default function MegaMenuAccessories() {
  return (
    <div
      id="megamenu-accessories"
      className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[900px] bg-white shadow-xl rounded-lg z-50 animate-slideDown"
    >
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-10">
        <div>
          <h3 className="text-sm font-semibold mb-3">Training Accessories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shakers</a></li>
            <li><a href="#">Water Bottles</a></li>
            <li><a href="#">Gym Gloves</a></li>
            <li><a href="#">Lifting Straps</a></li>
            <li><a href="#">Resistance Bands</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Accessories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Socks</a></li>
            <li><a href="#">Hats</a></li>
            <li><a href="#">Bags</a></li>
            <li><a href="#">Caps</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Top Picks</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Metal Shaker</a></li>
            <li><a href="#">Gym Holdall</a></li>
            <li><a href="#">Training Belt</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Shop All Accessories</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
