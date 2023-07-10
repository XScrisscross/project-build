const path = require('path');
const baseConfig = require('./vue.config-base').baseConfig;
const plugins = require('./vue.config-base').plugins;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  ...baseConfig,
  configureWebpack: {
    entry: ['babel-polyfill', '/build/web-entry/main-electron.js'],
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', '.less'],
      alias: { '@': resolve('../src/renderer') },
    },
    plugins: [...plugins],
    // 公共资源合并
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100,
          },
          common: {
            chunks: 'all',
            test: /[\\/]src[\\/]js[\\/]/,
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60,
          },
          styles: {
            name: 'styles',
            test: /\.(sa|sc|le|c)ss$/,
            chunks: 'all',
            enforce: true,
          },
          runtimeChunk: {
            name: 'manifest',
          },
        },
      },
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('postcss-px2rem')({ remUnit: 192 })], // 'remUnit' 设计图尺寸
      },
    },
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: resolve('../src/main/main.js'),
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: '4000',
    proxy: {
      '^/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '^/mock/': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '',
        },
      },
    },
  },
};
