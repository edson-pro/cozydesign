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
        noise: "url('/images/noise.png')",
      },
      fontSize: {
        5: "5rem",
      },
      colors: {
        primary: "#5135ff",
        "noise-bg": "#1C1C1C",
        "light-bg": "#F6F6F6",
      },
      maxHeight: {
        17.5: "17.5rem",
      },
      maxWidth: {
        17.5: "17.5rem",
        15.625: "15.625rem",
        9.375: "9.375rem",
      },
      height: {
        0.3: "1.5px",
      },
      minWidth: {
        "1/2": "50%",
      },
      lineHeight: {
        3.125: "3.125rem",
        3.75: "3.75rem",
        3.625: "3.625rem",
      },
    },
  },
  plugins: [],
};
