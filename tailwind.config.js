/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/bg.png')",
      },
      screens: {
        md: "860px",
        "3xl": "1735px",
        "4xl": "1970px",
      },
      colors: {
        bleuish: "#030716",
        secondary: "#040C25",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [addVariablesForColors],
};

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
