import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockOrders } from "@/data/mockData";
import { Package } from "lucide-react";

const statusColors = {
  Processing: "bg-yellow-100 text-yellow-800",
  Shipped: "bg-blue-100 text-blue-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

const Orders = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold mb-8">Order History</h1>
      {mockOrders.length === 0 ? (
        <div className="text-center py-20">
          <Package size={64} className="mx-auto text-muted-foreground mb-4" />
          <h2 className="font-display text-2xl font-bold mb-2">No Orders Yet</h2>
          <Button asChild><Link to="/products">Start Shopping</Link></Button>
        </div>
      ) : (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="p-6 rounded-xl border border-border bg-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="font-serif font-semibold">{order.id}</h3>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={statusColors[order.status]}>{order.status}</Badge>
                  <span className="font-display font-bold">${order.total.toFixed(2)}</span>
                </div>
              </div>
              <div className="space-y-2">
                {order.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={item.product.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium line-clamp-1">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity} · ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              {order.trackingNumber && (
                <p className="text-xs text-muted-foreground mt-3">Tracking: {order.trackingNumber}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
