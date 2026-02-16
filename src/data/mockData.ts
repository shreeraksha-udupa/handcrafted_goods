export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  category: string;
  images: string[];
  rating: number;
  reviewCount: number;
  seller: Seller;
  stock: number;
  isActive: boolean;
  createdAt: string;
  tags: string[];
}

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  rating: number;
  totalSales: number;
  joinedDate: string;
  location: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: { product: Product; quantity: number; price: number }[];
  total: number;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  date: string;
  shippingAddress: string;
  trackingNumber?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "Customer" | "Seller" | "Admin";
  avatar: string;
  joinedDate: string;
  isActive: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
  image: string;
}

export const categories: Category[] = [
  { id: "1", name: "Jewelry", icon: "💍", productCount: 45, image: "https://images.unsplash.com/photo-1515562141589-67f0d569b4e7?w=400&h=300&fit=crop" },
  { id: "2", name: "Home Decor", icon: "🏠", productCount: 38, image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=300&fit=crop" },
  { id: "3", name: "Art", icon: "🎨", productCount: 29, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop" },
  { id: "4", name: "Clothing", icon: "👗", productCount: 52, image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a70?w=400&h=300&fit=crop" },
  { id: "5", name: "Pottery", icon: "🏺", productCount: 21, image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop" },
  { id: "6", name: "Textiles", icon: "🧶", productCount: 33, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
];

export const sellers: Seller[] = [
  { id: "s1", name: "Maya's Crafts", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", bio: "Handmade jewelry with love and care since 2018.", rating: 4.8, totalSales: 342, joinedDate: "2018-03-15", location: "Portland, OR" },
  { id: "s2", name: "Rustic Roots", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", bio: "Organic home decor from reclaimed materials.", rating: 4.6, totalSales: 215, joinedDate: "2019-06-20", location: "Austin, TX" },
  { id: "s3", name: "Canvas Dreams", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", bio: "Original paintings and prints for your space.", rating: 4.9, totalSales: 178, joinedDate: "2020-01-10", location: "Brooklyn, NY" },
  { id: "s4", name: "Woven Tales", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", bio: "Traditional textiles with modern designs.", rating: 4.7, totalSales: 290, joinedDate: "2017-11-05", location: "Santa Fe, NM" },
];

export const products: Product[] = [
  {
    id: "p1", name: "Handwoven Macramé Wall Hanging", price: 89.99, originalPrice: 119.99,
    description: "Beautiful handwoven macramé wall art made from natural cotton rope.",
    longDescription: "This stunning macramé wall hanging is handcrafted from 100% natural cotton rope. Each piece is unique and adds a bohemian touch to any room. The intricate knotting patterns take over 20 hours to complete. Measures 24\" wide by 36\" long. Comes with a natural driftwood hanger.",
    category: "Home Decor", images: ["https://images.unsplash.com/photo-1622208385805-2a814b2e3e2e?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=600&fit=crop"],
    rating: 4.8, reviewCount: 24, seller: sellers[1], stock: 5, isActive: true, createdAt: "2025-01-15", tags: ["macrame", "wall art", "boho"]
  },
  {
    id: "p2", name: "Sterling Silver Leaf Earrings", price: 45.00,
    description: "Delicate leaf-shaped earrings in sterling silver with matte finish.",
    longDescription: "These exquisite leaf earrings are hand-forged from sterling silver. Each leaf is carefully shaped and given a beautiful matte finish. Lightweight and comfortable for all-day wear. Hypoallergenic. Length: 1.5 inches.",
    category: "Jewelry", images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop"],
    rating: 4.9, reviewCount: 56, seller: sellers[0], stock: 12, isActive: true, createdAt: "2025-02-01", tags: ["earrings", "silver", "nature"]
  },
  {
    id: "p3", name: "Abstract Sunset Oil Painting", price: 250.00, originalPrice: 320.00,
    description: "Original abstract oil painting capturing the warmth of a desert sunset.",
    longDescription: "This original oil painting is created on stretched canvas with professional-grade oil paints. The warm palette of oranges, terracottas, and golds creates a stunning focal point. Canvas size: 24\" x 30\". Arrives ready to hang with wire backing.",
    category: "Art", images: ["https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=600&fit=crop"],
    rating: 4.7, reviewCount: 12, seller: sellers[2], stock: 1, isActive: true, createdAt: "2025-01-20", tags: ["painting", "abstract", "sunset"]
  },
  {
    id: "p4", name: "Hand-Dyed Linen Scarf", price: 65.00,
    description: "Naturally dyed linen scarf in soft earth tones.",
    longDescription: "This gorgeous linen scarf is hand-dyed using natural plant-based dyes. The soft earth tones complement any outfit. Made from 100% Belgian linen. Generous size: 28\" x 72\". Gets softer with every wash.",
    category: "Clothing", images: ["https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop"],
    rating: 4.5, reviewCount: 31, seller: sellers[3], stock: 8, isActive: true, createdAt: "2025-01-25", tags: ["scarf", "linen", "natural dye"]
  },
  {
    id: "p5", name: "Ceramic Raku Tea Bowl", price: 78.00,
    description: "Traditional raku-fired tea bowl with unique glaze patterns.",
    longDescription: "Each raku tea bowl is a one-of-a-kind piece created through the ancient Japanese raku firing technique. The dramatic temperature changes create unique crackle patterns in the glaze. Perfect for matcha or everyday use. Approximately 4\" diameter, 3\" tall.",
    category: "Pottery", images: ["https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop"],
    rating: 4.9, reviewCount: 18, seller: sellers[1], stock: 3, isActive: true, createdAt: "2025-02-05", tags: ["tea bowl", "raku", "ceramic"]
  },
  {
    id: "p6", name: "Handwoven Wool Throw Blanket", price: 145.00, originalPrice: 180.00,
    description: "Luxuriously soft handwoven wool throw in natural undyed colors.",
    longDescription: "This handwoven throw blanket is crafted from 100% natural, undyed wool sourced from local farms. The herringbone pattern adds visual texture while maintaining a neutral palette. Measures 50\" x 70\". Machine washable on gentle cycle.",
    category: "Textiles", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop"],
    rating: 4.6, reviewCount: 42, seller: sellers[3], stock: 6, isActive: true, createdAt: "2025-01-10", tags: ["blanket", "wool", "handwoven"]
  },
  {
    id: "p7", name: "Beaded Statement Necklace", price: 120.00,
    description: "Bold beaded necklace featuring hand-selected semi-precious stones.",
    longDescription: "This statement necklace features a curated mix of semi-precious stones including agate, jasper, and turquoise beads. Hand-strung on durable silk thread with a sterling silver clasp. Length: 18\" with 2\" extender.",
    category: "Jewelry", images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop"],
    rating: 4.8, reviewCount: 27, seller: sellers[0], stock: 4, isActive: true, createdAt: "2025-02-08", tags: ["necklace", "beaded", "statement"]
  },
  {
    id: "p8", name: "Carved Wooden Serving Board", price: 55.00,
    description: "Artisan-carved serving board from sustainably sourced walnut.",
    longDescription: "This beautiful serving board is hand-carved from a single piece of sustainably sourced American black walnut. Finished with food-safe mineral oil. Each board's natural grain pattern is unique. Approximately 18\" x 8\" x 1\".",
    category: "Home Decor", images: ["https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&h=600&fit=crop"],
    rating: 4.4, reviewCount: 35, seller: sellers[1], stock: 10, isActive: true, createdAt: "2025-01-18", tags: ["cutting board", "walnut", "kitchen"]
  },
  {
    id: "p9", name: "Watercolor Botanical Print Set", price: 85.00,
    description: "Set of 3 botanical watercolor prints on archival paper.",
    longDescription: "This set of three botanical prints is reproduced from original watercolor paintings. Printed on 300gsm archival cotton rag paper using pigment-based inks. Each print measures 8\" x 10\". Unframed. Colors will not fade over time.",
    category: "Art", images: ["https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop"],
    rating: 4.7, reviewCount: 20, seller: sellers[2], stock: 15, isActive: true, createdAt: "2025-02-10", tags: ["prints", "botanical", "watercolor"]
  },
  {
    id: "p10", name: "Embroidered Silk Kimono", price: 195.00, originalPrice: 250.00,
    description: "Hand-embroidered silk kimono with floral motifs.",
    longDescription: "This stunning silk kimono features hand-embroidered floral motifs inspired by traditional Japanese designs. Made from 100% mulberry silk with a satin finish. One size fits most. Can be worn as a robe or outerwear.",
    category: "Clothing", images: ["https://images.unsplash.com/photo-1434389677669-e08b4cda3a70?w=600&h=600&fit=crop"],
    rating: 4.9, reviewCount: 15, seller: sellers[3], stock: 2, isActive: true, createdAt: "2025-01-30", tags: ["kimono", "silk", "embroidered"]
  },
  {
    id: "p11", name: "Stoneware Vase Set", price: 110.00,
    description: "Set of 3 handmade stoneware vases in earthy glazes.",
    longDescription: "This trio of handmade stoneware vases features complementary earthy glazes in sage green, warm terracotta, and cream. Each vase is wheel-thrown and individually glazed. Heights range from 4\" to 8\". Watertight for fresh flowers.",
    category: "Pottery", images: ["https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=600&fit=crop"],
    rating: 4.6, reviewCount: 22, seller: sellers[1], stock: 7, isActive: true, createdAt: "2025-02-03", tags: ["vase", "stoneware", "set"]
  },
  {
    id: "p12", name: "Hand-Knotted Wall Tapestry", price: 175.00,
    description: "Large hand-knotted tapestry in warm desert tones.",
    longDescription: "This large-scale wall tapestry is hand-knotted from a blend of cotton and wool yarns. The geometric design in warm desert tones adds texture and warmth to any wall. Measures 36\" x 48\". Includes brass hanging rod.",
    category: "Textiles", images: ["https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=600&fit=crop"],
    rating: 4.8, reviewCount: 11, seller: sellers[3], stock: 3, isActive: true, createdAt: "2025-02-12", tags: ["tapestry", "wall hanging", "knotted"]
  },
];

export const reviews: Review[] = [
  { id: "r1", productId: "p1", userId: "u1", userName: "Sarah M.", rating: 5, comment: "Absolutely stunning! The craftsmanship is incredible. It's the perfect addition to my living room.", date: "2025-01-28", verified: true },
  { id: "r2", productId: "p1", userId: "u2", userName: "James K.", rating: 4, comment: "Beautiful piece, slightly smaller than expected but still gorgeous.", date: "2025-02-02", verified: true },
  { id: "r3", productId: "p2", userId: "u3", userName: "Emily R.", rating: 5, comment: "These earrings are so delicate and beautiful. I get compliments every time I wear them!", date: "2025-02-05", verified: true },
  { id: "r4", productId: "p3", userId: "u4", userName: "Michael T.", rating: 5, comment: "The colors are even more vibrant in person. A true masterpiece.", date: "2025-02-01", verified: true },
  { id: "r5", productId: "p5", userId: "u5", userName: "Lisa W.", rating: 5, comment: "Perfect for my morning tea ritual. The glaze pattern is mesmerizing.", date: "2025-02-10", verified: true },
  { id: "r6", productId: "p2", userId: "u6", userName: "Anna C.", rating: 5, comment: "Gift for my mom and she loved them! Great quality.", date: "2025-02-08", verified: true },
];

export const mockOrders: Order[] = [
  {
    id: "ORD-001", items: [{ product: products[0], quantity: 1, price: 89.99 }, { product: products[1], quantity: 2, price: 45.00 }],
    total: 179.99, status: "Delivered", date: "2025-01-20", shippingAddress: "123 Main St, Portland, OR 97201", trackingNumber: "1Z999AA10123456784"
  },
  {
    id: "ORD-002", items: [{ product: products[4], quantity: 1, price: 78.00 }],
    total: 78.00, status: "Shipped", date: "2025-02-05", shippingAddress: "456 Oak Ave, Austin, TX 78701", trackingNumber: "1Z999AA10123456785"
  },
  {
    id: "ORD-003", items: [{ product: products[2], quantity: 1, price: 250.00 }, { product: products[7], quantity: 1, price: 55.00 }],
    total: 305.00, status: "Processing", date: "2025-02-14", shippingAddress: "789 Elm Blvd, Brooklyn, NY 11201"
  },
];

export const mockUsers: User[] = [
  { id: "u1", name: "Sarah Mitchell", email: "sarah@example.com", role: "Customer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", joinedDate: "2024-06-15", isActive: true },
  { id: "u2", name: "James Kim", email: "james@example.com", role: "Customer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", joinedDate: "2024-08-20", isActive: true },
  { id: "u3", name: "Maya Johnson", email: "maya@example.com", role: "Seller", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", joinedDate: "2018-03-15", isActive: true },
  { id: "u4", name: "Robert Chen", email: "robert@example.com", role: "Seller", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", joinedDate: "2019-06-20", isActive: true },
  { id: "u5", name: "Admin User", email: "admin@example.com", role: "Admin", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", joinedDate: "2023-01-01", isActive: true },
  { id: "u6", name: "Inactive User", email: "inactive@example.com", role: "Customer", avatar: "", joinedDate: "2024-01-01", isActive: false },
];

export const testimonials = [
  { id: "t1", name: "Jessica P.", text: "I love supporting local artisans through this platform. Every piece I've purchased has been unique and beautifully crafted.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop", role: "Loyal Customer" },
  { id: "t2", name: "David L.", text: "As a seller, this marketplace has connected me with customers who truly appreciate handmade goods. My sales have doubled!", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop", role: "Artisan Seller" },
  { id: "t3", name: "Maria G.", text: "The quality of products here is unmatched. You can feel the love and care in every handcrafted item.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop", role: "Happy Customer" },
];
