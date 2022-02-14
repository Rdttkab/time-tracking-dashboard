module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Primary
      blue: "hsl(246, 80%, 60%)",

      "light-red (work)": "hsl(15, 100%, 70%)",
      "Soft-blue (play)": "hsl(195, 74%, 62%)",
      "Light-red (study)": "hsl(348, 100%, 68%)",
      "Lime-green (exercise)": "hsl(145, 58%, 55%)",
      "Violet-social": "hsl(264, 64%, 52%)",
      "Soft-orange (self care)": "hsl(43, 84%, 65%)",

      // Neutral
      "Very-dark-blue": "hsl(226, 43%, 10%)",
      "Dark-blue": "hsl(235, 46%, 20%)",
      "Desaturated-blue": "hsl(235, 45%, 61%)",
      "Pale-blue": "hsl(236, 100%, 87%)",
    },
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
