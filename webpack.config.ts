const path = require("path");
const SizePlugin = require("size-plugin");

module.exports = {
  entry: {
    app: path.join(__dirname, "example/index.ts"),
  },
  output: {
    path: path.join(__dirname, "example/"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  plugins: [new SizePlugin({ publish: true })],
};
