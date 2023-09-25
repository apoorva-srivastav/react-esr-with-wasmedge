const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './express/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('express-build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      }
    ]
  }
};