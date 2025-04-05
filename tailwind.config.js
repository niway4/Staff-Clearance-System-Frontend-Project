/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sideBarColor: "#1C2D6D",
        titleBarColor: "#B3B3B3",
        gold: "#A38901",
        backgroundColor: "#ffffff",
        evenTableRowColor: "#E7E7E7",
        editButtonColor: "#6275C1"
      },
      fontFamily: {
        serif: ['Times New Roman', 'sans-serif'], // Replace 'YourFontFamily' with your desired font
      },
    },
  },
  plugins: [],
};
