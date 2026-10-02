export default function SectionTitle({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="section-kicker">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-7 text-slate-400">{text}</p>}
    </div>
  );
}
