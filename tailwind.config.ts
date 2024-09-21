import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "white",
        "primary-black": "#141415",
        accent: "rgb(255,255,255,0.25)",
        "primary-blue": "#00A8E8",
        "primary-pink": "#FF70A6",
        description: "rgb(255,255,255,0.75)",
        "hero-transparent": "rgb(33, 33, 33, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
