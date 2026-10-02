import { Github, GitBranch, Star, Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/content";

export default function GitHub() {
  return (
    <section id="github" className="section-wrap">
      <SectionTitle
        eyebrow="06 / GitHub"
        title="Let the code speak."
        text="Connect your real repositories here. Statistics below intentionally remain placeholders until your profile is linked."
      />
      <div className="glass-panel overflow-hidden">
        <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-white">
              <Github size={24} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">Explore my repositories</h3>
            <p className="mt-3 max-w-xl leading-7 text-slate-400">
              Add your strongest notebooks, ML systems, API projects, experiments, and reusable utilities. Pin the repositories that best demonstrate your end-to-end workflow.
            </p>
            <a href={profile.github} target="_blank" rel="noreferrer" className="cta-secondary mt-6 inline-flex">
              Open GitHub <Github size={16} />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              [GitBranch, "Repositories", "Add count"],
              [Star, "Stars", "Add count"],
              [Code2, "Languages", "Add stack"]
            ].map(([Icon, label, value]) => (
              <div key={label as string} className="rounded-2xl border border-white/5 bg-white/[.025] p-4">
                {typeof Icon === "function" ? <Icon size={17} className="text-cyan-300" /> : null}
                <div className="mt-8 text-xs text-slate-500">{label as string}</div>
                <div className="mt-1 font-display text-sm font-semibold text-white">{value as string}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
