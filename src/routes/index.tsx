import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { ProgramsSection } from "../components/ProgramsSection";
import { AboutPreview } from "../components/AboutPreview";
import { MembershipPreview } from "../components/MembershipPreview";
import { TrainersSection } from "../components/TrainersSection";
import { BMIForm } from "../components/BMIForm";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { GalleryGrid } from "../components/GalleryGrid";
import { BlogPreview } from "../components/BlogPreview";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbell Fitness — Build Your Dream Physique" },
      { name: "description", content: "Premium gym with elite trainers, world-class equipment and proven programs. Join 5000+ members." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <AboutPreview />
      <MembershipPreview />
      <TrainersSection />
      <section className="section">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="eyebrow">Know Your Numbers</p>
            <h2 className="text-4xl md:text-6xl mt-3">BMI <span className="text-primary">Calculator</span></h2>
          </div>
          <BMIForm />
        </div>
      </section>
      <TestimonialsSection />
      <GalleryGrid />
      <BlogPreview />
      <CTASection />
    </>
  );
}
