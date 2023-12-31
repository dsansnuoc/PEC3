/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xl2: ["28px", "36px"],
      xl3: ["28px", "36px"],
      esp: ["98px", "120px"],
    },
    flex: {
      3: "1 0 30%",
    },
  },
  plugins: [],
};
