import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const AddProduct = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Product created!", description: `"${title}" has been listed.` });
  };

  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-bold">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2"><Label>Product Title</Label><Input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. Handwoven Basket" /></div>
            <div className="space-y-2"><Label>Description</Label><Textarea value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Describe your product..." rows={4} /></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2"><Label>Price ($)</Label><Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required placeholder="0.00" /></div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{categories.map((c) => <SelectItem key={c.id} value={c.name}>{c.name}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2"><Label>Stock</Label><Input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required placeholder="0" /></div>
            </div>
            <div className="space-y-2">
              <Label>Images</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload size={32} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Click or drag images here</p>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
              </div>
            </div>
            <Button type="submit" size="lg">Publish Product</Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default AddProduct;
