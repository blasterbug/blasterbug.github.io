/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./public/index.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', ...defaultTheme.fontFamily.sans],
        display: ['Montserrat', ...defaultTheme.fontFamily.sans],
        body: ['Heebo', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'deep-gray': '#3f3f42',
        'digital-blue': '#0038ff',
        'light-blue': '#d6e8f9',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.deep-gray'),
            a: {
              color: theme('colors.digital-blue'),
              '&:hover': {
                color: theme('colors.light-blue'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      // borderColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
