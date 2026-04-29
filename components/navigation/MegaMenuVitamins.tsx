export default function MegaMenuVitamins() {
  return (
    <div className="absolute left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg animate-slideDown z-50">
      <div className="mx-auto max-w-7xl px-8 py-6 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold">Vitamins</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Multivitamins</a></li>
            <li><a href="#" className="hover:text-black">Omega 3</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Immunity</a></li>
            <li><a href="#" className="hover:text-black">Joint support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Daily</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Everyday wellness</a></li>
            <li><a href="#" className="hover:text-black">Travel essentials</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Shop all</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">All vitamins</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
