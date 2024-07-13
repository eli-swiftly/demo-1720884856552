/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#25252",
          secondary: "#161717",
          light: "#525252",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#AAAAAA",
          cream: "#F5F5DC",
        },
        accent: {
          primary: "#8AB4F8",
          success: "#4CAF50",
          warning: "#FFC107",
          danger: "#FF5722",
          paleBlue: "#8AB4F8",
        },
        border: {
          primary: "#444444",
        },
      },
      fontSize: {
        small: "0.875rem",
        medium: "1rem",
        large: "1.25rem",
        xlarge: "1.5rem",
      },
      spacing: {
        small: "0.5rem",
        medium: "1rem",
        large: "1.5rem",
        xlarge: "2rem",
      },
      borderRadius: {
        small: "4px",
        medium: "8px",
        large: "12px",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
