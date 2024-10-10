import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "var(--primary_1)",
          2: "var(--primary_2)",
          3: "var(--primary_3)"
        },
        secondary: {
          1: "var(--secondary_1)",
          2: "var(--secondary_2)",
          3: "var(--secondary_3)"
        },
        tertiary: {
          1: "var(--tertiary_1)",
          2: "var(--tertiary_2)",
          3: "var(--tertiary_3)"
        }
      }
    }
  },
  plugins: []
}
export default config
