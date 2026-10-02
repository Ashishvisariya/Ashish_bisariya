import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { navItems, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ids = navItems.map(([id]) => id);
  const active = useActiveSection(ids);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#060914]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <button onClick={() => go("home")} aria-label="Go home">
          <Logo />
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`nav-link ${active === id ? "nav-active" : ""}`}
            >
              {label}
            </button>
          ))}
          <a href={profile.resume} className="ml-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5">
            Resume
          </a>
        </nav>

        <button
          className="rounded-xl border border-white/10 p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-[#080b17] px-5 pb-5 pt-3 lg:hidden">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="block w-full rounded-lg px-3 py-3 text-left text-sm text-slate-300 hover:bg-white/5 hover:text-white"
            >
              {label}
            </button>
          ))}
          <a href={profile.resume} className="mt-2 block rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-white">
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
