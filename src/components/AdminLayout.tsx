import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Package, FolderTree, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const adminLinks = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
  { label: "Users", to: "/admin/users", icon: Users },
  { label: "Products", to: "/admin/products", icon: Package },
  { label: "Categories", to: "/admin/categories", icon: FolderTree },
];

const AdminLayout = () => {
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Button asChild variant="ghost" size="icon"><Link to="/"><ChevronLeft size={20} /></Link></Button>
        <h1 className="font-display text-2xl font-bold">Admin Panel</h1>
      </div>
      <div className="flex gap-8">
        <aside className="hidden md:block w-56 flex-shrink-0 space-y-1">
          {adminLinks.map((link) => (
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
        <div className="flex-1 min-w-0"><Outlet /></div>
      </div>
    </div>
  );
};

export default AdminLayout;
