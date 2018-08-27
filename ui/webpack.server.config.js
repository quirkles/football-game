/* globals __dirname process module */

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

process.noDeprecation = true;

let webpackConfig = {
  entry: './src/server',

  mode: 'none',

  target: 'node', // Ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // Ignore all modules in node_modules folder

  output: {
    path: path.join(__dirname, 'server-dist'),
    filename: 'server.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
        include: path.join(__dirname, 'src'),
        exclude: [/node_modules/, path.join(__dirname, 'node_modules')],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BROWSER': JSON.stringify(false),
      $dirname: '__dirname',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/__tests__/),
    new webpack.IgnorePlugin(/__mocks__/),
  ],
  optimization: {
    minimize: false,
  },
};

module.exports = webpackConfig;
