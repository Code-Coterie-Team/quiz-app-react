/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "modal-back": "rgb(61,61,61)",
      },
    },
  },
  plugins: [],
};
