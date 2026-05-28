import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/40" />

      <div className="container-x relative z-10 text-center">
        <p className="eyebrow animate-fade-up">Premium Fitness Experience</p>
        <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider animate-fade-up" style={{ animationDelay: "0.1s" }}>
          BUILD YOUR <br />
          <span className="text-primary">DREAM PHYSIQUE</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Train harder. Lift stronger. Become unstoppable. Join India's most intense gym community.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link to="/join" className="btn btn-primary animate-glow">Join Membership</Link>
          <Link to="/programs" className="btn btn-outline">Explore Programs</Link>
        </div>
      </div>

      <a href="#stats" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground animate-scroll-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
