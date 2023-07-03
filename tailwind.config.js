/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "350px", // Small devices (e.g., smartphones)
        md: "768px", // Medium devices (e.g., tablets)
        lg: "1024px", // Large devices (e.g., laptops)
        xl: "1280px", // Extra-large devices (e.g., desktops)
      },
    },
  },
  plugins: [],
};
