import { Boxes, Lightbulb, Rocket, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";

const principles = [
  [Boxes, "End-to-End", "From data to deployment"],
  [Lightbulb, "Problem Solver", "Turning ideas into AI solutions"],
  [Rocket, "Production Mindset", "Designing for usable systems"],
  [GraduationCap, "Always Learning", "Exploring new AI techniques"]
];

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <SectionTitle
        eyebrow="01 / About"
        title="More than model training."
        text="I work across the ML lifecycle: understanding the problem, exploring data, building experiments, evaluating models, and packaging useful predictions behind APIs."
      />
      <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
        <div className="glass-panel p-7 sm:p-9">
          <div className="mb-6 text-sm font-semibold text-cyan-300">How I approach ML work</div>
          <p className="text-base leading-8 text-slate-300">
            My focus is practical problem solving rather than simply collecting tools. I use data analysis to understand what matters, machine learning and deep learning to test ideas, NLP and transformers where language is involved, and FastAPI/Docker to move promising models toward usable applications.
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            This portfolio intentionally leaves personal achievements, experience, metrics, and links as placeholders so only your verified information is published.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {principles.map(([Icon, title, text]) => (
            <div key={title as string} className="glass-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
              <div className="mb-7 grid h-11 w-11 place-items-center rounded-xl bg-cyan-500/10 text-lg font-bold text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,.15)]">
                A
              </div>
              <h3 className="font-display font-semibold text-white">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
