export default function MegaMenuProtein() {
  return (
    <div className="absolute left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg animate-slideDown z-50">
      <div className="mx-auto max-w-7xl px-8 py-6 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold">Protein</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Whey protein</a></li>
            <li><a href="#" className="hover:text-black">Clear whey</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Formats</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Powders</a></li>
            <li><a href="#" className="hover:text-black">Ready to drink</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Goals</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Muscle support</a></li>
            <li><a href="#" className="hover:text-black">Recovery</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Shop all</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">All protein</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
