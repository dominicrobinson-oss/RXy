export default function MegaMenuCollabs() {
  return (
    <div className="absolute left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg animate-slideDown z-50">
      <div className="mx-auto max-w-7xl px-8 py-6 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold">Collabs</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Limited drops</a></li>
            <li><a href="#" className="hover:text-black">Brand partners</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Collections</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Capsules</a></li>
            <li><a href="#" className="hover:text-black">Studio edits</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Discover</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Lookbooks</a></li>
            <li><a href="#" className="hover:text-black">Stories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Shop all</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">All collabs</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
