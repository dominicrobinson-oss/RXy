import UtilityStrip from "@/components/UtilityStrip";
import PromoBanner from "@/components/PromoBanner";
import Navigation from "@/components/Navigation";
import CategoryStrip from "@/components/CategoryStrip";
import HeroBanner from "@/components/HeroBanner";
import BestSellers from "@/components/BestSellers";
import PromoBlocks from "@/components/PromoBlocks";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <Navigation />
      </div>
      <UtilityStrip />
      <PromoBanner />

      <CategoryStrip />
      <HeroBanner />
      <BestSellers />
      <PromoBlocks />
      <Newsletter />
      <Footer />
    </div>
  );
}
