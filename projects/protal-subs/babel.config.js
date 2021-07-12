module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', ['@babel/env', { targets: { node: 6 } }]],
  plugins:
    process.env.NODE_ENV === 'production'
      ? // product plugins env
        [
          ['lodash', { id: ['async', 'lodash-bound'] }],
          [
            'import',
            {
              libraryName: 'ant-design-vue',
              libraryDirectory: 'es',
              style: 'css',
            },
          ],
          [
            'transform-remove-console',
            {
              exclude: ['error', 'warn'],
            },
          ],
        ]
      : // development plugins env
        [
          ['lodash', { id: ['async', 'lodash-bound'] }],
          [
            'import',
            {
              libraryName: 'ant-design-vue',
              libraryDirectory: 'es',
              style: 'css',
            },
          ],
        ],
}
