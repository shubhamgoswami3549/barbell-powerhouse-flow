import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export function AboutPreview() {
  const features = [
    "Certified world-class trainers",
    "Premium imported equipment",
    "Personalized workout plans",
    "Nutrition & diet guidance",
  ];
  return (
    <section className="section bg-card/40">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&q=80"
            alt="Inside Barbell Fitness gym"
            className="rounded-lg shadow-card w-full"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-red p-6 rounded-lg shadow-glow">
            <div className="font-display text-5xl">10+</div>
            <div className="text-xs uppercase tracking-widest">Years of Iron</div>
          </div>
        </div>
        <div>
          <p className="eyebrow">About Barbell Fitness</p>
          <h2 className="text-4xl md:text-5xl mt-3">Where <span className="text-primary">Strength</span> Is Forged.</h2>
          <p className="mt-5 text-muted-foreground">
            Since 2014, Barbell Fitness has been India's home for serious lifters and everyday athletes alike.
            We combine science-backed coaching with a no-excuses culture to deliver transformations that last.
          </p>
          <ul className="mt-6 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <Check size={14} />
                </span>
                <span className="text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn btn-primary mt-8">Discover More</Link>
        </div>
      </div>
    </section>
  );
}
