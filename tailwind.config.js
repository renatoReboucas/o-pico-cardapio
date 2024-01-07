/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'var(--font-roboto)',
      },
      screens:{
        'sm': '360px',
        'md': '768px',
      },
      colors:{
        gray:{
          '50': '#ebebeb',
        },
        yellow:{
          '50': '#FFEA31',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
