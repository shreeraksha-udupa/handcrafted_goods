import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "@/components/StarRating";
import { Product } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const wishlisted = isInWishlist(product.id);

  return (
    <Card className="group overflow-hidden border-border/60 hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden aspect-square">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-md">
            Sale
          </span>
        )}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <Heart size={18} className={cn("transition-colors", wishlisted ? "fill-accent text-accent" : "text-foreground")} />
        </button>
      </div>
      <CardContent className="p-4 space-y-2">
        <Link to={`/product/${product.id}`} className="block">
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <h3 className="font-serif font-medium text-foreground line-clamp-2 mt-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} size={14} reviewCount={product.reviewCount} />
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-lg text-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <Button size="icon" variant="outline" className="h-9 w-9" onClick={() => addToCart(product)}>
            <ShoppingCart size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
