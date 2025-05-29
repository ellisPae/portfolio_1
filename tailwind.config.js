/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class", // ← This is key to make "dark:" classes work
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollSnapType: {
        yMandatory: "y mandatory",
      },
    },
  },
  plugins: [],
};
