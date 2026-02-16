import { useState } from "react";
import { categories as initialCategories } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Edit, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminCategories = () => {
  const [cats, setCats] = useState(initialCategories);
  const [newCat, setNewCat] = useState("");
  const { toast } = useToast();

  const addCategory = () => {
    if (!newCat.trim()) return;
    setCats([...cats, { id: Date.now().toString(), name: newCat, icon: "📦", productCount: 0, image: "" }]);
    setNewCat("");
    toast({ title: "Category added!" });
  };

  const removeCategory = (id: string) => {
    setCats(cats.filter((c) => c.id !== id));
    toast({ title: "Category removed" });
  };

  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-bold">Manage Categories</h2>

      <div className="flex gap-3">
        <Input value={newCat} onChange={(e) => setNewCat(e.target.value)} placeholder="New category name" className="max-w-xs" />
        <Button onClick={addCategory}><Plus size={16} className="mr-1" /> Add</Button>
      </div>

      <div className="space-y-2">
        {cats.map((cat) => (
          <div key={cat.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card">
            <div className="flex items-center gap-3">
              <span className="text-xl">{cat.icon}</span>
              <span className="font-medium text-sm">{cat.name}</span>
              <span className="text-xs text-muted-foreground">{cat.productCount} products</span>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8"><Edit size={14} /></Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeCategory(cat.id)}><Trash2 size={14} /></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategories;
