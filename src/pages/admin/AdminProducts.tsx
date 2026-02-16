import { products } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const AdminProducts = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-bold">Manage Products</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left py-3 font-medium">Product</th>
              <th className="text-left py-3 font-medium">Seller</th>
              <th className="text-left py-3 font-medium">Category</th>
              <th className="text-left py-3 font-medium">Price</th>
              <th className="text-right py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-border/50">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <img src={p.images[0]} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <span className="font-medium line-clamp-1">{p.name}</span>
                  </div>
                </td>
                <td className="py-3 text-muted-foreground">{p.seller.name}</td>
                <td className="py-3 text-muted-foreground">{p.category}</td>
                <td className="py-3 font-medium">${p.price.toFixed(2)}</td>
                <td className="py-3 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 size={14} /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
