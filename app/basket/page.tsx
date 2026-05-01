export default function BasketPage() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-14 lg:py-20 grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight pt-10 pb-6 md:col-span-2">Basket</h1>

        <aside className="hidden md:block md:w-full bg-white shadow-sm rounded-lg p-6 space-y-4 text-sm font-medium">
          <p>Basket summary</p>
          <p className="text-gray-600">No items added yet.</p>
        </aside>

        <aside className="block md:hidden bg-white shadow-sm rounded-lg p-6 space-y-4 text-sm font-medium">
          <p>Basket summary</p>
          <p className="text-gray-600">No items added yet.</p>
        </aside>

        <section className="bg-white shadow-sm rounded-lg p-6 text-center">
          <div className="mx-auto mb-6 h-32 w-32 bg-gray-100 rounded-full" />

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-4">Your basket is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven’t added anything yet.
          </p>

          <a
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-semibold"
          >
            Continue shopping
          </a>
        </section>
      </div>
    </main>
  );
}
