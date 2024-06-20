/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cookie: ["Cookie", "cursive"],
        ptserif: ["PT Serif", "serif"],
      },
    },
  },
  plugins: [],
};
