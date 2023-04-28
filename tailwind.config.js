/** @type {import('tailwindcss').Config} */
export const content = ["public/*.{html,js}"];
export const theme = {
  extend: {},
};
export const plugins = [];

// tailwind.config.js

module.exports = {
  darkMode: 'class', // enable the dark mode class
  theme: {
    extend: {
      colors: {
        'primary': {
          light: '#6EE7B7',
          DEFAULT: '#48BB78',
          dark: '#38A169',
        },
        'secondary': {
          light: '#FECACA',
          DEFAULT: '#FCA5A5',
          dark: '#F87171',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}
