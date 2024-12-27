/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        serif: ['Crimson Text', 'serif'],
        display: ['DM Serif Display', 'serif'],

      },
      colors: {
        primary: {
          light: '#bdcfdb',
          DEFAULT: '#ebf1f5',
          dark: '#677d92',
          darker: '#486487',
        },
        secondary: {
          light: '#1971dc',
          DEFAULT: '#3182ce',
          dark: '#33557f',
        },
        tertiary: {
          light: '#5981a8',
          DEFAULT: '#5981a8',
          dark: '#5981a8',
        },
        accent: {
          light: '#e01b50',
          DEFAULT: '#e01b50',
          dark: '#b3143f',
        },
        text: {
          DEFAULT: '#000000',
          main: '#000000',
          light: '#555555',
        },
        salient: {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#000000',
        },
      },
    },
  },
  plugins: [],
}

