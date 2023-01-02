/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true
  },
  content: [
    "./projects/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#ababab"
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
