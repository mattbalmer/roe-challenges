const path = require('path');

module.exports = {
  entry: './source/index.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  watch: true,

  mode: 'development',

  devtool: 'source-map',

  resolve: {
    modules: [
      path.resolve('source'),
      'node_modules'
    ],
    extensions: ['.ts', '.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },

      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
};