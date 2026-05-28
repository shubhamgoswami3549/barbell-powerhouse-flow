import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { TestimonialsSection } from "../components/TestimonialsSection";

export const Route = createFileRoute("/testimonials")({
  head: () => ({ meta: [{ title: "Testimonials — Barbell Fitness" }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Real Stories" title="Transformations" subtitle="Real members. Real results." />
      <TestimonialsSection />
    </>
  ),
});
