/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Color
      colors: {
        primaryColor: "#262626",
        socundaryColor: "#767676",
        listColor: "#6D6D6D",
        categoryColor: "#F5F5F3",
        borderColor: "#979797",
      },
      // Color
      // Font Family
      fontFamily: {
        dm: ["DM Sans"],
      },
      // Font Family
      // Font Size
      fontSize: {
        39: "39px",
      },
      // Font Size
      // Max Width Container
      maxWidth: {
        container: "1600px",
      },
      // Max Width Container
    },
  },
  plugins: [],
};
