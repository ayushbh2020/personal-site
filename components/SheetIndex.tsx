interface IndexRow {
  sheetNo: string;
  title: string;
}

export default function SheetIndex({ rows }: { rows: IndexRow[] }) {
  return (
    <div className="border border-line-strong">
      <div className="border-b border-line-strong bg-blueprint-deep px-4 py-2 text-center">
        <span className="annotation text-ink">Sheet Index</span>
      </div>
      {rows.map((row, i) => (
        <a
          key={row.sheetNo}
          href={`#${row.sheetNo.toLowerCase()}`}
          className={`flex items-baseline justify-between gap-6 px-4 py-2 transition-colors hover:bg-panel ${
            i > 0 ? "border-t border-line" : ""
          }`}
        >
          <span className="annotation">{row.sheetNo}</span>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink">
            {row.title}
          </span>
        </a>
      ))}
    </div>
  );
}
