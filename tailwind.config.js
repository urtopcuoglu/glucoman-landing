/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C4A52',
          light: '#3D6B77',
          dark: '#1D333A',
        },
        accent: {
          DEFAULT: '#E8845A',
          light: '#F0A07A',
        },
        bg: {
          DEFAULT: '#F7F2EA',
          dark: '#EDE7D9',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Source Serif 4', 'serif'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}