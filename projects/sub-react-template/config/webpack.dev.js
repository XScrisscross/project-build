// node
const path = require('path')

// webpack
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  mode: 'development',
  stats: 'errors-only',
  devtool: 'source-map',
  entry: require('./webpack.base').entry,
  output: require('./webpack.base').output,
  resolve: require('./webpack.base').resolve,
  module: require('./webpack.base').rules,
  devServer: {
    proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:8888',
    },
    publicPath: '/',
    hot: true,
    port: 6000,
    open: false,
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../webapp/index.html'),
  },
  plugins: [...require('./webpack.base').plugins, new DashboardPlugin(), new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
}
