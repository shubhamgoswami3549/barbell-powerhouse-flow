import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517438476312-10d79c077509?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="container-x relative z-10 text-center">
        <p className="eyebrow">No Excuses</p>
        <h2 className="font-display text-5xl md:text-7xl mt-3 tracking-wider">
          YOUR STRONGEST SELF <br /> STARTS <span className="text-primary">TODAY</span>
        </h2>
        <Link to="/join" className="btn btn-primary mt-10 animate-glow">Join Barbell Fitness</Link>
      </div>
    </section>
  );
}
