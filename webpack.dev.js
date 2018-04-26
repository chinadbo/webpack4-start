const path = require("path")
const webpack = require("webpack")

module.exports = {
    cache: true,
    devtool: "eval", //or cheap-module-eval-source-map
    entry: {
        app: path.join(__dirname, "client", "index.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    plugins: [
        //Typically you'd have plenty of other plugins here as well
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, "client"),
            manifest: require("./dll/vendor-manifest.json")
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel",
                include: [
                    path.join(__dirname, "client") //important for performance!
                ],
                query: {
                    cacheDirectory: true, //important for performance
                    plugins: ["transform-regenerator"],
                    presets: ["react", "es2015", "stage-0"]
                }
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        root: path.resolve(__dirname, "client"),
        modulesDirectories: ["node_modules"]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'), // 静态文件根目录
      port: 9090,
      host: 'localhost',
      overlay: true,
      compress: true // gzip
    }
}