const path = require("path");

module.exports = {
  mode: "production", // or 'development' depending on your needs
  entry: "./src/index.ts", // Entry point for your package
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "index.js", // Output file name
    library: {
      name: "ReactEasyHooks", // Name of your library
      type: "umd", // Universal Module Definition, works in CommonJS and browser
    },
    globalObject: "this", // Fixes issues with UMD builds on Node.js
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: "ts-loader", // Use ts-loader to transpile TypeScript
        exclude: /node_modules/, // Exclude node_modules from transpilation
      },
    ],
  },
  externals: {
    react: "react", // Exclude react from the bundle
    "react-dom": "react-dom", // Exclude react-dom from the bundle
  },
  devtool: "source-map", // Generate source maps for debugging
};
