import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D2238",
          50: "#F2F5F8",
          100: "#E1E8EF",
          200: "#C3D0DD",
          700: "#173A5C",
          800: "#0F2C46",
          900: "#0D2238",
          950: "#081625",
        },
        teal: {
          DEFAULT: "#10B8B0",
          50: "#EAFBFA",
          100: "#D0F5F3",
          200: "#A4EBE7",
          300: "#6FDDD7",
          400: "#38C9C2",
          500: "#10B8B0",
          600: "#0E9E97",
          700: "#0C817B",
          800: "#0A6763",
          900: "#095551",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(13, 34, 56, 0.18)",
        "card-hover": "0 20px 45px -15px rgba(13, 34, 56, 0.28)",
        soft: "0 4px 20px -8px rgba(13, 34, 56, 0.15)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "sparkle-slow": "sparkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
