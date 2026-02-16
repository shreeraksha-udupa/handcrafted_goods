import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingBag, BarChart3, Plus, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sellerLinks = [
  { label: "Overview", to: "/seller/dashboard", icon: LayoutDashboard },
  { label: "Products", to: "/seller/products", icon: Package },
  { label: "Orders", to: "/seller/orders", icon: ShoppingBag },
  { label: "Add Product", to: "/seller/add-product", icon: Plus },
];

const SellerLayout = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Button asChild variant="ghost" size="icon"><Link to="/"><ChevronLeft size={20} /></Link></Button>
        <h1 className="font-display text-2xl font-bold">Seller Dashboard</h1>
      </div>
      <div className="flex gap-8">
        <aside className="hidden md:block w-56 flex-shrink-0 space-y-1">
          {sellerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                location.pathname === link.to ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <link.icon size={18} />
              {link.label}
            </Link>
          ))}
        </aside>

        {/* Mobile nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around py-2 z-40">
          {sellerLinks.map((link) => (
            <Link key={link.to} to={link.to} className={cn("flex flex-col items-center gap-1 px-3 py-1 text-xs", location.pathname === link.to ? "text-primary" : "text-muted-foreground")}>
              <link.icon size={18} />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
