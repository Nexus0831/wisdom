require('babel-polyfill');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// プラグイン
const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, './../public/index.html'),
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('local')
    }
  }),
  new webpack.HotModuleReplacementPlugin()
];

console.log('--------------- local ---------------');

module.exports = {
  entry: [
    path.join(__dirname, './../src/index.js'),
    'react-hot-loader/patch'
  ],
  output: {
    path: path.join(__dirname, './../build'),
    filename: 'main.js',
    publicPath: '/'
  },
  plugins,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 5555,
    hot: true,
    host: '0.0.0.0',
    inline: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
      { test: /\.jpg$/, use: 'url-loader?mimetype=image/jpg' },
      { test: /\.svg$/, use: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, use: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, use: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, use: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, use: 'url-loader?mimetype=application/font-woff' }
    ]
  }
};
