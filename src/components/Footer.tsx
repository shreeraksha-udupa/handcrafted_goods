import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl">🏺</span>
              <span className="font-display text-xl font-bold">Artisan</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Supporting local artisans and celebrating the beauty of handcrafted goods since 2020.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-foreground">Shop</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/products" className="hover:text-foreground transition-colors">All Products</Link>
              <Link to="/products?category=Jewelry" className="hover:text-foreground transition-colors">Jewelry</Link>
              <Link to="/products?category=Home Decor" className="hover:text-foreground transition-colors">Home Decor</Link>
              <Link to="/products?category=Art" className="hover:text-foreground transition-colors">Art</Link>
              <Link to="/products?category=Pottery" className="hover:text-foreground transition-colors">Pottery</Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-foreground">Support</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Help Center</Link>
              <Link to="/" className="hover:text-foreground transition-colors">Shipping Info</Link>
              <Link to="/" className="hover:text-foreground transition-colors">Returns</Link>
              <Link to="/" className="hover:text-foreground transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Subscribe for new arrivals and artisan stories.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="text-sm" />
              <Button size="sm">Join</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Artisan Marketplace. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
