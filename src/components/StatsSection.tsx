import { useEffect, useRef, useState } from "react";

function useCounter(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame: number;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setValue(Math.floor(p * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);
  return value;
}

const stats = [
  { value: 5000, suffix: "+", label: "Active Members" },
  { value: 25, suffix: "+", label: "Expert Trainers" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Fitness Programs" },
];

export function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="bg-card border-y border-border py-16">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => {
          const v = useCounter(s.value, visible);
          return (
            <div key={i} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-primary">
                {v.toLocaleString()}{s.suffix}
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
