import { Brain, Code2, MessageSquareText, Network, Server } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/content";

const iconMap = { code: Code2, brain: Brain, network: Network, message: MessageSquareText, server: Server };

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <SectionTitle
        eyebrow="02 / Skills"
        title="A focused modern ML toolkit."
        text="The categories below reflect the technologies and concepts you said you work with—no extra claims added."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon as keyof typeof iconMap];
          return (
            <article key={skill.title} className="skill-card group">
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.03] text-cyan-300">
                  <Icon size={18} />
                </div>
                <span className="text-xs text-slate-600">0{skills.indexOf(skill) + 1}</span>
              </div>
              <h3 className="font-display text-base font-semibold text-white">{skill.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {skill.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" /> {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
