const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './utils/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'color-1': '#F5F7FF',
        'color-2': '#0074BE',
        'color-3': '#0156FF',
        'color-4': '#01A4FF',
        'color-5': '#8C8C8C',
        'color-6': '#CCCCCC',
        'color-7': '#EBEBEB',
        'color-9': '#C94D3F',
        'color-10': '#78A962',
        'color-11': '#666666'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
  ],
}
