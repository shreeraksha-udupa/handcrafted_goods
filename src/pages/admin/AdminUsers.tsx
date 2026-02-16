import { mockUsers } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const roleColors = { Customer: "bg-blue-100 text-blue-800", Seller: "bg-green-100 text-green-800", Admin: "bg-purple-100 text-purple-800" };

const AdminUsers = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-bold">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left py-3 font-medium">User</th>
              <th className="text-left py-3 font-medium">Email</th>
              <th className="text-left py-3 font-medium">Role</th>
              <th className="text-left py-3 font-medium">Joined</th>
              <th className="text-left py-3 font-medium">Status</th>
              <th className="text-right py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user) => (
              <tr key={user.id} className="border-b border-border/50">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40"} alt="" className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="py-3 text-muted-foreground">{user.email}</td>
                <td className="py-3"><Badge className={roleColors[user.role]}>{user.role}</Badge></td>
                <td className="py-3 text-muted-foreground">{user.joinedDate}</td>
                <td className="py-3"><Badge variant={user.isActive ? "default" : "secondary"}>{user.isActive ? "Active" : "Inactive"}</Badge></td>
                <td className="py-3 text-right">
                  <Button variant="outline" size="sm">{user.isActive ? "Deactivate" : "Activate"}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
