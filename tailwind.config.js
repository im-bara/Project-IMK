const { default: daisyui } = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ungu: {
          700:"#0E2148",
          500: "#483AA0",
          300: "#7965C1",
          100: "#8b7cbf",
          25: "#dbd2fa",
        },
        kuning: "#E3D095",
      },
      fontFamily: {
        sans: ['Inter','sans-serif'],
      },
    },
  },
  plugins: [daisyui],
};
