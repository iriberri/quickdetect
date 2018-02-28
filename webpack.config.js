const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const sourceHtml = './src/index.html';
const distHtml = 'index.html';

module.exports = {

  entry: {
    qd: './src/index.js',
    qdp: './src/prod.js'
  },

  plugins: [
      new CleanWebpackPlugin(['dist'])
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },

  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  }

};