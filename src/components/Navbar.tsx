import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/trainers", label: "Trainers" },
  { to: "/membership", label: "Membership" },
  { to: "/bmi", label: "BMI" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <Dumbbell className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform" />
          <span className="font-display text-2xl tracking-wider">
            BARBELL<span className="text-primary">.</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
            Login
          </Link>
          <Link to="/join" className="btn btn-primary !py-2 !px-5 !text-sm">
            Join Now
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container-x py-6 space-y-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-display tracking-wider uppercase hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-3 pt-4">
              <Link to="/login" onClick={() => setOpen(false)} className="btn btn-ghost flex-1">Login</Link>
              <Link to="/join" onClick={() => setOpen(false)} className="btn btn-primary flex-1">Join</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
