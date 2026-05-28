import { Link } from "@tanstack/react-router";
import { Dumbbell, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Dumbbell className="w-7 h-7 text-primary" />
            <span className="font-display text-2xl tracking-wider">BARBELL<span className="text-primary">.</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Train harder. Lift stronger. Become unstoppable. Premium fitness experience built for results.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              ["/about", "About Us"], ["/programs", "Programs"], ["/trainers", "Trainers"],
              ["/membership", "Membership"], ["/blog", "Blog"], ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-primary transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /> 221 Iron Street, Mumbai, India</li>
            <li className="flex gap-2"><Phone size={16} className="text-primary mt-0.5 shrink-0" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail size={16} className="text-primary mt-0.5 shrink-0" /> hello@barbellfitness.in</li>
            <li className="flex gap-2"><Clock size={16} className="text-primary mt-0.5 shrink-0" /> Mon–Sun: 5:00 AM – 11:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl tracking-wider mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Get weekly workout tips & member-only offers.</p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="bg-input border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
            <button className="btn btn-primary !py-2 !text-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Barbell Fitness. All rights reserved.
      </div>
    </footer>
  );
}
