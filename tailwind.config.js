/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables dark mode via 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        // Semantic names for easier use in light/dark themes
        "bg-base": "#ffffff", // Light background
        "bg-dark": "#1a1a1a", // Dark background
        "text-base": "#000000", // Light text
        "text-dark": "#ffffff", // Dark text

        // Accent and UI colors
        slate: "#0a192f",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        "light-navy": "#112240",
        "lightest-navy": "#8892b0",
        white: "#e6f1ff",
        green: "#64ffda",
        purple: "#604CC3",
        orange: "#FF6600",
        "light-text": "#737373",
      },
    },
  },
  plugins: [],
};
