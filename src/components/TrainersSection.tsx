import { Instagram, Twitter, Facebook } from "lucide-react";

export const trainers = [
  { name: "Rohan Mehra", specialty: "Strength & Powerlifting", img: "https://images.unsplash.com/photo-1750698545009-679820502908?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Priya Sharma", specialty: "Women's Fitness & HIIT", img: "https://images.unsplash.com/photo-1685811985755-6962cb38280f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Arjun Singh", specialty: "CrossFit & Conditioning", img: "https://images.unsplash.com/photo-1583500178689-665d1f77e67d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Neha Kapoor", specialty: "Yoga & Mobility", img: "https://images.unsplash.com/photo-1708011108850-49646bd34503?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export function TrainersSection() {
  return (
    <section className="section bg-card/40">
      <div className="container-x">
        <div className="text-center mb-14">
          <p className="eyebrow">Meet The Team</p>
          <h2 className="text-4xl md:text-6xl mt-3">Expert <span className="text-primary">Trainers</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-lg card-base !p-0">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-2xl tracking-wider">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.specialty}</p>
                <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  {[Instagram, Twitter, Facebook].map((I, i) => (
                    <a key={i} href="#" className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center"><I size={14} /></a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
