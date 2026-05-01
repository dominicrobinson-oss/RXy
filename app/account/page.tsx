export default function AccountPage() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-14 lg:py-20">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight pt-10 pb-6">Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-10">
          <aside className="hidden md:block md:w-full bg-white shadow-sm rounded-lg p-6 space-y-4 text-sm font-medium">
            <nav aria-label="Account navigation">
              <ul className="space-y-4">
                <li>Dashboard</li>
                <li>Orders</li>
                <li>Subscriptions</li>
                <li>Addresses</li>
                <li>Payment methods</li>
                <li>Preferences</li>
              </ul>
            </nav>
          </aside>

          <aside className="block md:hidden bg-white shadow-sm rounded-lg p-6 space-y-4 text-sm font-medium">
            <nav aria-label="Account navigation mobile">
              <ul className="flex flex-wrap gap-3">
                <li>Dashboard</li>
                <li>Orders</li>
                <li>Subscriptions</li>
                <li>Addresses</li>
                <li>Payment methods</li>
                <li>Preferences</li>
              </ul>
            </nav>
          </aside>

          <section className="bg-white shadow-sm rounded-lg p-6">
            <p className="text-gray-600 max-w-2xl">
              Account dashboard is coming soon.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
