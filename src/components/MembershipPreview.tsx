import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const plans = [
  {
    name: "Starter",
    price: "₹999",
    badge: null,
    features: ["Full gym access", "Locker facility", "Basic workout guidance", "Open hours: 6am – 10pm"],
  },
  {
    name: "Pro",
    price: "₹1,999",
    badge: "Most Popular",
    features: ["Everything in Starter", "Personal trainer", "Diet consultation", "Group classes", "Body composition analysis"],
  },
  {
    name: "Elite",
    price: "₹3,499",
    badge: null,
    features: ["Everything in Pro", "Steam & spa access", "Advanced fitness tracking", "1-on-1 nutrition coach", "24/7 gym access"],
  },
];

export function MembershipPreview() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center mb-14">
          <p className="eyebrow">Membership Plans</p>
          <h2 className="text-4xl md:text-6xl mt-3">Choose Your <span className="text-primary">Path</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => {
            const popular = p.badge !== null;
            return (
              <div
                key={p.name}
                className={`card-base p-8 relative ${popular ? "border-primary lg:scale-105 shadow-glow" : ""}`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-red text-xs px-4 py-1 rounded-full uppercase tracking-widest font-semibold">
                    {p.badge}
                  </div>
                )}
                <h3 className="text-3xl tracking-wider">{p.name}</h3>
                <div className="mt-3 font-display text-5xl text-primary">
                  {p.price}<span className="text-base text-muted-foreground">/mo</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link to="/join" className={`btn mt-7 w-full ${popular ? "btn-primary" : "btn-ghost"}`}>
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
