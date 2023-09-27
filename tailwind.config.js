/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      gray: "#ececeb",
      "gray-second": "#D9D9D9",
      blue: "#0f2c59",
      orange: "#E25822",
      "black-46": "#00000076",
    },
  },
};
export const plugins = [];
