var _path = require("path");
module.exports = {
  mode: "development",
  entry: _path.resolve(__dirname, "src/index.js"),
  output: {
    path: _path.join(__dirname, "dist", "assets"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
