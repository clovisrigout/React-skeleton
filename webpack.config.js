var webpack = require('webpack');
var path = require('path');

var config = {
  context: path.join(__dirname, 'src/client'),
  entry: [
    './app/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'src/client/public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include : path.join(__dirname, 'src/client/app'),
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};

module.exports = config;