export function PageHeader({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {image && (
        <>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
          <div className="absolute inset-0 bg-background/80" />
        </>
      )}
      <div className="container-x relative z-10 text-center">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="text-5xl md:text-7xl mt-3 tracking-wider">{title}</h1>
        {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
