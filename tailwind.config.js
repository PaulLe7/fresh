/** @type {import('tailwindcss').Config} */
module.exports = {
  // where to apply the styles
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'primary-white': '#FFFFFF',
        'typography-main': '#1A1A1A',
        'typography-secondary': '#4D4D4D',
        'typography-grey': '#787878',
        'secondary-grey-light': '#E3E3E3',
        'secondary-grey-light-2': '#F9FAFB',
      },
    },
  },
};
