/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // sideBarColor: "#1C2D6D",
        sideBarColor:"#11284d",
        // titleBarColor: "#B3B3B3",
        titleBarColor:"#c6c8ca",
        gold:"#A38901",
        backgroundColor: "#ffffff",
        evenTableRowColor: "#f2f2f2",
        // evenTableRowColor: "#f4f6f8",#f2f2f2 E7E7E7

        editButtonColor: "#6275C1"
      },
      fontFamily: {
        serif: ['Times New Roman', 'sans-serif'], // Replace 'YourFontFamily' with your desired font
      },
    },
  },
  plugins: [],
};
