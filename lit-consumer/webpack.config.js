const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js?$/,
      use: ['babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      inject: true,
    }),
  ],
};
