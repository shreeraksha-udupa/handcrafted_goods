import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { CheckCircle } from "lucide-react";

const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const shipping = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <CheckCircle size={64} className="mx-auto text-primary mb-4" />
        <h2 className="font-display text-3xl font-bold mb-2">Order Confirmed!</h2>
        <p className="text-muted-foreground mb-2">Thank you for supporting local artisans.</p>
        <p className="text-sm text-muted-foreground mb-6">Order #ORD-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
        <div className="flex gap-4 justify-center">
          <Button asChild><Link to="/orders">View Orders</Link></Button>
          <Button asChild variant="outline"><Link to="/products">Continue Shopping</Link></Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="font-display text-2xl font-bold mb-4">Your cart is empty</h2>
        <Button asChild><Link to="/products">Shop Now</Link></Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-xl border border-border bg-card space-y-4">
            <h3 className="font-serif font-semibold text-lg">Shipping Address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2"><Label>First Name</Label><Input required placeholder="John" /></div>
              <div className="space-y-2"><Label>Last Name</Label><Input required placeholder="Doe" /></div>
            </div>
            <div className="space-y-2"><Label>Address</Label><Input required placeholder="123 Main St" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2"><Label>City</Label><Input required placeholder="Portland" /></div>
              <div className="space-y-2"><Label>State</Label><Input required placeholder="OR" /></div>
              <div className="space-y-2"><Label>ZIP Code</Label><Input required placeholder="97201" /></div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card space-y-4">
            <h3 className="font-serif font-semibold text-lg">Payment</h3>
            <p className="text-sm text-muted-foreground">Payment integration coming soon. This is a mock checkout.</p>
            <div className="space-y-2"><Label>Card Number</Label><Input placeholder="4242 4242 4242 4242" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Expiry</Label><Input placeholder="MM/YY" /></div>
              <div className="space-y-2"><Label>CVC</Label><Input placeholder="123" /></div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">Place Order · ${total.toFixed(2)}</Button>
        </form>

        <div className="p-6 rounded-xl border border-border bg-card h-fit space-y-4">
          <h3 className="font-serif font-semibold text-lg">Order Summary</h3>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-3">
                <img src={item.product.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium line-clamp-1">{item.product.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-3 space-y-1 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>${tax.toFixed(2)}</span></div>
          </div>
          <div className="border-t border-border pt-3 flex justify-between font-display font-bold text-lg">
            <span>Total</span><span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
