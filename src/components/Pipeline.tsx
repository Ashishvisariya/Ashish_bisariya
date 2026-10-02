import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { pipeline } from "../data/content";

export default function Pipeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.72 - rect.top) / (rect.height * 0.78)));
      setActive(Math.min(pipeline.length - 1, Math.floor(progress * pipeline.length)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="pipeline" className="section-wrap">
      <SectionTitle
        eyebrow="04 / ML Pipeline"
        title="From data → experimentation → production."
        text="A visual snapshot of how I think about taking an ML problem beyond a notebook."
      />
      <div ref={ref} className="glass-panel relative overflow-hidden p-5 sm:p-8">
        <div className="pipeline-line" />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {pipeline.map(([num, title, desc], index) => (
            <div
              key={title}
              className={`pipeline-node ${index <= active ? "pipeline-node-active" : ""}`}
            >
              <div className="relative z-10 mb-5 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-[.18em] text-slate-600">{num}</span>
                <span className="h-2 w-2 rounded-full bg-slate-700 transition-all duration-500" />
              </div>
              <h3 className="font-display font-semibold text-white">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
