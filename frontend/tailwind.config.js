import rtl from 'tailwindcss-rtl';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [rtl()],
};
