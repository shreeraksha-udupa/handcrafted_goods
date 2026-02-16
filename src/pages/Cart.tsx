import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const shipping = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-4" />
        <h2 className="font-display text-2xl font-bold mb-2">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-6">Looks like you haven't added any items yet.</p>
        <Button asChild><Link to="/products">Start Shopping</Link></Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
              <Link to={`/product/${item.product.id}`}>
                <img src={item.product.images[0]} alt={item.product.name} className="w-24 h-24 rounded-lg object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/product/${item.product.id}`} className="font-serif font-medium hover:text-primary transition-colors line-clamp-1">{item.product.name}</Link>
                <p className="text-sm text-muted-foreground">{item.product.category}</p>
                <p className="font-display font-semibold mt-1">${item.product.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.product.id)}>
                  <Trash2 size={16} />
                </Button>
                <div className="flex items-center border border-border rounded-lg">
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}><Minus size={14} /></Button>
                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}><Plus size={14} /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl border border-border bg-card h-fit space-y-4">
          <h3 className="font-serif font-semibold text-lg">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Tax (est.)</span><span>${tax.toFixed(2)}</span></div>
          </div>
          <div className="border-t border-border pt-3 flex justify-between font-display font-bold text-lg">
            <span>Total</span><span>${total.toFixed(2)}</span>
          </div>
          <Button asChild className="w-full" size="lg"><Link to="/checkout">Proceed to Checkout</Link></Button>
          <p className="text-xs text-center text-muted-foreground">Free shipping on orders over $50</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
