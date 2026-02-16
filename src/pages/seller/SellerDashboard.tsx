import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products, mockOrders } from "@/data/mockData";
import { DollarSign, Package, ShoppingBag, Star } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Sep", sales: 1200 },
  { month: "Oct", sales: 1800 },
  { month: "Nov", sales: 2400 },
  { month: "Dec", sales: 3100 },
  { month: "Jan", sales: 2800 },
  { month: "Feb", sales: 3400 },
];

const stats = [
  { label: "Total Revenue", value: "$12,450", icon: DollarSign, change: "+12%" },
  { label: "Total Orders", value: "342", icon: ShoppingBag, change: "+8%" },
  { label: "Products", value: "24", icon: Package, change: "+2" },
  { label: "Avg Rating", value: "4.8", icon: Star, change: "+0.1" },
];

const SellerDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon size={18} className="text-primary" />
                <span className="text-xs text-primary font-medium">{stat.change}</span>
              </div>
              <p className="font-display text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle className="font-serif">Sales Overview</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 20%, 82%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="sales" fill="hsl(142, 28%, 36%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="font-serif">Recent Orders</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="text-left py-2 font-medium">Order</th>
                  <th className="text-left py-2 font-medium">Product</th>
                  <th className="text-left py-2 font-medium">Status</th>
                  <th className="text-right py-2 font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border/50">
                    <td className="py-3 font-medium">{order.id}</td>
                    <td className="py-3 text-muted-foreground">{order.items[0].product.name}</td>
                    <td className="py-3"><span className={`text-xs px-2 py-1 rounded-full ${order.status === "Delivered" ? "bg-green-100 text-green-800" : order.status === "Shipped" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}>{order.status}</span></td>
                    <td className="py-3 text-right font-medium">${order.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerDashboard;
