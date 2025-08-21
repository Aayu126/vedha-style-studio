import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import traditionalImage from "@/assets/collection-traditional.jpg";
import contemporaryImage from "@/assets/collection-contemporary.jpg";

const CollectionsSection = () => {
  const collections = [
    {
      id: 1,
      title: "Traditional Elegance",
      description: "Timeless sarees, lehengas, and ethnic wear that celebrate our rich heritage with contemporary comfort.",
      image: traditionalImage,
      href: "/collections/traditional"
    },
    {
      id: 2,
      title: "Contemporary Chic",
      description: "Modern silhouettes and sophisticated designs for the contemporary woman who values style and comfort.",
      image: contemporaryImage,
      href: "/collections/contemporary"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-vedha-burgundy mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From traditional masterpieces to contemporary designs, explore our curated collections 
            that blend heritage with modern sophistication.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((collection) => (
            <Card 
              key={collection.id} 
              className="overflow-hidden border-0 shadow-card hover:shadow-elegant transition-elegant group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-bold text-vedha-burgundy mb-3">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {collection.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="border-vedha-burgundy text-vedha-burgundy hover:bg-vedha-burgundy hover:text-white transition-elegant group/btn"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-vedha-burgundy hover:bg-vedha-burgundy/90 text-white px-8 py-6 text-lg font-medium shadow-elegant transition-elegant"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;