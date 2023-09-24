/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      gray: "#ececeb",
      blue: "#0f2c59",
      orange: "#E25822",
    },
  },
};
export const plugins = [];
