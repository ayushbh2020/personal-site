import type { Metadata } from "next";
import DimensionLine from "@/components/DimensionLine";
import Stamp from "@/components/Stamp";

export const metadata: Metadata = {
  title: "Now · Ayush Bhargava",
  description: "What Ayush is building, training for, and curious about right now.",
};

const notes = [
  {
    no: "01",
    label: "Building",
    body: "I moved to San Francisco this spring and joined BrainCo, where I build AI that helps cities review building permits faster.",
  },
  {
    no: "02",
    label: "Training",
    body: "Training for the Santa Cruz 70.3.",
  },
  {
    no: "03",
    label: "Learning",
    body: "Lately I'm fascinated by how estimators actually work: the takeoffs, the spreadsheets, the tribal knowledge that never makes it into software. If you run an estimation team and would let me shadow your process, I will buy the coffee.",
    email: "ayushbh8@gmail.com",
  },
];

export default function Now() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
      <span className="tag inline-block">Sheet N-001 · Last revised: Jul 2026</span>

      <h1 className="mb-4 mt-8 font-heading text-5xl font-bold uppercase tracking-tight text-ink md:text-6xl">
        Now.
      </h1>
      <div className="mb-8 max-w-[240px]">
        <DimensionLine label="Scale: 1:1" />
      </div>

      <p className="mb-14 text-lg italic leading-relaxed text-ink-dim">
        &ldquo;The current state of construction, drawn to scale.&rdquo;
      </p>

      <div className="relative">
        <Stamp
          text="In Progress"
          className="absolute -top-20 right-0 hidden md:inline-block"
        />
        <div className="mb-8 flex items-baseline justify-between border-b border-line-strong pb-2">
          <span className="annotation text-ink">General Notes</span>
          <span className="annotation">Ref: N-001</span>
        </div>

        <ol className="flex flex-col gap-10">
          {notes.map((note) => (
            <li key={note.no} className="grid gap-3 sm:grid-cols-[48px_1fr]">
              <span className="annotation pt-1.5">{note.no}</span>
              <div>
                <span className="tag mb-3 inline-block">{note.label}</span>
                <p className="leading-relaxed text-ink">{note.body}</p>
                {note.email && (
                  <a
                    href={`mailto:${note.email}`}
                    className="tag mt-4 inline-block text-ink transition-colors hover:border-line-strong"
                  >
                    ✉ {note.email}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
