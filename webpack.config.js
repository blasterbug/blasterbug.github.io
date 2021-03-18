const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = (env) => ({
  mode: 'development',
  target: 'web',
  bail: env.production,
  entry: './src/index.tsx',
  output: env.production
    ? {
        assetModuleFilename: '[id].[contenthash].[ext][query]',
        chunkFilename: '[id].[contenthash].chunk.js',
        filename: '[id].[contenthash].js',
        publicPath: process.env.PUBLIC_URL || '/',
        sourceMapFilename: '[file].map[query]',
        devtoolModuleFilenameTemplate: (info) =>
          path.join(info.absoluteResourcePath).replace(/\\/g, '/'),
      }
    : {
        assetModuleFilename: '[name].[contenthash].[ext][query]',
        chunkFilename: '[name].[contenthash].chunk.js',
        filename: '[name].[contenthash].js',
        pathinfo: true,
        publicPath: '/',
        sourceMapFilename: '[file].map[query]',
      },

  plugins: [
    new webpack.ProgressPlugin(),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      hash: env.production,
      // output: path.join(__dirname, 'dist'),
      template: path.resolve(__dirname, 'index.html'),
      xhtml: true,
    }),
    new CaseSensitivePathsPlugin(),
    !env.production && new ReactRefreshWebpackPlugin(),
    // new ESLintPlugin({
    //   // Plugin options
    //   extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
    //   formatter: require.resolve('react-dev-utils/eslintFormatter'),
    //   eslintPath: require.resolve('eslint'),
    //   context: paths.appSrc,
    //   cache: true,
    //   // ESLint class options
    //   cwd: paths.appPath,
    //   resolvePluginsRelativeTo: __dirname,
    //   baseConfig: {
    //     extends: [require.resolve('eslint-config-react-app/base')],
    //     rules: {
    //       ...(!hasJsxRuntime && {
    //         'react/react-in-jsx-scope': 'error',
    //       }),
    //     },
    //   },
    // }),
    new MiniCssExtractPlugin(),
    env.production && new CompressionPlugin(),
    new FaviconsWebpackPlugin(path.resolve(__dirname, 'src/favicon.svg')),
    // Generate an asset manifest file with the following content:
    // - 'files' key: Mapping of all asset filenames to their corresponding
    //   output file so that tools can pick it up without having to parse
    //   `index.html`
    // - 'entrypoints' key: Array of files which are included in `index.html`,
    //   can be used to reconstruct the HTML if necessary
    // new WebpackManifestPlugin({
    //   fileName: 'asset-manifest.json',
    //   // publicPath,
    //   generate: (seed, files, entrypoints) => {
    //     const manifestFiles = files.reduce((manifest, file) => {
    //       manifest[file.name] = file.path;
    //       return manifest;
    //     }, seed);
    //     const entrypointFiles = entrypoints.main.filter(
    //       (fileName) => !fileName.endsWith('.map'),
    //     );

    //     return {
    //       files: manifestFiles,
    //       entrypoints: entrypointFiles,
    //     };
    //   },
    // }),
    new webpack.NoEmitOnErrorsPlugin(),
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        // use webpack asset module by default
        exclude: /\.([jt]sx?|mjs|html|json|css)$/,
        dependency: { not: ['url'] },
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    hot: true,
    host: 'localhost',
  },
});
