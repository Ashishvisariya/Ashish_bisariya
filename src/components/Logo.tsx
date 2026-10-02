export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-sm font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,.12)]">
        AB
      </div>
      <div className="leading-tight">
        <div className="font-display font-semibold text-white">Ashish Bisariya</div>
        <div className="text-xs text-slate-400">Data Scientist & ML Engineer</div>
      </div>
    </div>
  );
}
