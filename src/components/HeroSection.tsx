import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(52, 31, 31, 0.4), rgba(52, 31, 31, 0.6)), url(${heroImage})` 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6">
            Where{" "}
            <span className="bg-gradient-to-r from-vedha-gold to-yellow-300 bg-clip-text text-transparent">
              Tradition
            </span>{" "}
            Meets{" "}
            <span className="bg-gradient-to-r from-vedha-gold to-yellow-300 bg-clip-text text-transparent">
              Contemporary
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            Discover Vedha's exquisite collection of contemporary and traditional fashion. 
            Each piece tells a story of elegance, craftsmanship, and timeless beauty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-vedha-burgundy hover:bg-vedha-burgundy/90 text-white px-8 py-6 text-lg font-medium shadow-elegant transition-elegant group"
            >
              Explore Collections
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-vedha-burgundy px-8 py-6 text-lg font-medium transition-elegant backdrop-blur-sm"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;