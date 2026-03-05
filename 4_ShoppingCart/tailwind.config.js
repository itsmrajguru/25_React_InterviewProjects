/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        secondary: "var(--color-secondary)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        textMain: "var(--color-text-main)",
        textMuted: "var(--color-text-muted)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        btn: "var(--radius-btn)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      }
    },
  },
  plugins: [],
}

