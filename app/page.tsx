import {
  Header,
  Navigation,
  HeroBanner,
  CategoryGrid,
  ProductsGrid,
  PromoBanner,
  USPBar,
  Footer,
} from './components';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="divide-y divide-gray-200">
          <Header />
          <Navigation />
        </div>
      </div>

      <main className="flex-1">
        <USPBar />

        <PromoBanner />

        <HeroBanner />

        <CategoryGrid />

        <ProductsGrid />

        {/* Newsletter Section */}
        <section className="bg-blue-50 py-12 border-y">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-2">Join 100k+ Customers</h2>
            <p className="text-gray-600 mb-6">Get 20% off your first order + exclusive deals</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
