import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { label: "All Products", href: "/shop" },
        { label: "Traditional Wear", href: "/collections/traditional" },
        { label: "Contemporary", href: "/collections/contemporary" },
        { label: "New Arrivals", href: "/new-arrivals" },
        { label: "Sale", href: "/sale" }
      ]
    },
    {
      title: "Customer Care",
      links: [
        { label: "Size Guide", href: "/size-guide" },
        { label: "Shipping Info", href: "/shipping" },
        { label: "Returns", href: "/returns" },
        { label: "Care Instructions", href: "/care" },
        { label: "Track Order", href: "/track-order" }
      ]
    },
    {
      title: "About Vedha",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Craftsmanship", href: "/craftsmanship" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-vedha-light border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-vedha-burgundy mb-4">
              Stay in Style
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for exclusive offers, style tips, and first access to new collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="bg-vedha-burgundy hover:bg-vedha-burgundy/90 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-serif font-bold bg-gradient-to-r from-vedha-burgundy to-vedha-gold bg-clip-text text-transparent mb-4">
                Vedha
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Where tradition meets contemporary design. Discover timeless pieces 
                that celebrate heritage while embracing modern sophistication.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-vedha-burgundy" />
                  <span>123 Fashion Street, Mumbai, India 400001</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-vedha-burgundy" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-vedha-burgundy" />
                  <span>hello@vedha.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="border-vedha-burgundy text-vedha-burgundy hover:bg-vedha-burgundy hover:text-white transition-elegant"
                  >
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-vedha-burgundy mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-vedha-burgundy transition-elegant"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Vedha. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-vedha-burgundy transition-elegant">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-vedha-burgundy transition-elegant">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-vedha-burgundy transition-elegant">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;