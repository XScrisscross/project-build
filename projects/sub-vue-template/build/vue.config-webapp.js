const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = ''
      return args
    })
  },
  productionSourceMap: false,
  configureWebpack: {
    entry: '/src/renderer/main-webapp.js',
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', '.less'],
    },
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
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#f44336',
            'link-color': '#f44336',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
      // postcss: {
      //   // 'remUnit' 设计图尺寸
      //   plugins: [require('postcss-px2rem')({ remUnit: 192 })],
      // },
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.VUE_APP_TEMPLATE_PORT || '8080',
    proxy: {
      '^/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '^/mock': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '',
        },
      },
    },
  },
}
