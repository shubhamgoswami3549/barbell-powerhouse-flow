import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";
import { GalleryGrid } from "../components/GalleryGrid";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Barbell Fitness" }] }),
  component: () => (
    <>
      <PageHeader eyebrow="Inside The Iron Temple" title="Gallery" subtitle="A glimpse inside our facilities and community." />
      <GalleryGrid />
    </>
  ),
});
