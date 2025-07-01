/** @type {import("tailwindcss").Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],

  theme: {
    backgroundImage: {
      hero: "url(assets/hero.png)",
    },
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      mobile: "left -12rem bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    extend: {},
  },
  plugins: [],
};
