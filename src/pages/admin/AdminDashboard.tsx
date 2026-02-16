import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const growthData = [
  { month: "Aug", users: 120, orders: 80 },
  { month: "Sep", users: 180, orders: 120 },
  { month: "Oct", users: 250, orders: 180 },
  { month: "Nov", users: 340, orders: 260 },
  { month: "Dec", users: 420, orders: 350 },
  { month: "Jan", users: 510, orders: 420 },
  { month: "Feb", users: 580, orders: 480 },
];

const stats = [
  { label: "Total Users", value: "580", icon: Users },
  { label: "Total Sellers", value: "48", icon: TrendingUp },
  { label: "Products", value: "312", icon: Package },
  { label: "Orders", value: "1,247", icon: ShoppingBag },
  { label: "Revenue", value: "$87,420", icon: DollarSign },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <stat.icon size={18} className="text-primary mb-2" />
              <p className="font-display text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle className="font-serif">Platform Growth</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 20%, 82%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="hsl(142, 28%, 36%)" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="orders" stroke="hsl(16, 55%, 52%)" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
