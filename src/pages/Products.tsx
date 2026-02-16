import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import { products, categories } from "@/data/mockData";
import { Search, SlidersHorizontal, X } from "lucide-react";

const ITEMS_PER_PAGE = 8;

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategory ? [initialCategory] : []);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setPage(1);
  };

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (p.rating < minRating) return false;
      return true;
    });

    switch (sort) {
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "popular": result.sort((a, b) => b.reviewCount - a.reviewCount); break;
      default: result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return result;
  }, [search, selectedCategories, priceRange, minRating, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const Sidebar = () => (
    <div className="space-y-6">
      <div>
        <h4 className="font-serif font-semibold mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <Checkbox checked={selectedCategories.includes(cat.name)} onCheckedChange={() => toggleCategory(cat.name)} />
              <span className="text-sm">{cat.icon} {cat.name}</span>
              <span className="text-xs text-muted-foreground ml-auto">({cat.productCount})</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-serif font-semibold mb-3">Price Range</h4>
        <Slider value={priceRange} onValueChange={(v) => { setPriceRange(v); setPage(1); }} max={300} step={5} className="mb-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h4 className="font-serif font-semibold mb-3">Minimum Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((r) => (
            <button key={r} onClick={() => { setMinRating(r); setPage(1); }} className={`flex items-center gap-2 w-full text-left p-1.5 rounded ${minRating === r ? "bg-primary/10" : "hover:bg-muted"}`}>
              <StarRating rating={r} size={14} />
              <span className="text-sm text-muted-foreground">& up</span>
            </button>
          ))}
          {minRating > 0 && (
            <button onClick={() => setMinRating(0)} className="text-xs text-accent hover:underline">Clear</button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Shop All Products</h1>
          <p className="text-muted-foreground">{filtered.length} products found</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search products..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} className="pl-9" />
          </div>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low → High</SelectItem>
              <SelectItem value="price-high">Price: High → Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setFiltersOpen(!filtersOpen)}>
            <SlidersHorizontal size={18} />
          </Button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <Sidebar />
        </aside>

        {/* Mobile filters */}
        {filtersOpen && (
          <div className="fixed inset-0 z-50 bg-background p-6 overflow-y-auto md:hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-xl font-bold">Filters</h3>
              <Button variant="ghost" size="icon" onClick={() => setFiltersOpen(false)}><X size={20} /></Button>
            </div>
            <Sidebar />
            <Button className="w-full mt-6" onClick={() => setFiltersOpen(false)}>Apply Filters</Button>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginated.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="font-display text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              <Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button key={i} variant={page === i + 1 ? "default" : "outline"} size="sm" onClick={() => setPage(i + 1)}>
                  {i + 1}
                </Button>
              ))}
              <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
