// nodejs
const path = require('path')

// webpack
const webpack = require('webpack')

// third
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// entry
const entry = path.resolve(__dirname, '../app/main')

// output
const output = {
  path: path.resolve(__dirname, '../webapp'), //打包文件的输出路径
  publicPath: '',
  filename: 'js/[name].[hash:8].bundle.js',
  chunkFilename: 'js/[name].[hash:8].bundle.js',
}

// resolve
const resolve = {
  alias: {
    '~actions': path.resolve(__dirname, '../app/actions'),
    '~apis': path.resolve(__dirname, '../app/apis'),
    '~assets': path.resolve(__dirname, '../app/_assets'),
    '~books': path.resolve(__dirname, '../static/books/index.js'),
    '~contain': path.resolve(__dirname, '../app/cpts/contain'),
    '~uiview': path.resolve(__dirname, '../app/cpts/uiview'),
    '~env': path.resolve(__dirname, '../app/env'),
    '~reducer': path.resolve(__dirname, '../app/reducer'),
    '~redux': path.resolve(__dirname, '../app/redux'),
    '~router': path.resolve(__dirname, '../app/router'),
    '~utils': path.resolve(__dirname, '../app/utils'),
    '~views': path.resolve(__dirname, '../app/views'),
  },
  extensions: ['.js', '.json', '.jsx', 'css', 'less', 'scss', 'md', 'MD'],
  modules: [path.resolve(__dirname, '../app/components'), 'node_modules'], // 优先导入模块
}

// rules
const rules = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: [path.resolve(__dirname, '../app')],
      loader: 'babel-loader',
      options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: './css' },
        },
        'css-loader',
      ],
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '../' },
        },
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: { '@primary-color': '#ae976e' },
              javascriptEnabled: true,
            },
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: { publicPath: '../' },
        },
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: { minimize: true },
        },
      ],
    },
    {
      test: /\.(md|MD)x?$/,
      use: [
        'babel-loader',
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: 'img',
          },
        },
      ],
    },
  ],
}

// plugins
const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    path: path.resolve(__dirname, '../webapp/index.html'),
    template: path.resolve(__dirname, '../public/index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[hash:8].bundle.css',
    chunkFilename: 'css/[name].[hash:8].bundle.css',
  }),
]

module.exports = {
  entry: entry,
  output: output,
  resolve: resolve,
  rules: rules,
  plugins: plugins,
}
