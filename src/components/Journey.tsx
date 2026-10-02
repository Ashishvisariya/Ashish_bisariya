import { BriefcaseBusiness, Award, GraduationCap, FolderKanban } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { journey } from "../data/content";

const icons = { education: GraduationCap, work: BriefcaseBusiness, cert: Award, project: FolderKanban };

export default function Journey() {
  return (
    <section id="journey" className="section-wrap">
      <SectionTitle
        eyebrow="05 / Journey"
        title="Your story, added here."
        text="Keep this timeline factual: education, internships, work, certifications, competitions, and major projects."
      />
      <div className="relative ml-2 border-l border-white/10 pl-8 sm:ml-4 sm:pl-12">
        {journey.map(([title, desc, kind], index) => {
          const Icon = icons[kind as keyof typeof icons];
          return (
            <div key={title} className="relative mb-10 last:mb-0">
              <div className="absolute -left-[49px] grid h-9 w-9 place-items-center rounded-full border border-violet-400/30 bg-[#0b0f1d] text-violet-300 sm:-left-[65px]">
                <Icon size={16} />
              </div>
              <div className="glass-panel p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display font-semibold text-white">{title}</h3>
                  <span className="text-xs text-slate-600">0{index + 1}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
