import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: {
          500: "#8A42DB",
          400: "#8A42DB",
        },
        secondaryColor: {
          light: "#EA638C",
          dark: "#7DFFAF"
        },
        surfaceBackground: {  
          dark: "#171023",
          light: "#FBFCFC"
        },
        surfacePrimary: {
          dark: "#2C243B",
          light: "#BDC1E9"  
        },
        surfaceSecondary: {
          dark: "#413A4F",
          light: "#A6B0CD"
        },
        surfaceTertiary: {
          dark: "#4E4563",
          light: "#8A99C7"
        },
        textPrimary: {
          dark: "#F5F6F6",
          light: "#171023"
        },
        textSecondary: {
          dark: "#CDD0D4",
          light: "#2C243B"
        },
      },
      fontFamily: { 
        heeboSans: ["var(--font-heebo-sans)", "sans-serif"],
        kalam: ["var(--font-kalam)", "cursive"],
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #9955E8, #7BFFAF)',
      },
    },
  },
  plugins: [],
} satisfies Config;
