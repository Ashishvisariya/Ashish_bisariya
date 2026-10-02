import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <SectionTitle
        eyebrow="03 / Featured Projects"
        title="Proof through practical builds."
        text="Use these as starter case studies. Replace every placeholder with your actual project, verified metric, repository, demo, and screenshots."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}
