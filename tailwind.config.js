/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyanotype blueprint palette
        blueprint: "#152A4E", // page background
        "blueprint-deep": "#0F2038", // nav/footer bands, sheet tabs
        panel: "#1B3459", // illustration panels
        ink: "#E4EBF7", // primary light ink
        "ink-dim": "#A9BBD9", // secondary text
        stamp: "#E2574B", // rubber-stamp red
      },
      borderColor: {
        line: "rgba(228, 235, 247, 0.28)",
        "line-strong": "rgba(228, 235, 247, 0.55)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        // subtle paper-lift on hover
        sheet: "0 6px 24px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
