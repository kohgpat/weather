const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const DotenvPlugin = require("dotenv-webpack");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./build"
  },
  plugins: [
    new DotenvPlugin()
  ]
});
