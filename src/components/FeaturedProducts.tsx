import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample product data - in a real app, this would come from an API
const sampleProducts = [
  {
    id: 1,
    name: "Silk Saree with Gold Border",
    category: "Traditional",
    price: 12999,
    originalPrice: 15999,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop",
    isNew: true,
    colors: ["Burgundy", "Navy", "Emerald"]
  },
  {
    id: 2,
    name: "Contemporary Midi Dress",
    category: "Contemporary",
    price: 4999,
    originalPrice: 6999,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    isNew: false,
    colors: ["Black", "Navy", "Burgundy"]
  },
  {
    id: 3,
    name: "Embroidered Lehenga Set",
    category: "Traditional",
    price: 24999,
    originalPrice: 29999,
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1583391265877-48e6113a4c8b?w=400&h=500&fit=crop",
    isNew: true,
    colors: ["Pink", "Gold", "Cream"]
  },
  {
    id: 4,
    name: "Blazer & Trouser Set",
    category: "Contemporary",
    price: 7999,
    originalPrice: 9999,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    isNew: false,
    colors: ["Black", "Navy", "Grey"]
  }
];

const FeaturedProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Traditional", "Contemporary"];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = selectedCategory === "All" 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  const formatPrice = (price: number) => `₹${price.toLocaleString()}`;

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-vedha-burgundy mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our handpicked selection of exquisite pieces that embody 
            the essence of Vedha's craftsmanship and design philosophy.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "transition-elegant",
                  selectedCategory === category 
                    ? "bg-vedha-burgundy hover:bg-vedha-burgundy/90" 
                    : "border-vedha-burgundy text-vedha-burgundy hover:bg-vedha-burgundy hover:text-white"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden border-0 shadow-card hover:shadow-elegant transition-elegant group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-105"
                />
                
                {/* Overlay Elements */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-vedha-gold text-vedha-charcoal">New</Badge>
                  )}
                  {product.originalPrice > product.price && (
                    <Badge variant="destructive">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                    </Badge>
                  )}
                </div>
                
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(product.id)}
                    className={cn(
                      "bg-white/90 hover:bg-white transition-elegant",
                      favorites.includes(product.id) && "text-red-500"
                    )}
                  >
                    <Heart className="h-4 w-4" fill={favorites.includes(product.id) ? "currentColor" : "none"} />
                  </Button>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-elegant">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-vedha-burgundy hover:bg-vedha-burgundy/90"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Bag
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-vedha-gold text-vedha-gold" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                
                <h3 className="font-semibold text-vedha-charcoal mb-1 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-vedha-burgundy">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                
                {/* Color Options */}
                <div className="flex gap-1">
                  {product.colors.slice(0, 3).map((color, index) => (
                    <div 
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ 
                        backgroundColor: color.toLowerCase() === 'burgundy' ? '#8B1538' : 
                                       color.toLowerCase() === 'navy' ? '#1E3A8A' :
                                       color.toLowerCase() === 'black' ? '#000000' :
                                       color.toLowerCase() === 'gold' ? '#F59E0B' :
                                       color.toLowerCase() === 'emerald' ? '#10B981' :
                                       color.toLowerCase() === 'pink' ? '#EC4899' :
                                       color.toLowerCase() === 'cream' ? '#FEF3C7' :
                                       color.toLowerCase() === 'grey' ? '#6B7280' : '#E5E7EB'
                      }}
                    />
                  ))}
                  {product.colors.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-vedha-burgundy text-vedha-burgundy hover:bg-vedha-burgundy hover:text-white transition-elegant px-8"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;