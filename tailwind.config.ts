import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080909",
        surface: "#101313",
        text: {
          primary: "#F6F6F6",
          secondary: "#9BA3A7",
        },
        accent: "#22C55E",
        border: "rgba(255,255,255,.08)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        section: "120px",
        "section-tablet": "80px",
        "section-mobile": "64px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
