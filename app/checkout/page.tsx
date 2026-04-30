export default function CheckoutPage() {
  return (
    <main className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>
          <p className="text-gray-600 max-w-2xl">
            Enter your details to complete your order. This is a layout
            skeleton ready for integration.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-tight">
                Shipping details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="First name"
                />
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="Last name"
                />
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:col-span-2"
                  placeholder="Address"
                />
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="City"
                />
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="Postcode"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-tight">
                Payment details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:col-span-2"
                  placeholder="Card number"
                />
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="Expiry"
                />
                <input
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  placeholder="CVC"
                />
              </div>
            </div>

            <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors">
              Place order
            </button>
          </section>

          <aside className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h2 className="text-sm font-semibold tracking-tight">
              Order summary
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Items</span>
                <span className="font-semibold">£29.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">£3.99</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-900 font-semibold">Total</span>
                <span className="font-semibold">£33.98</span>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              This is placeholder data. Wire it to your cart state when ready.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
