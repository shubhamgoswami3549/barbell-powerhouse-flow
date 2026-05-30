import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { posts } from "../components/BlogPreview";
import { Calendar, ArrowRight } from "lucide-react";

const extra = [
  { title: "Fat Loss Without Losing Muscle", cat: "Fat Loss", date: "Feb 14, 2025", img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80" },
  { title: "Sleep: The Underrated Muscle Builder", cat: "Recovery", date: "Feb 02, 2025", img: "https://images.unsplash.com/photo-1688382575775-9aaa5025524e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { title: "Pre-Workout Nutrition Done Right", cat: "Nutrition", date: "Jan 22, 2025", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" },
];
const all = [...posts, ...extra];

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog — Barbell Fitness" }] }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHeader eyebrow="Knowledge" title="Fitness Blog" subtitle="Workout tips, nutrition science and transformation stories." />
      <section className="section pt-0">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {all.map((p) => (
            <article key={p.title} className="card-base !p-0 overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="text-primary">{p.cat}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {p.date}</span>
                </div>
                <h3 className="text-xl mt-3 tracking-wider">{p.title}</h3>
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-sm text-primary uppercase tracking-wider">Read <ArrowRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
