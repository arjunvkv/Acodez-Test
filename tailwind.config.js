/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01539D",
        secondary: "#FFDD1E",
        "alt-primary": "#33C7CA",
      },
      container: {
        center: true,
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(104deg, rgba(42,167,181,1) 0%, rgba(11,93,163,1) 35%)",
      },
    },
  },
  plugins: [],
};
