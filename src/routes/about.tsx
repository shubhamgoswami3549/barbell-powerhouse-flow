import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { TrainersSection } from "../components/TrainersSection";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Barbell Fitness" },
      { name: "description", content: "Our story, mission and the team behind Barbell Fitness." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2014", text: "Barbell Fitness opens its first 5,000 sq ft facility in Mumbai." },
  { year: "2017", text: "Crossed 1,000 active members and launched CrossFit programming." },
  { year: "2020", text: "Pivoted to hybrid coaching with online + in-person programs." },
  { year: "2023", text: "Recognized as one of India's top 10 premium gyms." },
  { year: "2025", text: "5,000+ members, 25+ certified trainers, 3 flagship locations." },
];

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Our Story" title="About Barbell Fitness" subtitle="A decade of building stronger humans." image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" />

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&q=80" alt="Gym floor" className="rounded-lg shadow-card" />
          <div>
            <p className="eyebrow">Mission & Vision</p>
            <h2 className="text-4xl md:text-5xl mt-3">Forging strength, <span className="text-primary">one rep</span> at a time.</h2>
            <p className="mt-5 text-muted-foreground">We believe fitness isn't a phase — it's a lifestyle. Our mission is to make world-class strength training accessible while preserving the raw, focused culture of a real iron gym.</p>
            <p className="mt-3 text-muted-foreground">Our vision is to build India's strongest fitness community — 100,000 members strong by 2030.</p>
          </div>
        </div>
      </section>

      <section className="section bg-card/40">
        <div className="container-x">
          <div className="text-center mb-14">
            <p className="eyebrow">Our Journey</p>
            <h2 className="text-4xl md:text-6xl mt-3">A Decade of <span className="text-primary">Iron</span></h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative pl-12 md:pl-0 md:w-1/2 mb-10 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="absolute left-2 md:left-auto md:right-auto top-1 w-4 h-4 rounded-full bg-primary shadow-glow"
                  style={{ [i % 2 ? "left" : "right"]: "-8px" } as React.CSSProperties} />
                <div className="font-display text-3xl text-primary">{m.year}</div>
                <p className="text-sm text-muted-foreground mt-1">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrainersSection />
      <CTASection />
    </>
  );
}
