/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-light-green": "#A4D4AE",
        "custom-dark-green": "#5BBFBA",
        "custom-purple": "#5F6CAF",
        "custom-light-yellow": "#E7F0C3",
        "custom-dark-yellow": "#F0CF85",
      },
    },
  },
  plugins: [],
};
