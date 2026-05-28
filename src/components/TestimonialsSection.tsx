import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Aman Verma", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80", review: "Lost 18kg in 6 months. The trainers genuinely care about your progress.", rating: 5 },
  { name: "Sneha Iyer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80", review: "From beginner to deadlifting 100kg. Best decision I made for my health.", rating: 5 },
  { name: "Karan Joshi", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", review: "Equipment, vibe, coaching — everything is world-class. Worth every rupee.", rating: 5 },
];

export function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center mb-12">
          <p className="eyebrow">Real Transformations</p>
          <h2 className="text-4xl md:text-6xl mt-3">Member <span className="text-primary">Stories</span></h2>
        </div>

        <div className="card-base max-w-3xl mx-auto p-8 md:p-12 text-center">
          <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-primary" />
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: t.rating }).map((_, k) => <Star key={k} size={18} className="fill-primary text-primary" />)}
          </div>
          <p className="mt-5 text-lg italic text-muted-foreground">"{t.review}"</p>
          <p className="mt-4 font-display text-xl tracking-wider">{t.name}</p>

          <div className="flex justify-center gap-3 mt-8">
            <button onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:border-primary flex items-center justify-center"><ChevronLeft size={18} /></button>
            <button onClick={() => setI((i + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-border hover:bg-primary hover:border-primary flex items-center justify-center"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
