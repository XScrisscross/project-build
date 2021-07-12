// node
const path = require('path')

// webpack
const webpack = require('webpack')

// third
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: false,
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            pure_funcs: ['console.log']
          }
        }
      })
    ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'vendors.js',
          priority: -10,
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          filename: 'js/common.js'
        }
      }
    }
  },
  entry: require('./webpack.base').entry,
  output: require('./webpack.base').output,
  resolve: require('./webpack.base').resolve,
  module: require('./webpack.base').rules,
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../webapp')]
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ...require('./webpack.base').plugins,
    new BundleAnalyzerPlugin({
      analyzerHost: '127.0.0.1',
      analyzerPort: 3333,
      openAnalyzer: false
    })
  ]
}