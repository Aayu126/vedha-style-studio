import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-vedha-burgundy mb-4">
              Shop All Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our complete collection of traditional and contemporary fashion pieces.
            </p>
          </div>
          {/* Product grid and filters will be added here */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;