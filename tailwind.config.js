/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      violet: "hsl(257, 40%, 49%)",
      "soft-magenta": "hsl(300, 69%, 71%)",
    },
    screens: {
      mobile: "375px",
      laptop: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        "semi-bold": 600,
      },
    },
  },
  plugins: [],
};
