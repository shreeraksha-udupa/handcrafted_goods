import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { User, MapPin, Package } from "lucide-react";

const Profile = () => {
  const [name, setName] = useState("Sarah Mitchell");
  const [email, setEmail] = useState("sarah@example.com");
  const { toast } = useToast();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold mb-8">My Profile</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader><CardTitle className="font-serif flex items-center gap-2"><User size={20} /> Personal Info</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
                <Button variant="outline" size="sm">Change Photo</Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Full Name</Label><Input value={name} onChange={(e) => setName(e.target.value)} /></div>
                <div className="space-y-2"><Label>Email</Label><Input value={email} onChange={(e) => setEmail(e.target.value)} /></div>
              </div>
              <Button onClick={() => toast({ title: "Profile updated!" })}>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="font-serif flex items-center gap-2"><MapPin size={20} /> Saved Addresses</CardTitle></CardHeader>
            <CardContent>
              <div className="p-4 rounded-lg border border-border">
                <p className="font-medium text-sm">Home</p>
                <p className="text-sm text-muted-foreground">123 Main St, Portland, OR 97201</p>
              </div>
              <Button variant="outline" size="sm" className="mt-4">Add Address</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-6 space-y-3">
              <h4 className="font-serif font-semibold">Quick Links</h4>
              <Link to="/orders" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted">
                <Package size={16} /> Order History
              </Link>
              <Link to="/wishlist" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted">
                ❤️ Wishlist
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
