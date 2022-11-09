/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fraunces72ptsupersoft", "arial"],
        Geomanist: ["Geomanist", "arial"],
        Fraunces72ptsupersoft: ["Fraunces72ptsupersoft", "arial"],
        Fraunces144ptsupersoft: ["Fraunces144ptsupersoft", "arial"],
      },
      backgroundImage: {
        noise: "url('/images/noise.webp')",
        "dot-pattern": "url('/images/dot-pattern.svg')",
      },
      colors: {
        primary: "#5135ff",
        primaryLight: "#d4ac8e",
        "noise-bg": "#1C1C1C",
        "light-bg": "#F6F6F6",
      },
    },
  },
  plugins: [],
};
