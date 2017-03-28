/* @flow */
const path = require('path')

module.exports = {
  entry: {
    'app': path.join(__dirname, 'example/index.js')
  },
  output: {
    path: path.join(__dirname, 'example/'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
