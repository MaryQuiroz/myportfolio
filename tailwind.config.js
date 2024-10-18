/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-brown': {
          light: '#8B4513',
          DEFAULT: '#8B4513',
          dark: '#5D2E0C',
        },
        'secondary-brown': {
          light: '#A0522D',
          DEFAULT: '#A0522D',
          dark: '#6B3E20',
        },
        'primary-cream': {
          light: '#FFFDD0',
          DEFAULT: '#FFFDD0',
          dark: '#E6E4BA',
        },
        'secondary-cream': {
          light: '#F5DEB3',
          DEFAULT: '#F5DEB3',
          dark: '#D2B48C',
        },
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
