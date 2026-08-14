export default function DimensionLine({ label }: { label: string }) {
  return (
    <div className="flex w-full items-center gap-3 text-ink-dim" aria-hidden>
      <span className="font-mono text-xs">◄</span>
      <span className="flex-1 border-t border-dashed border-line" />
      <span className="annotation whitespace-nowrap">{label}</span>
      <span className="flex-1 border-t border-dashed border-line" />
      <span className="font-mono text-xs">►</span>
    </div>
  );
}
