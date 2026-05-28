import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { trainers } from "../components/TrainersSection";
import { Instagram, Twitter, Facebook, Award } from "lucide-react";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Trainers — Barbell Fitness" },
      { name: "description", content: "Meet our certified, world-class trainers." },
    ],
  }),
  component: TrainersPage,
});

const detailed = trainers.map((t, i) => ({
  ...t,
  experience: [8, 6, 10, 7][i] + " yrs",
  certs: ["NSCA-CSCS", "ACE-CPT", "NASM-PES", "RYT-500"][i],
  successRate: [96, 94, 92, 95][i],
  bio: [
    "Specialist in powerlifting and strength periodization with national-level coaching credentials.",
    "Helps women build confidence, strength and aesthetic physiques through proven HIIT methodology.",
    "Former national-level athlete bringing CrossFit and conditioning expertise to every session.",
    "Yoga and mobility coach focused on injury prevention and long-term movement quality.",
  ][i],
}));

function TrainersPage() {
  return (
    <>
      <PageHeader eyebrow="Coaching Staff" title="Meet The Trainers" subtitle="Certified. Experienced. Obsessed with your results." image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1920&q=80" />

      <section className="section">
        <div className="container-x space-y-8">
          {detailed.map((t, i) => (
            <div key={t.name} className={`card-base p-0 overflow-hidden grid md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
              <img src={t.img} alt={t.name} className="w-full h-80 md:h-full object-cover" loading="lazy" />
              <div className="p-8 md:p-10">
                <p className="eyebrow">{t.specialty}</p>
                <h3 className="text-4xl tracking-wider mt-2">{t.name}</h3>
                <p className="mt-3 text-muted-foreground">{t.bio}</p>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <Stat label="Experience" value={t.experience} />
                  <Stat label="Cert." value={t.certs} />
                  <Stat label="Success" value={t.successRate + "%"} />
                </div>

                <div className="flex gap-2 mt-6">
                  {[Instagram, Twitter, Facebook].map((I, k) => (
                    <a key={k} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary"><I size={15} /></a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background border border-border rounded p-3 text-center">
      <Award size={14} className="mx-auto text-primary" />
      <div className="font-display text-lg mt-1 tracking-wider">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}
