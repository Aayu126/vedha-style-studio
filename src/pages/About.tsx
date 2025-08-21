import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif font-bold text-vedha-burgundy mb-4">
                About Vedha
              </h1>
              <p className="text-lg text-muted-foreground">
                Our story of blending tradition with contemporary fashion.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-vedha-burgundy mb-4">
                    Our Heritage
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vedha was born from a deep appreciation for India's rich textile heritage 
                    and a vision to make it relevant for the modern woman. Founded with the 
                    belief that tradition and contemporary design can beautifully coexist, 
                    we create pieces that honor our past while embracing the future.
                  </p>
                </div>
                <div className="aspect-square bg-vedha-light rounded-lg"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="aspect-square bg-vedha-light rounded-lg"></div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-serif font-bold text-vedha-burgundy mb-4">
                    Our Craft
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Every Vedha piece is crafted with meticulous attention to detail, 
                    using traditional techniques passed down through generations. We work 
                    closely with skilled artisans to ensure each garment meets our high 
                    standards of quality and craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;