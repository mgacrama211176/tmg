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
      backdropBlur: {
        "350": "350px",
      },
      keyframes: {
        dashedLine: {
          "0%": {
            backgroundImage:
              "linear-gradient(to right, #56BD39 50%, transparent 50%)",
            backgroundSize: "20px 2px",
            backgroundPosition: "right",
          },
          "100%": {
            backgroundImage:
              "linear-gradient(to right, #56BD39 50%, transparent 50%)",
            backgroundSize: "20px 2px",
            backgroundPosition: "left",
          },
        },
      },
      animation: {
        dashedLine: "dashedLine 0.5s linear",
      },
    },
  },
  plugins: [],
} satisfies Config;
