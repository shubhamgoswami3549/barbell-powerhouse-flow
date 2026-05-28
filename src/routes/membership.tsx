import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { MembershipPreview, plans } from "../components/MembershipPreview";
import { Check, X, Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Barbell Fitness" },
      { name: "description", content: "Choose Starter, Pro or Elite. Transparent pricing, no hidden fees." },
    ],
  }),
  component: MembershipPage,
});

const compareFeatures = [
  { f: "Gym access", s: true, p: true, e: true },
  { f: "Locker facility", s: true, p: true, e: true },
  { f: "Personal trainer", s: false, p: true, e: true },
  { f: "Diet consultation", s: false, p: true, e: true },
  { f: "Group classes", s: false, p: true, e: true },
  { f: "Steam & spa", s: false, p: false, e: true },
  { f: "24/7 access", s: false, p: false, e: true },
  { f: "Advanced tracking", s: false, p: false, e: true },
];

const faqs = [
  { q: "Is there a joining fee?", a: "No. Membership is fully inclusive — no joining fee, no hidden charges." },
  { q: "Can I freeze my membership?", a: "Yes, Pro and Elite members can freeze for up to 30 days per year." },
  { q: "Do you offer trial sessions?", a: "Absolutely. Walk in any day for a complimentary 1-day trial." },
  { q: "Are there any contract lock-ins?", a: "Monthly plans are flexible. Quarterly and annual plans get bigger discounts." },
];

function MembershipPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader eyebrow="Membership" title="Pick Your Plan" subtitle="No contracts. No fluff. Just results." image="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1920&q=80" />

      <MembershipPreview />

      <section className="section bg-card/40">
        <div className="container-x">
          <div className="text-center mb-10">
            <p className="eyebrow">Feature Comparison</p>
            <h2 className="text-4xl md:text-5xl mt-3">What's <span className="text-primary">Included</span></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border border-border rounded-lg overflow-hidden">
              <thead className="bg-card">
                <tr>
                  <th className="text-left p-4 font-display tracking-wider">Feature</th>
                  {plans.map((p) => <th key={p.name} className="p-4 font-display tracking-wider">{p.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((row, i) => (
                  <tr key={row.f} className={i % 2 ? "bg-background" : "bg-card/30"}>
                    <td className="p-4 text-sm">{row.f}</td>
                    {[row.s, row.p, row.e].map((v, k) => (
                      <td key={k} className="p-4 text-center">
                        {v ? <Check className="text-primary mx-auto" size={18} /> : <X className="text-muted-foreground/40 mx-auto" size={18} />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-10">
            <p className="eyebrow">FAQ</p>
            <h2 className="text-4xl md:text-5xl mt-3">Questions, <span className="text-primary">Answered</span></h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="card-base !p-0 overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-display text-lg tracking-wider">{f.q}</span>
                  {open === i ? <Minus size={18} className="text-primary" /> : <Plus size={18} className="text-primary" />}
                </button>
                {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground animate-fade-in">{f.a}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/join" className="btn btn-primary">Join Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
