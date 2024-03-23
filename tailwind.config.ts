import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  future: { hoverOnlyWhenSupported: true },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: { DEFAULT: "1.25rem", full: "2rem", none: "0" },
    backdropBlur: { DEFAULT: "12px", lg: "24px" },
    container: { center: true, padding: "1.5rem" },
    colors: {
      text: {
        primary: "var(--text-primary)",
        prose: "var(--text-prose)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
      },
      bg: {
        idle: "var(--bg-idle)",
        darker: "var(--bg-darker)",
        hover: "var(--bg-hover)",
        active: "var(--bg-active)",
        disabled: "var(--bg-disabled)",
      },
      separator: "var(--separator)",
      black: "black",
      white: "white",
      transparent: "transparent",
      current: "currentColor",
      red: "var(--red)",
      orange: "var(--orange)",
      yellow: "var(--yellow)",
      green: "var(--green)",
      mint: "var(--mint)",
      cyan: "var(--cyan)",
      blue: "var(--blue)",
    },
    transitionDuration: { DEFAULT: "300ms", 600: "600ms" },
  },
  plugins: [animate],
};

export default config;
