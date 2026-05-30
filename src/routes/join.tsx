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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "Male",
    goal: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password, // now taken from input
          plan: selected,
          phone: formData.phone,
          age: formData.age,
          gender: formData.gender,
          goal: formData.goal,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`Welcome ${formData.name}! You joined the ${selected} plan.`);
      } else {
        alert(`Error: ${data.message || "Registration failed"}`);
      }
    } catch (err) {
      alert("Server error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Become A Member"
        title="Join Barbell Fitness"
        subtitle="Three steps to the strongest version of you."
        image="https://images.unsplash.com/photo-1517438476312-10d79c077509?w=1920&q=80"
      />

      <section className="section pt-0">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          {/* Plan Selection */}
          <div>
            <p className="eyebrow">1. Pick A Plan</p>
            <div className="mt-4 space-y-3">
              {plans.map((p) => (
                <label
                  key={p.name}
                  className={`card-base !p-5 flex items-start gap-4 cursor-pointer ${
                    selected === p.name ? "border-primary shadow-glow" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="plan"
                    checked={selected === p.name}
                    onChange={() => setSelected(p.name)}
                    className="mt-1 accent-primary"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-display text-2xl tracking-wider">
                        {p.name}
                      </span>
                      <span className="font-display text-2xl text-primary">
                        {p.price}
                        <span className="text-xs text-muted-foreground">/mo</span>
                      </span>
                    </div>
                    <ul className="mt-2 text-xs text-muted-foreground space-y-1">
                      {p.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex gap-1.5">
                          <Check
                            size={12}
                            className="text-primary mt-0.5 shrink-0"
                          />{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="card-base p-8 space-y-4" onSubmit={handleSubmit}>
            <p className="eyebrow">2. Your Details</p>
            <h3 className="text-3xl tracking-wider">Almost There</h3>

            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full bg-input border border-border rounded px-3 py-2.5 focus:outline-none focus:border-primary"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <Input
              label="Fitness Goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <p className="eyebrow pt-2">3. Confirm</p>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Joining..." : `Join ${selected} Plan`}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              No joining fee. Cancel anytime.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-input border border-border rounded px-3 py-2.5 focus:outline-none focus:border-primary"
      />
    </div>
  );
}
