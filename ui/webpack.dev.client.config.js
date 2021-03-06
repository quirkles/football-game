/* globals __dirname process module */
const webpack = require('webpack');
const path = require('path');

const webpackDevConfig = {
  mode: 'development',
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
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
          use: [
              'style-loader',
              'css-loader',
              {
                  loader: 'sass-loader',
                  options: {
                      includePaths: [path.resolve(__dirname, 'node_modules/foundation-sites/scss')]
                  }
              }
          ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BROWSER': JSON.stringify(true),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
module.exports = webpackDevConfig;
