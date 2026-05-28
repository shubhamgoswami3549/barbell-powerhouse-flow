import { Link } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";

export const posts = [
  { title: "5 Compound Lifts That Build Real Strength", cat: "Workout Tips", date: "Mar 12, 2025", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" },
  { title: "The Protein Guide Every Lifter Needs", cat: "Nutrition", date: "Mar 02, 2025", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" },
  { title: "Hypertrophy 101: Build Muscle The Smart Way", cat: "Muscle Building", date: "Feb 24, 2025", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80" },
];

export function BlogPreview() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center mb-12">
          <p className="eyebrow">From The Blog</p>
          <h2 className="text-4xl md:text-6xl mt-3">Fuel Your <span className="text-primary">Mind</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="card-base !p-0 overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-widest">
                  <span className="text-primary">{p.cat}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {p.date}</span>
                </div>
                <h3 className="text-xl mt-3 tracking-wider">{p.title}</h3>
                <Link to="/blog" className="inline-flex items-center gap-2 mt-4 text-sm text-primary uppercase tracking-wider">Read More <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
