export default function MegaMenuClearance() {
  return (
    <div className="absolute left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg animate-slideDown z-50">
      <div className="mx-auto max-w-7xl px-8 py-6 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold">Clearance</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Protein deals</a></li>
            <li><a href="#" className="hover:text-black">Supplement deals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Discounts</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Under £10</a></li>
            <li><a href="#" className="hover:text-black">Last chance</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Outlet</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Bundle savings</a></li>
            <li><a href="#" className="hover:text-black">Seasonal sale</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Shop all</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">All clearance</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
