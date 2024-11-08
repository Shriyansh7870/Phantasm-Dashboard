const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  // Update entry to include reportWebVitals
  entry: {
    main: "./src/index.js",
    webVitals: "./src/reportWebVitals.js", // Adjust the path if your file is in a different location
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js", // This will create separate bundles for each entry
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
        API_URL: JSON.stringify(process.env.API_URL || "http://localhost:3000"),
      },
      APP_VERSION: JSON.stringify(require("./package.json").version),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react"], // Added React preset since Web Vitals is usually used with React
            ],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
