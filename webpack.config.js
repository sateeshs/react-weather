const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");



module.exports = {
  //context: path.resolve(__dirname, 'dist'),
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },  plugins: [new HtmlWebPackPlugin({
          template: path.resolve(__dirname, "dist")+"/index.html",
          filename: path.resolve(__dirname, "dist")+"/index.html"
  })]
  ,
  mode: "development"
};
