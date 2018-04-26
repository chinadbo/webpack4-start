const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'style-loader!css-loader!stylus-loader'
        }),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|ttf|eot|woff(2)?)(\?[=a-z0-9]+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            query: {
              limit: '8192',
              name: 'images/[name]_[hash:7].[ext]'
            }
          }
        }]
      }
    ]
  },
  plugin: [
    new HtmlWebapckPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['index'],
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        removeComments: true
      }
    }),
    new ExtractTextPlugin('[name].[contenthash:8].css'),
    new CleanWebpackPlugin(
      [path.join(__dirname, 'dist')],
      {
        // root
        root: path.join(__dirname, './')
      }
    )
  ],
  resolve: {
    extensions: ['.js', 'jsx', '.styl', '.json']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 2,
          name: 'common'
        }
      }
    }
  }
}