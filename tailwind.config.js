/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        dark: '#373737',

        green: '#00AFA9',
        orange: '#F88323',
        yellow: '#FFCC37',
        blue: '#461D8D',

        purple: {
          100: '#D9D0E9',
          400: '#B566F2',
          500: '#8947EF',
        },
      },
      fontFamily: {
        nunitoBold: 'Nunito_700Bold',
        nunitoRegular: 'Nunito_400Regular',
        nunitoLight: 'Nunito_300Light',
      },
      spacing: {
        'half-minus-m': 'calc(50% - 0.25rem)', // 0.25rem is the value of m-1 in Tailwind
      },
    },
  },
  plugins: [],
}
