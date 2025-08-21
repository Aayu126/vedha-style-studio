import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-vedha-burgundy mb-4">
              Our Collections
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections that blend tradition with contemporary design.
            </p>
          </div>
          {/* Collections showcase will be added here */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;