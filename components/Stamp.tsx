export default function Stamp({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-block -rotate-[8deg] border-[3px] border-stamp px-4 py-1.5 ${className}`}
      aria-hidden
    >
      <span className="font-mono text-sm font-bold uppercase tracking-[0.35em] text-stamp">
        {text}
      </span>
    </div>
  );
}
