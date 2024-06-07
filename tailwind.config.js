/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#D93360',
      secondary: '#143252',
      background: {
        light: '#FAFAFA',
        dark: '#EDEEEF',
      },
      white: '#FFF',
      light: '#B5B5B5',
      muted: '#656565',
      dark: '#000',
      transparent: 'transparent',
    },
  },
  plugins: [],
};
