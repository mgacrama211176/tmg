import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#292B3A",
        secondary: "#56BD39",
        tertiary: "#FFFFFF",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
