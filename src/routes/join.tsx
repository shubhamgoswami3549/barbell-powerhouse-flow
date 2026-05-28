import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { plans } from "../components/MembershipPreview";
import { Check } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({ meta: [{ title: "Join — Barbell Fitness" }] }),
  component: JoinPage,
});

function JoinPage() {
  const [selected, setSelected] = useState("Pro");
  return (
    <>
      <PageHeader eyebrow="Become A Member" title="Join Barbell Fitness" subtitle="Three steps to the strongest version of you." image="https://images.unsplash.com/photo-1517438476312-10d79c077509?w=1920&q=80" />

      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow">1. Pick A Plan</p>
            <div className="mt-4 space-y-3">
              {plans.map((p) => (
                <label key={p.name} className={`card-base !p-5 flex items-start gap-4 cursor-pointer ${selected === p.name ? "border-primary shadow-glow" : ""}`}>
                  <input type="radio" name="plan" checked={selected === p.name} onChange={() => setSelected(p.name)} className="mt-1 accent-primary" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-display text-2xl tracking-wider">{p.name}</span>
                      <span className="font-display text-2xl text-primary">{p.price}<span className="text-xs text-muted-foreground">/mo</span></span>
                    </div>
                    <ul className="mt-2 text-xs text-muted-foreground space-y-1">
                      {p.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex gap-1.5"><Check size={12} className="text-primary mt-0.5 shrink-0" /> {f}</li>
                      ))}
                    </ul>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <form className="card-base p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert(`Welcome to the ${selected} plan! We'll contact you shortly.`); }}>
            <p className="eyebrow">2. Your Details</p>
            <h3 className="text-3xl tracking-wider">Almost There</h3>
            <Input label="Full Name" />
            <div className="grid grid-cols-2 gap-3">
              <Input label="Email" type="email" />
              <Input label="Phone" type="tel" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input label="Age" type="number" />
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Gender</label>
                <select className="w-full bg-input border border-border rounded px-3 py-2.5 focus:outline-none focus:border-primary">
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
            </div>
            <Input label="Fitness Goal" />
            <p className="eyebrow pt-2">3. Confirm</p>
            <button className="btn btn-primary w-full">Join {selected} Plan</button>
            <p className="text-xs text-muted-foreground text-center">No joining fee. Cancel anytime.</p>
          </form>
        </div>
      </section>
    </>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input required type={type} className="w-full bg-input border border-border rounded px-3 py-2.5 focus:outline-none focus:border-primary" />
    </div>
  );
}
