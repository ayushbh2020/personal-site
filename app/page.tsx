import DimensionLine from "@/components/DimensionLine";
import PlanSheet from "@/components/PlanSheet";
import SheetIndex from "@/components/SheetIndex";
import Stamp from "@/components/Stamp";
import TitleBlock from "@/components/TitleBlock";
import {
  FileDrawerIllustration,
  FloorPlanIllustration,
  IBeamIllustration,
  WaveformIllustration,
} from "@/components/illustrations";
import { featured } from "@/constants/featured";
import { pastLives } from "@/constants/pastLives";

const illustrations = {
  floorPlan: <FloorPlanIllustration />,
  waveform: <WaveformIllustration />,
  fileDrawer: <FileDrawerIllustration />,
  iBeam: <IBeamIllustration />,
};

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-screen-lg px-6">
      {/* HERO - cover sheet */}
      <section className="grid gap-10 py-14 md:grid-cols-[280px_1fr] md:gap-14 md:py-20">
        <div className="flex flex-col gap-6">
          <TitleBlock
            fields={[
              { label: "Project", value: "Ayush Bhargava" },
              {
                label: "Training",
                value: "B.ASc Industrial Engineering, Univ. of Waterloo",
              },
              { label: "Location", value: "San Francisco, CA" },
              { label: "Rev", value: "2026" },
            ]}
          />
          <SheetIndex
            rows={featured.map(({ sheetNo, title }) => ({ sheetNo, title }))}
          />
        </div>

        <div className="relative">
          <Stamp text="Approved" className="absolute -top-14 right-0 hidden sm:inline-block" />
          <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-ink md:text-5xl">
            I build AI for industries that still run on paper.
          </h1>
          <div className="mb-6 max-w-md">
            <DimensionLine label="34 ft" />
          </div>
          <p className="mb-8 text-lg leading-relaxed text-ink">
            Software engineer in San Francisco. I&apos;ve taught AI to read vet
            records, steel orders, and building codes.
          </p>
          <div className="border-l-2 border-line pl-5 text-[15px] leading-relaxed text-ink-dim">
            <p className="mb-3">
              I&apos;m an industrial engineer by training and a process
              optimizer by instinct.
            </p>
            <p>
              Every project I take on seems to land in an industry that still
              runs on paper: vet clinics, steel shops, city permitting offices.
              At some point that stopped being an accident.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED WORK - 2x2 grid of sheets */}
      <section className="py-10">
        <div className="mb-12">
          <DimensionLine label="Featured work · 4 sheets" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project) => (
            <PlanSheet
              key={project.sheetNo}
              sheetNo={project.sheetNo}
              figure={project.figure}
              title={project.title}
              story={project.story}
              tags={project.tags}
              illustration={illustrations[project.illustration]}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* PAST LIVES */}
      <section className="py-14">
        <div className="mb-10">
          <DimensionLine label="Past lives" />
        </div>
        <div className="border border-line-strong">
          {pastLives.map((life, i) => (
            <div
              key={life.name}
              className={`grid gap-1 px-5 py-3.5 sm:grid-cols-[160px_1fr] sm:gap-6 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink">
                {life.name}
              </span>
              <span className="font-mono text-xs leading-relaxed text-ink-dim">
                {life.line}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
