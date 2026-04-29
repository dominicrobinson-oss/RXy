export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Help & Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">International delivery</a></li>
              <li><a href="#" className="hover:text-white">Track my order</a></li>
              <li><a href="#" className="hover:text-white">UK delivery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Protein</a></li>
              <li><a href="#" className="hover:text-white">Activewear</a></li>
              <li><a href="#" className="hover:text-white">Bars, drinks & snacks</a></li>
              <li><a href="#" className="hover:text-white">Nutrition</a></li>
              <li><a href="#" className="hover:text-white">Vitamins</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Company Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Quality assurance</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Accessibility</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Loyalty & Rewards</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Refer a friend</a></li>
              <li><a href="#" className="hover:text-white">Discount codes</a></li>
              <li><a href="#" className="hover:text-white">Students & graduate discounts</a></li>
              <li><a href="#" className="hover:text-white">Key worker discounts</a></li>
              <li><a href="#" className="hover:text-white">What Moves You</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
          <p>© 2026 RXy+ Ltd. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-gray-400 flex-wrap">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 flex items-center gap-2 text-[11px] text-gray-400 flex-wrap">
          <span>Pay with:</span>
          {['VISA', 'MC', 'PAYPAL', 'AMEX', 'APPLE PAY'].map((p) => (
            <span key={p} className="px-2 py-1 rounded bg-gray-800 text-gray-200 text-[10px] font-semibold">
              {p}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
