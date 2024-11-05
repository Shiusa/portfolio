import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blancPur: "#FFFFFF",
        orTamise: "#E0C6AD",
        bleuNeon: "#8de3ff",
        bleuAcier: "#364f6b",
        grisAnthracite: "#272a3a",
        mauveNeon: "#bb8ae6",
        mauveNeonClair: "#3D425B",
        roseNeon: "#ff4a70",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    typography,
  ],
};
export default config;
