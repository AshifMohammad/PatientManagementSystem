var HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        query: {
          compact: false,
          plugins: ["lodash"],
          presets: [["@babel/env", { targets: { node: 6 } }]]
        }
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /(\.css)$/,
        use: [
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    mainFiles: ["index", "Index"],
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 9000
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:4000"
    })
  }
}
