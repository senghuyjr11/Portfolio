/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4eee3",
        "paper-deep": "#efe7da",
        "paper-shadow": "#e7dece",
        ink: "#18130f",
        "ink-soft": "#5c5147",
        line: "rgba(24, 19, 15, 0.85)",
        "line-soft": "rgba(24, 19, 15, 0.25)",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "monospace"],
        display: ['"Special Elite"', "serif"],
      },
      boxShadow: {
        paper: "8px 8px 0 rgba(24, 19, 15, 0.05)",
      },
      keyframes: {
        "page-rise": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "page-rise": "page-rise 480ms ease both",
      },
      maxWidth: {
        page: "960px",
      },
    },
  },
  plugins: [],
};
