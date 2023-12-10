/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Edu" : ['Edu SA Beginner', 'cursive']
    },
    boxShadow: {
      'inner': '0px -1px 0px 0px #FFFFFF2E inset'
    },
    extend: {},
  },
  plugins: [],
}

