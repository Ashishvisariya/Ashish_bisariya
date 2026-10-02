import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#04060d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <div className="font-display font-semibold text-white">{profile.name}</div>
          <div className="mt-1 text-xs text-slate-600">{profile.role}</div>
        </div>
        <div className="flex items-center gap-2">
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
          <a className="icon-link" href={`mailto:${profile.email}`}><Mail size={16} /></a>
        </div>
        <div className="text-xs text-slate-700">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
