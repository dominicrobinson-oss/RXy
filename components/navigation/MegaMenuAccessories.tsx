export default function MegaMenuAccessories() {
  return (
    <div className="absolute left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg animate-slideDown z-50">
      <div className="mx-auto max-w-7xl px-8 py-6 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold">Accessories</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Shakers</a></li>
            <li><a href="#" className="hover:text-black">Bottles</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Training</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Gym bags</a></li>
            <li><a href="#" className="hover:text-black">Recovery tools</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Collections</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Starter kit</a></li>
            <li><a href="#" className="hover:text-black">Hydration</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Shop all</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">All accessories</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
