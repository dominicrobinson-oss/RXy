export default function MegaMenuTrending() {
  return (
    <div className="absolute left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg animate-slideDown z-50">
      <div className="mx-auto max-w-7xl px-8 py-6 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold">Trending</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Best sellers</a></li>
            <li><a href="#" className="hover:text-black">New arrivals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Goals</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Build muscle</a></li>
            <li><a href="#" className="hover:text-black">Wellness</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Offers</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Bundles</a></li>
            <li><a href="#" className="hover:text-black">Seasonal picks</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Shop trending</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
