export default function CartPage() {
  return (
    <main className="py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">Cart</h1>
          <p className="text-gray-600 max-w-2xl">
            Your cart is empty.
          </p>
        </div>
      </div>
    </main>
  );
}
