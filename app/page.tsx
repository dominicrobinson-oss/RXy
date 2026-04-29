import {
  UtilityStrip,
  Navigation,
  CategoryStrip,
  HeroBanner,
  BrandHubSections,
  NewInActivewear,
  ProductsGrid,
  PromoBanner,
  Footer,
} from './components';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header>
        <UtilityStrip />
        <PromoBanner />

        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
          <Navigation />
        </div>
      </header>

      <main className="flex-1">
        <CategoryStrip />

        <HeroBanner />

        <BrandHubSections />

        <ProductsGrid />

        <NewInActivewear />

        {/* Newsletter Section */}
        <section className="bg-[#f7f8fa] py-12 md:py-14 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.08em] font-bold text-[#0b4b59] mb-1">Community</p>
            <h2 className="text-[30px] md:text-[38px] font-extrabold mb-2 text-[#101820]">Join 100k+ Customers</h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">Get 20% off your first order + exclusive deals</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0b4b59] bg-white"
              />
              <button
                type="submit"
                className="bg-[#003f4c] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0a5462] transition"
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
