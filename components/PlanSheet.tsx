import type { ReactNode } from "react";

interface PlanSheetProps {
  sheetNo: string; // e.g. "A-101"
  figure: string; // e.g. "FIG 1. PLAN VIEW"
  title: string;
  story: string;
  tags: string[];
  illustration: ReactNode;
  link?: { label: string; href: string };
}

export default function PlanSheet({
  sheetNo,
  figure,
  title,
  story,
  tags,
  illustration,
  link,
}: PlanSheetProps) {
  return (
    <article
      id={sheetNo.toLowerCase()}
      className="group relative border border-line-strong p-1 transition-shadow hover:shadow-sheet"
    >
      {/* sheet number tab */}
      <span className="absolute -top-3 right-4 border border-line-strong bg-blueprint-deep px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink">
        Sht. {sheetNo}
      </span>

      <div className="flex h-full flex-col border border-line p-5">
        {/* illustration panel */}
        <div className="relative mb-5 h-44 border border-line bg-panel p-4 text-ink-dim">
          {illustration}
          <span className="absolute bottom-1.5 right-2 font-mono text-[9px] uppercase tracking-[0.15em] text-ink-dim/70">
            {figure}
          </span>
        </div>

        <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-ink">
          {title}
        </h3>
        <p className="mb-5 flex-1 text-[15px] leading-relaxed text-ink-dim">{story}</p>

        {/* title-block strip */}
        <div className="flex flex-wrap items-center gap-2 border-t border-line pt-4">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="draft-link ml-auto"
            >
              {link.label} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
