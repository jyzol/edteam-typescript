module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    // entry: "./src/app.ts",
    entry: "./src/clase06/app.ts",
    output: {
      filename: "app.js",
      path: __dirname + './dist'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    },
    devServer: {
        port: 8000
    }
  };