import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "Whey Protein Isolate",
    price: "£29.99",
    quantity: 1,
  },
];

export default function CartPage() {
  const subtotal = "£29.99";

  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">Cart</h1>
          <p className="text-gray-600">
            Review your items before proceeding to checkout.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-600">
                Your cart is currently empty.
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 border-b border-gray-200 pb-4"
                >
                  <div className="flex gap-4">
                    <div className="h-20 w-20 bg-gray-100 rounded-md" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.price}</p>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">{item.price}</p>
                </div>
              ))
            )}
          </div>

          <aside className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h2 className="text-sm font-semibold tracking-tight">
              Order summary
            </h2>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">{subtotal}</span>
            </div>
            <p className="text-xs text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
              href="/checkout"
              className="block w-full text-center px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors"
            >
              Proceed to checkout
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
