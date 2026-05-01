export default function HelpPage() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-14 lg:py-20 grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight pt-10 pb-6 md:col-span-2">Help & Information</h1>

        <aside className="hidden md:block md:w-full bg-white shadow-sm rounded-lg p-6 space-y-6 text-sm font-medium">
          <nav aria-label="Help navigation">

            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Help Centre</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-gray-700 hover:text-black transition">International delivery</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Track my order</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">UK delivery</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Products</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Protein</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Bars, drinks &amp; snacks</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Nutrition</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Vitamins</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Company Information</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-gray-700 hover:text-black transition">About us</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Quality assurance</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Sustainability</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Accessibility</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Careers</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Loyalty &amp; Rewards</p>
              <ul className="space-y-2">
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Refer a friend</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Discount codes</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Students &amp; graduate discounts</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Key worker discounts</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">What Moves You</a></li>
              </ul>
            </div>

          </nav>
        </aside>

        <aside className="block md:hidden bg-white shadow-sm rounded-lg p-6 space-y-6 text-sm font-medium">
          <nav aria-label="Help navigation mobile">
            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Help Centre</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                <li><a href="#" className="block text-gray-700 hover:text-black transition">International delivery</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">Track my order</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-black transition">UK delivery</a></li>
              </ul>
            </div>
          </nav>
        </aside>

        <section className="bg-white shadow-sm rounded-lg p-6">
          <p className="text-gray-600 max-w-2xl">
            Help center content is coming soon.
          </p>
        </section>
      </div>
    </main>
  );
}
