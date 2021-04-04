module.exports = {
  plugins: [
    'autoprefixer',
    'tailwindcss',
    // require('cssnano')({
    //   preset: [
    //     'advanced',
    //     {
    //       autoprefixer: false,
    //       discardComments: {
    //         removeAll: true,
    //       },
    //     },
    //   ],
    // }),
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        stage: 1,
        features: {
          'focus-within-pseudo-class': false,
        },
      },
    ],
  ],
};
