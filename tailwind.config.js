/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#ccaea9",
        "custom-darker-brown": "#33110c",
        "custom-peach": "#ffccc4",
        "custom-brown": "#66342c",
      },
    },
  },
  plugins: [],
};
