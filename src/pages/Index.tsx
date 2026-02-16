import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import { products, categories, testimonials } from "@/data/mockData";
import { ArrowRight, Truck, Shield, HeartHandshake, Palette } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-card py-20 md:py-28">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-accent font-serif text-sm tracking-widest uppercase mb-4 animate-fade-in">Handcrafted with Love</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Support Local
            <br />
            <span className="text-primary">Artisans</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover unique, handcrafted goods made with passion by talented artisans from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/products">Shop Now <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link to="/register">Become a Seller</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMS41IiBmaWxsPSIjODg4Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2EpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')]" />
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Shop by Category</h2>
          <p className="text-muted-foreground">Explore our curated collections of handcrafted goods</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.name}`}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                <span className="text-2xl block mb-1">{cat.icon}</span>
                <span className="text-sm font-medium text-primary-foreground">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Hand-picked favorites from our artisans</p>
            </div>
            <Button asChild variant="link" className="hidden md:flex">
              <Link to="/products">View All <ArrowRight size={16} className="ml-1" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button asChild variant="outline">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">How It Works</h2>
          <p className="text-muted-foreground">From artisan's hands to your home</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Palette, title: "Artisans Create", desc: "Talented makers handcraft unique goods with care and passion." },
            { icon: Shield, title: "Quality Assured", desc: "Every product is vetted for authenticity and craftsmanship." },
            { icon: HeartHandshake, title: "You Discover", desc: "Browse and find pieces that speak to you." },
            { icon: Truck, title: "We Deliver", desc: "Securely packaged and delivered to your doorstep." },
          ].map((step, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">What People Say</h2>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <img
              src={testimonials[currentTestimonial].avatar}
              alt={testimonials[currentTestimonial].name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-lg text-foreground italic mb-4">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="font-serif font-semibold text-foreground">{testimonials[currentTestimonial].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentTestimonial ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
