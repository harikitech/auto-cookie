/* @flow */
const path = require('path')

module.exports = {
  entry: {
    app: path.join(__dirname, 'example/index.js')
  },
  output: {
    path: path.join(__dirname, 'example/'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
