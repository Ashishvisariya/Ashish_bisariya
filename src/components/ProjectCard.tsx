import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  type: string;
  description: string;
  stack: readonly string[];
  result: string;
  github: string;
  demo: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [hover, setHover] = useState(false);

  return (
    <article
      className="project-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt=""
          className={`aspect-[16/9] w-full object-cover transition duration-700 ${hover ? "scale-105" : "scale-100"}`}
        />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#070a13]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.15em] text-cyan-300 backdrop-blur">
          {project.type}
        </div>
        <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/30 text-white backdrop-blur">
          <ArrowUpRight size={16} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/5 pt-5">
          <div>
            <div className="text-[10px] uppercase tracking-[.18em] text-slate-600">Result / metric</div>
            <div className="mt-1 text-sm font-medium text-slate-300">{project.result}</div>
          </div>
          <div className="flex gap-2">
            <a className="icon-link" href={project.github} target="_blank" rel="noreferrer" title="GitHub">
              <Github size={15} />
            </a>
            <a className="icon-link" href={project.demo} target="_blank" rel="noreferrer" title="Live demo">
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
