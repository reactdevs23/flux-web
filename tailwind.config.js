/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFA",
        secondary: "#343434",
        white: "#fff",
        black: "#000",
        black700: "#252525",
        // green: "#63FFB6 ",
        green: "#16C66E",
        gray: "#D9D9D9",
        yellow: "#ffbb00",
      },
      maxWidth: {
        custom: "1232px",
      },
      fontSize: {
        xl: "21px", // Custom font size for xl
      },
      fontFamily: {
        sf: ["Noto Sans", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
      screens: {
        screen1340: "1341px",
        screen1440: "1441px",
        xs: "480px",
      },
    },
  },
  plugins: [],
};
