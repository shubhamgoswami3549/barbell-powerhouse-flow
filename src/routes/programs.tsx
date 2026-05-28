import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Barbell Fitness" },
      { name: "description", content: "Detailed strength, fat loss, HIIT, powerlifting, women's fitness and athlete conditioning programs." },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  { name: "Muscle Gain", duration: "12 weeks", level: "Intermediate", benefits: ["Lean mass +4–6kg", "Progressive overload", "Macro planning"], schedule: ["Push", "Pull", "Legs", "Rest", "Upper", "Lower", "Active Recovery"] },
  { name: "Weight Loss", duration: "8 weeks", level: "Beginner", benefits: ["Fat loss 5–8kg", "Boost metabolism", "Cardio + strength"], schedule: ["HIIT", "Full Body", "Cardio", "Strength", "HIIT", "Yoga", "Rest"] },
  { name: "Beginner Transformation", duration: "6 weeks", level: "Beginner", benefits: ["Build the basics", "Habit formation", "Form mastery"], schedule: ["Full Body A", "Cardio", "Full Body B", "Rest", "Full Body C", "Mobility", "Rest"] },
  { name: "Athlete Conditioning", duration: "10 weeks", level: "Advanced", benefits: ["Explosive power", "Sport-specific drills", "Endurance"], schedule: ["Power", "Speed", "Strength", "Recovery", "Agility", "Conditioning", "Rest"] },
  { name: "Women's Fitness", duration: "8 weeks", level: "All Levels", benefits: ["Toning & sculpting", "Strength + flexibility", "Confidence"], schedule: ["Lower", "HIIT", "Upper", "Yoga", "Full Body", "Cardio", "Rest"] },
  { name: "HIIT", duration: "4 weeks", level: "Intermediate", benefits: ["Burn 600+ cal/session", "Cardio endurance", "Time efficient"], schedule: ["HIIT", "HIIT", "Rest", "HIIT", "HIIT", "Strength", "Rest"] },
  { name: "Powerlifting", duration: "16 weeks", level: "Advanced", benefits: ["Squat/Bench/Deadlift PRs", "Programmed cycles", "Competition prep"], schedule: ["Squat", "Bench", "Deadlift", "Rest", "Squat Volume", "Bench Volume", "Rest"] },
];

function ProgramsPage() {
  return (
    <>
      <PageHeader eyebrow="Find Your Program" title="Training Programs" subtitle="Built by coaches. Backed by science. Designed for results." image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80" />

      <section className="section">
        <div className="container-x space-y-10">
          {programs.map((p) => (
            <div key={p.name} className="card-base p-8 md:p-10">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-4xl tracking-wider">{p.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs px-3 py-1 bg-primary/15 text-primary rounded-full uppercase tracking-widest">{p.duration}</span>
                    <span className="text-xs px-3 py-1 bg-secondary rounded-full uppercase tracking-widest">{p.level}</span>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {p.benefits.map((b) => <li key={b} className="text-sm text-muted-foreground">• {b}</li>)}
                  </ul>
                </div>
                <div className="lg:col-span-2">
                  <p className="eyebrow mb-3">Weekly Schedule</p>
                  <div className="grid grid-cols-7 gap-1.5">
                    {["M","T","W","T","F","S","S"].map((d, i) => (
                      <div key={i} className="bg-background border border-border rounded p-2 text-center">
                        <div className="text-xs text-muted-foreground">{d}</div>
                        <div className="text-[10px] md:text-xs mt-1 font-display tracking-wider text-primary">{p.schedule[i]}</div>
                      </div>
                    ))}
                  </div>
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
