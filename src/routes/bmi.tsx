import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { BMIForm } from "../components/BMIForm";

export const Route = createFileRoute("/bmi")({
  head: () => ({ meta: [{ title: "BMI Calculator — Barbell Fitness" }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Know Your Numbers" title="BMI Calculator" subtitle="Quickly check your body mass index and get fitness suggestions." />
      <section className="section pt-0">
        <div className="container-x max-w-5xl">
          <BMIForm />
        </div>
      </section>
    </>
  ),
});
