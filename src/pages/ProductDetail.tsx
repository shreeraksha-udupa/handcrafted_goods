import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";
import { products, reviews } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { Heart, Minus, Plus, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-4xl mb-4">😕</p>
        <h2 className="font-display text-2xl font-bold mb-2">Product Not Found</h2>
        <Button asChild><Link to="/products">Back to Shop</Link></Button>
      </div>
    );
  }

  const productReviews = reviews.filter((r) => r.productId === product.id);
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-foreground">Shop</Link>
        <span className="mx-2">/</span>
        <Link to={`/products?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-xl overflow-hidden bg-card">
            <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)} className={cn("w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors", i === selectedImage ? "border-primary" : "border-border")}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-accent font-medium mb-1">{product.category}</p>
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">{product.name}</h1>
            <StarRating rating={product.rating} showValue reviewCount={product.reviewCount} />
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Seller */}
          <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
            <img src={product.seller.avatar} alt={product.seller.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium">{product.seller.name}</p>
              <p className="text-xs text-muted-foreground">{product.seller.location}</p>
            </div>
            <StarRating rating={product.seller.rating} size={12} showValue />
          </div>

          {/* Quantity & Actions */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg">
                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></Button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}><Plus size={16} /></Button>
              </div>
              <span className="text-sm text-muted-foreground">{product.stock} available</span>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1" size="lg" onClick={() => addToCart(product, quantity)}>
                <ShoppingCart size={18} className="mr-2" /> Add to Cart
              </Button>
              <Button variant="outline" size="lg" onClick={() => toggleWishlist(product)}>
                <Heart size={18} className={cn(wishlisted && "fill-accent text-accent")} />
              </Button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
            {[
              { icon: Truck, label: "Free Shipping", sub: "Orders $50+" },
              { icon: Shield, label: "Secure Payment", sub: "SSL encrypted" },
              { icon: RotateCcw, label: "Easy Returns", sub: "30-day policy" },
            ].map((badge, i) => (
              <div key={i} className="text-center">
                <badge.icon size={20} className="mx-auto text-primary mb-1" />
                <p className="text-xs font-medium">{badge.label}</p>
                <p className="text-xs text-muted-foreground">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({productReviews.length})</TabsTrigger>
          <TabsTrigger value="seller">Seller Info</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-6">
          <p className="text-muted-foreground leading-relaxed max-w-3xl">{product.longDescription}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {product.tags.map((tag) => (
              <span key={tag} className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground">#{tag}</span>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-6 space-y-6">
          {productReviews.length > 0 ? productReviews.map((review) => (
            <div key={review.id} className="border-b border-border pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-sm">{review.userName}</span>
                {review.verified && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Verified</span>}
              </div>
              <StarRating rating={review.rating} size={14} />
              <p className="text-muted-foreground text-sm mt-2">{review.comment}</p>
              <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
            </div>
          )) : (
            <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
          )}
        </TabsContent>
        <TabsContent value="seller" className="mt-6">
          <div className="flex items-center gap-4 mb-4">
            <img src={product.seller.avatar} alt={product.seller.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <h3 className="font-serif font-semibold text-lg">{product.seller.name}</h3>
              <p className="text-sm text-muted-foreground">{product.seller.location} · Joined {product.seller.joinedDate}</p>
              <StarRating rating={product.seller.rating} size={14} showValue />
            </div>
          </div>
          <p className="text-muted-foreground">{product.seller.bio}</p>
          <p className="text-sm text-muted-foreground mt-2">{product.seller.totalSales} total sales</p>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="font-display text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
