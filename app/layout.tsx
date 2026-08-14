import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Ayush Bhargava",
  description:
    "I build AI for industries that still run on paper. Software engineer in San Francisco, working on vet records, steel orders, and building codes.",
  openGraph: {
    title: "Ayush Bhargava",
    description: "I build AI for industries that still run on paper.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} ${mono.variable} font-body min-h-screen flex flex-col`}
      >
        <header className="border-b border-line bg-blueprint-deep/60">
          <nav className="mx-auto flex w-full max-w-screen-lg items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="font-heading text-lg font-bold uppercase tracking-[0.2em] text-ink"
            >
              Ayush Bhargava
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/now" className="draft-link">
                Now
              </Link>
              <a
                href="https://github.com/ayushbh2020"
                target="_blank"
                rel="noreferrer"
                className="draft-link"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayushbharg"
                target="_blank"
                rel="noreferrer"
                className="draft-link"
              >
                LinkedIn
              </a>
            </div>
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-line bg-blueprint-deep">
          <div className="mx-auto flex w-full max-w-screen-lg flex-col items-start justify-between gap-2 px-6 py-4 sm:flex-row sm:items-center">
            <p className="annotation">
              Drawn by: Ayush · Checked by: Nobody · Rev 4 · SF, CA
            </p>
            <a href="mailto:ayushbh8@gmail.com" className="draft-link">
              ayushbh8@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
