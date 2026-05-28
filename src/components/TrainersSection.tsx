import { Instagram, Twitter, Facebook } from "lucide-react";

export const trainers = [
  { name: "Rohan Mehra", specialty: "Strength & Powerlifting", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80" },
  { name: "Priya Sharma", specialty: "Women's Fitness & HIIT", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80" },
  { name: "Arjun Singh", specialty: "CrossFit & Conditioning", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80" },
  { name: "Neha Kapoor", specialty: "Yoga & Mobility", img: "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?w=600&q=80" },
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
