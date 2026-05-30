export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden grain">
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </>
      )}
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: "var(--gradient-radial)" }}
      />
      {/* Edge hairlines */}
      <div className="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-x relative z-10">
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="eyebrow animate-fade-up">{eyebrow}</p>
          )}
          <h1 className="section-title mt-5 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            {title.split(" ").map((word, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 ? (
                  <span className="text-gold-shimmer">{word}</span>
                ) : (
                  <>{word} </>
                )}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.12s" }}
            >
              {subtitle}
            </p>
          )}
          <div
            className="mt-8 flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.18s" }}
          >
            <div className="gold-rule" />
            <span className="font-condensed text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Est. 2010 — Mumbai
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
