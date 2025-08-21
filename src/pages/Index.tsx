import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CollectionsSection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;
