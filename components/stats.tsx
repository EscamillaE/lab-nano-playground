"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Years of industry leadership" },
  { value: 9, suffix: "/10", label: "Consultants recommend ESP" },
  { value: 3, suffix: "", label: "Continents served" },
  { value: 10000, suffix: "+", label: "Businesses powered" },
];

function useCountUp(target: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, trigger]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  trigger,
}: {
  value: number;
  suffix: string;
  label: string;
  trigger: boolean;
}) {
  const count = useCountUp(value, trigger);

  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6 text-center">
      <span className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
        {count.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-border/50 bg-card/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/50 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} trigger={visible} />
        ))}
      </div>
    </section>
  );
}
