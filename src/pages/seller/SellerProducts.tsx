import { products } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Edit, Trash2, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SellerProducts = () => {
  const sellerProducts = products.slice(0, 6);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-bold">My Products</h2>
        <Button asChild size="sm"><Link to="/seller/add-product"><Plus size={16} className="mr-1" /> Add Product</Link></Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left py-3 font-medium">Product</th>
              <th className="text-left py-3 font-medium">Category</th>
              <th className="text-left py-3 font-medium">Price</th>
              <th className="text-left py-3 font-medium">Stock</th>
              <th className="text-left py-3 font-medium">Status</th>
              <th className="text-right py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sellerProducts.map((p) => (
              <tr key={p.id} className="border-b border-border/50">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <img src={p.images[0]} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <span className="font-medium line-clamp-1">{p.name}</span>
                  </div>
                </td>
                <td className="py-3 text-muted-foreground">{p.category}</td>
                <td className="py-3 font-medium">${p.price.toFixed(2)}</td>
                <td className="py-3">{p.stock}</td>
                <td className="py-3"><Badge variant={p.isActive ? "default" : "secondary"}>{p.isActive ? "Active" : "Inactive"}</Badge></td>
                <td className="py-3 text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Edit size={14} /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 size={14} /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerProducts;
