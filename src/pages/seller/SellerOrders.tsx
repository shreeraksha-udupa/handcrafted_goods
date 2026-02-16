import { mockOrders } from "@/data/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const SellerOrders = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-bold">Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left py-3 font-medium">Order ID</th>
              <th className="text-left py-3 font-medium">Items</th>
              <th className="text-left py-3 font-medium">Date</th>
              <th className="text-left py-3 font-medium">Total</th>
              <th className="text-left py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-b border-border/50">
                <td className="py-3 font-medium">{order.id}</td>
                <td className="py-3 text-muted-foreground">{order.items.map((i) => i.product.name).join(", ")}</td>
                <td className="py-3 text-muted-foreground">{order.date}</td>
                <td className="py-3 font-medium">${order.total.toFixed(2)}</td>
                <td className="py-3">
                  <Select defaultValue={order.status}>
                    <SelectTrigger className="w-32 h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Processing">Processing</SelectItem>
                      <SelectItem value="Shipped">Shipped</SelectItem>
                      <SelectItem value="Delivered">Delivered</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerOrders;
