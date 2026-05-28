import { Link } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, Flame, Activity, Heart, Zap, Leaf } from "lucide-react";

const programs = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build raw power with progressive overload programs." },
  { icon: Flame, title: "Fat Loss", desc: "High-intensity routines to shred fat fast and sustainably." },
  { icon: Activity, title: "CrossFit", desc: "Functional training combining strength and conditioning." },
  { icon: Heart, title: "Cardio", desc: "Boost endurance with curated HIIT and steady-state cardio." },
  { icon: Zap, title: "Powerlifting", desc: "Master the big three: squat, bench, and deadlift." },
  { icon: Leaf, title: "Yoga & Mobility", desc: "Recover, stretch, and build flexibility for longevity." },
];

export function ProgramsSection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center mb-14">
          <p className="eyebrow">What We Offer</p>
          <h2 className="text-4xl md:text-6xl mt-3">Featured <span className="text-primary">Programs</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-base p-8 group">
              <div className="w-14 h-14 rounded-md bg-gradient-red flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Icon className="text-white" size={26} />
              </div>
              <h3 className="text-2xl tracking-wider">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <Link to="/programs" className="inline-flex items-center gap-2 mt-5 text-sm uppercase tracking-wider text-primary group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
