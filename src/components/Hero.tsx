import { ArrowDown, ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="hero-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(99,102,241,.16),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(34,211,238,.08),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
        <div>
          <div className="eyebrow">Building AI solutions that make an impact</div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Data Scientist &{" "}
            <span className="gradient-text">Machine Learning Engineer</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            I specialize in turning complex data into actionable insights and building end-to-end ML systems that solve real-world problems.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="cta-primary">
              View Projects <ArrowRight size={17} />
            </a>
            <a href="#contact" className="cta-secondary">
              Contact Me <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
            <a className="social-btn" href={profile.resume}>
              <FileText size={17} /> Resume
            </a>
          </div>

          <a href="#about" className="mt-14 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.22em] text-slate-500 transition hover:text-cyan-300">
            Explore portfolio <ArrowDown size={15} />
          </a>
        </div>

        <div className="relative flex min-h-[430px] items-center justify-center">
          {/* Background glow */}
          <div className="absolute inset-0 rounded-full bg-violet-500/8 blur-3xl" />

          {/* Dot grid pattern - top right */}
          <div className="absolute -right-2 -top-4 grid grid-cols-5 gap-2 opacity-40">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`dot-tr-${i}`} className="h-1 w-1 rounded-full bg-cyan-400/60" />
            ))}
          </div>

          {/* Dot grid pattern - bottom left */}
          <div className="absolute -bottom-2 -left-4 grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={`dot-bl-${i}`} className="h-1 w-1 rounded-full bg-violet-400/60" />
            ))}
          </div>

          {/* Floating orbs */}
          <div className="absolute -left-4 top-1/4 h-4 w-4 animate-pulse rounded-full bg-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,.5)]" />
          <div className="absolute -right-2 bottom-1/3 h-6 w-6 animate-pulse rounded-full bg-violet-500/40 shadow-[0_0_25px_rgba(139,92,246,.5)]" style={{ animationDelay: '1s' }} />
          <div className="absolute left-8 top-8 h-2.5 w-2.5 animate-pulse rounded-full bg-fuchsia-400/50 shadow-[0_0_15px_rgba(232,121,249,.4)]" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-16 right-12 h-8 w-8 animate-pulse rounded-full bg-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,.3)]" style={{ animationDelay: '1.5s' }} />

          <div className="relative">
            {/* Dark circular backdrop */}
            <div className="absolute -inset-12 rounded-full bg-[#060914]" />

            {/* Outer glowing arc ring - SVG */}
            <svg
              className="absolute -inset-6 h-[calc(100%+48px)] w-[calc(100%+48px)]"
              viewBox="0 0 400 400"
              fill="none"
            >
              {/* Main cyan arc */}
              <circle
                cx="200" cy="200" r="190"
                stroke="url(#ring-gradient)"
                strokeWidth="2.5"
                strokeDasharray="800 400"
                strokeLinecap="round"
                className="animate-[spin_20s_linear_infinite]"
                style={{ transformOrigin: 'center' }}
              />
              {/* Secondary violet arc */}
              <circle
                cx="200" cy="200" r="185"
                stroke="url(#ring-gradient-2)"
                strokeWidth="1.5"
                strokeDasharray="500 700"
                strokeLinecap="round"
                className="animate-[spin_25s_linear_infinite_reverse]"
                style={{ transformOrigin: 'center' }}
              />
              {/* Glow dots on the ring */}
              <circle cx="200" cy="10" r="4" fill="#22d3ee" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}>
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="390" cy="200" r="3" fill="#a78bfa" className="animate-[spin_25s_linear_infinite_reverse]" style={{ transformOrigin: '200px 200px' }}>
                <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
              </circle>
              <defs>
                <linearGradient id="ring-gradient" x1="0" y1="0" x2="400" y2="400">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="ring-gradient-2" x1="400" y1="0" x2="0" y2="400">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#c084fc" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Soft glow behind image */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-400/20 via-transparent to-violet-500/20 blur-xl" />

            {/* Profile image */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-cyan-400/20 shadow-[0_0_80px_rgba(34,211,238,.12)] sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
              <img
                src="/images/profile.jpeg"
                alt="Ashish Bisariya"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/30 bg-[#0a0f2e]/95 px-5 py-2 text-[11px] font-bold uppercase tracking-[.22em] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,.15)] backdrop-blur-md">
              {profile.name}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
