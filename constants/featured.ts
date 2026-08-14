export interface FeaturedProject {
  sheetNo: string;
  figure: string;
  title: string;
  story: string;
  tags: string[];
  illustration: "floorPlan" | "waveform" | "fileDrawer" | "iBeam";
  link?: { label: string; href: string };
}

export const featured: FeaturedProject[] = [
  {
    sheetNo: "A-101",
    figure: "Fig 1. Plan view",
    title: "BrainCo",
    story:
      "Cities check building plans against thousands of code rules, and every city's rules are different. The reviewers who know which rules actually matter carry it all in their heads. At BrainCo I build AI that reads the code and captures that knowledge, so permits move faster.",
    tags: ["Permitting", "San Francisco", "Since 2026"],
    illustration: "floorPlan",
    link: { label: "BrainCo", href: "https://brain.co" },
  },
  {
    sheetNo: "A-102",
    figure: "Fig 2. Audio to text",
    title: "Scribenote",
    story:
      "Vets spend hours a day writing medical records instead of treating animals. Over 2.5 years I helped build the AI scribe that writes those records for clinics across North America, and made it 7× cheaper to run. When software writes the medical record, “usually right” isn't good enough, so most of my work went into making it accurate enough for vets to trust.",
    tags: ["AI systems", "20B+ words", "2.5 years"],
    illustration: "waveform",
    link: { label: "Scribenote", href: "https://www.scribenote.com" },
  },
  {
    sheetNo: "A-103",
    figure: "Fig 3. Iso view",
    title: "Stella",
    story:
      "You think “that contract from the roofing sub last spring.” Your computer only knows scan_final_v2 (3).pdf. Stella lets you search your files the way you actually think, and nothing ever leaves your machine. Won Waterloo's Norman Esch entrepreneurship award.",
    tags: ["Local AI", "Search", "Mac app"],
    illustration: "fileDrawer",
    link: { label: "Stella", href: "https://trystella.co" },
  },
  {
    sheetNo: "A-104",
    figure: "Fig 4. Sect. A-A",
    title: "Mr Beam",
    story:
      "Steel shops lose money twice: wasted offcuts and workers waiting on the saw. I built software that decides which beam to cut for each order, cutting scrap and downtime, plus the inventory system to keep it honest. My first time building for people in hard hats.",
    tags: ["Optimization", "Steel", "Enterprise"],
    illustration: "iBeam",
    link: { label: "Mr Beam", href: "https://mrbeam-weld.vercel.app" },
  },
];
