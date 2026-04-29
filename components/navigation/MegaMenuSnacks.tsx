export default function MegaMenuSnacks() {
  return (
    <div className="absolute left-0 top-full w-screen bg-white border-t border-gray-200 shadow-lg animate-slideDown z-50">
      <div className="mx-auto max-w-7xl px-8 py-6 grid grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold">Snacks</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Protein bars</a></li>
            <li><a href="#" className="hover:text-black">Cookies</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Food</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">Nut butters</a></li>
            <li><a href="#" className="hover:text-black">Ready meals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">By goal</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">High protein</a></li>
            <li><a href="#" className="hover:text-black">On the go</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Shop all</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-black">All snacks</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
