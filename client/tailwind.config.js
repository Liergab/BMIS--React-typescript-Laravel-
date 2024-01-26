/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },   
     colors: {
      'background': '#070C0E',
      'text': '#E8F1F3',
      'primary': '#508E9B',
      'secondary': '#623262',
      'accent': '#80425A',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'bg-purple':'#B7C1F5',
      'l-text':'#333333',
      'bg-button':'#EF4040'
    },

    extend: {},
  },
  plugins: [],
}

