/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      violet: "hsl(257, 40%, 49%)",
      "soft-magenta": "hsl(300, 69%, 71%)",
      white: "#fff",
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
      backgroundImage: {
        "mobile-background": "url(/dist/images/bg-mobile.svg)",
        "desktop-background": "url(/dist/images/bg-desktop.svg)",
      },
    },
  },
  plugins: [],
};
