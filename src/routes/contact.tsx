import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Barbell Fitness" }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get In Touch" title="Contact Us" subtitle="Questions, tours, partnerships — we'd love to hear from you." />
      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <form className="card-base p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
            <h3 className="text-3xl tracking-wider">Send a Message</h3>
            <Input label="Full Name" />
            <Input label="Email" type="email" />
            <Input label="Phone" type="tel" />
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
              <textarea required rows={5} className="w-full bg-input border border-border rounded px-3 py-2.5 focus:outline-none focus:border-primary" />
            </div>
            <button className="btn btn-primary w-full">Send Message</button>
          </form>

          <div className="space-y-6">
            <div className="card-base aspect-video bg-card overflow-hidden">
              <iframe
                title="Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C18.92%2C72.84%2C18.94&layer=mapnik"
                className="w-full h-full grayscale contrast-125"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Info icon={MapPin} title="Address" value="221 Iron Street, Mumbai, India" />
              <Info icon={Phone} title="Phone" value="+91 98765 43210" />
              <Info icon={Mail} title="Email" value="hello@barbellfitness.in" />
              <Info icon={Clock} title="Hours" value="Mon–Sun: 5am – 11pm" />
            </div>
          </div>
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

function Info({ icon: Icon, title, value }: { icon: any; title: string; value: string }) {
  return (
    <div className="card-base p-5">
      <Icon className="text-primary" size={20} />
      <div className="font-display text-lg tracking-wider mt-2">{title}</div>
      <div className="text-sm text-muted-foreground">{value}</div>
    </div>
  );
}
