const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./public/index.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Hack', ...defaultTheme.fontFamily.sans],
        mono: ['Hack', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'deep-gray': '#3f3f42',
        'digital-blue': '#0038ff',
        'light-blue': '#d6e8f9',
      },
      borderColor: {
        accent: '#1181e2',
      },
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
