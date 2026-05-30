import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Dumbbell, ChevronRight } from "lucide-react";

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
    <>
      {/* Top announcement bar */}
      <div className="hidden md:block fixed top-0 inset-x-0 z-50 bg-background border-b border-border/60">
        <div className="container-x flex items-center justify-between h-8 text-[11px] tracking-[0.25em] uppercase text-muted-foreground font-condensed">
          <span>✦ Premium Strength Club — Mumbai</span>
          <span className="flex items-center gap-6">
            <span>Open 5 AM – 11 PM</span>
            <span className="text-primary">+91 98765 43210</span>
          </span>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 md:top-8 top-0 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-primary/20 shadow-[0_2px_30px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-lg group-hover:bg-primary/50 transition-colors" />
              <Dumbbell className="relative w-7 h-7 text-primary group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl tracking-[0.18em]">
                BARBELL<span className="text-primary">.</span>
              </span>
              <span className="font-condensed text-[9px] tracking-[0.4em] text-muted-foreground uppercase mt-0.5">
                Fitness Atelier
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors group"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/login"
              className="text-[11px] uppercase tracking-[0.25em] font-semibold hover:text-primary transition-colors"
            >
              Login
            </Link>
            <Link to="/join" className="btn btn-primary !py-2.5 !px-5 !text-[11px]">
              Join Now <ChevronRight className="w-3.5 h-3.5" />
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
          <div className="lg:hidden bg-background border-t border-primary/20 animate-fade-in">
            <ul className="container-x py-6 space-y-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 border-b border-border/40 text-lg font-display tracking-[0.15em] uppercase hover:text-primary transition-colors"
                  >
                    {l.label}
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </Link>
                </li>
              ))}
              <li className="flex gap-3 pt-5">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="btn btn-ghost flex-1 !text-xs"
                >
                  Login
                </Link>
                <Link
                  to="/join"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary flex-1 !text-xs"
                >
                  Join
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
