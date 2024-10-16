/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2563eb",
        blueEnd: "#1e3a8a",
        stone: "#78716c ",
        gray: "#9ca3af ",
      },
    },
  },
  plugins: [],
};
