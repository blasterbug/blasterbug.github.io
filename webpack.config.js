const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const pjson = require('./package.json');

if (fs.existsSync('.env')) {
  require('dotenv-expand')(
    require('dotenv').config({
      path: '.env',
    }),
  );
}

// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in webpack configuration.
const REACT_APP = /^REACT_APP_/i;

function setEnv() {
  const raw = Object.keys(process.env)
    .filter((key) => REACT_APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        // Useful for determining whether we’re running in production mode.
        // Most importantly, it switches React into the correct mode.
        NODE_ENV: process.env.NODE_ENV || 'development',
        PUBLIC_URL: process.env.PUBLIC_URL,
        // We support configuring the sockjs pathname during development.
        // These settings let a developer run multiple simultaneous projects.
        // They are used as the connection `hostname`, `pathname` and `port`
        // in webpackHotDevClient. They are used as the `sockHost`, `sockPath`
        // and `sockPort` options in webpack-dev-server.
        WDS_SOCKET_HOST: process.env.WDS_SOCKET_HOST,
        WDS_SOCKET_PATH: process.env.WDS_SOCKET_PATH,
        WDS_SOCKET_PORT: process.env.WDS_SOCKET_PORT,
      },
    );
  // Stringify all values so we can feed into webpack DefinePlugin
  const stringified = Object.keys(raw).reduce((env, key) => {
    env[key] = JSON.stringify(raw[key]);
    return env;
  }, {});
  return stringified;
}

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  // target: 'web',
  target: env.production ? 'web' : 'browserslist',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  bail: env.production,
  output: env.production
    ? {
        assetModuleFilename: '[id].[contenthash].[ext][query]',
        chunkFilename: '[id].[contenthash].chunk.js',
        filename: '[id].[contenthash].js',
        path: path.join(__dirname, 'build'),
        publicPath: pjson.homepage || '/',
        sourceMapFilename: '[file].map[query]',
        devtoolModuleFilenameTemplate: (info) =>
          path.join(info.absoluteResourcePath).replace(/\\/g, '/'),
      }
    : {
        assetModuleFilename: '[name].[contenthash].[ext][query]',
        chunkFilename: '[name].[contenthash].chunk.js',
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'build'),
        pathinfo: true,
        publicPath: process.env.PUBLIC_URL || '/',
        sourceMapFilename: '[file].map[query]',
      },
  optimization: {
    minimize: env.production,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          parse: {
            // We want terser to parse ecma 8 code. However, we don't want it
            // to apply any minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8,
          },
          compress: {
            drop_console: true,
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending further investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
    removeAvailableModules: true,
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    // dots matters
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      // '.ts',
      // '.tsx',
      '.wasm',
    ],
    alias: {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web',
    },
    // Some libraries import Node modules but don't use them in the browser.
    // Tell webpack to provide empty mocks for them so importing them works.
    fallback: {
      crypto: false,
      dgram: false,
      fs: false,
      net: false,
      tls: false,
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      // https://webpack.js.org/guides/asset-modules/
      {
        test: /\.(bmp|png|jpe?g|gif)$/,
        dependency: { not: ['url'] },
        type: 'asset/resource',
      },
      // Process application JS with Babel.
      {
        // test: /\.([jt]sx?|mjs)$/,
        test: /\.(jsx?|mjs)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: (url) => !url.startsWith('/'),
            },
          },
          'postcss-loader',
        ],
      },
      {
        // TODO: test this
        // use webpack asset module by default
        exclude: /\.([jt]sx?|mjs|html|json|css)$/,
        dependency: { not: ['url'] },
        type: 'asset/resource',
      },
      // ** STOP ** Make sure to add the new loader(s) before the 'file' loader.
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      // favicon: path.join(__dirname, 'public', 'favicon.ico'),
      hash: env.production,
      // output: path.join(__dirname, 'dist'),
      template: path.join(__dirname, 'src', 'index.html'),
      title: pjson.name,
      publicPath: env.production ? pjson.homepage : 'auto',
      xhtml: true,
      templateParameters: {
        author: pjson.author,
        description: pjson.description,
        keywords: pjson.keywords,
        title: pjson.name,
        url: pjson.homepage,
      },
    }),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
    // It is absolutely essential that NODE_ENV is set to production
    // during a production build.
    // Otherwise React will be compiled in the very slow development mode.
    new webpack.DefinePlugin({
      'process.env': setEnv(),
    }),
    new CaseSensitivePathsPlugin(),
    !env.production &&
      new ReactRefreshWebpackPlugin({
        overlay: true,
      }),
    // Moment.js is an extremely popular library that bundles large locale files
    // by default due to how webpack interprets its code. This is a practical
    // solution that requires the user to opt into importing specific locales.
    // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    // You can remove this if you don't use Moment.js:
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/moment$/,
    }),
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
    new MiniCssExtractPlugin({
      filename: '[id].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    env.production &&
      new CompressionPlugin({
        filename: '[path][base].gz[query]',
        test: /\.(js|css|html)$/,
        threshold: 8192,
      }),
    // Generate an asset manifest file with the following content:
    // - 'files' key: Mapping of all asset filenames to their corresponding
    //   output file so that tools can pick it up without having to parse
    //   `index.html`
    // - 'entrypoints' key: Array of files which are included in `index.html`,
    //   can be used to reconstruct the HTML if necessary
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      // publicPath,
      generate: (seed, files, entrypoints) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);
        const entrypointFiles = entrypoints.main.filter(
          (fileName) => !fileName.endsWith('.map'),
        );

        return {
          files: manifestFiles,
          entrypoints: entrypointFiles,
        };
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ].filter(Boolean),
  devServer: {
    // clientLogLevel: 'debug',
    compress: true,
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      // See https://github.com/facebook/create-react-app/issues/387.
      disableDotRule: true,
    },
    hot: true,
    injectClient: true,
    // lazy: true,
    overlay: false,
    port: parseInt(process.env.PORT, 10) || 4000,
    transportMode: 'ws',
    watchContentBase: true,
  },
  // TODO: stats
  // stats: {},
});
