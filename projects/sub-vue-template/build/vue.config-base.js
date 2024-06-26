const webpack = require('webpack');
const WebpackBar = require('webpackbar');

module.exports = {
  baseConfig: {
    publicPath: '/',
    outputDir: `dist/${process.env.PROJECT_MODE}_${process.env.VUE_APP_ENV}`,
    productionSourceMap: false,
    chainWebpack: config => {},
    css: {
      loaderOptions: {
        postcss: {
          plugins: [require('postcss-px2rem')({ remUnit: 192 })], // 'remUnit' 设计图尺寸
        },
      },
    },
  },
  plugins: [
    new WebpackBar(),
    new webpack.DefinePlugin({
      'process.env': {
        PROJECT_MODE: JSON.stringify(process.env.PROJECT_MODE),
        PROJECT_PORT: JSON.stringify(process.env.PROJECT_PORT),
      },
    }),
  ],
};
