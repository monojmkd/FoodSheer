/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredericka: ["Fredericka the Great", "serif"],
        cookie: ["Cookie", "cursive"],
      },
    },
  },
  plugins: [],
};
