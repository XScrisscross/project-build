module.exports = {
  root: false,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['babel', 'prettier'],
  rules: {
    // ignore users prettier setting
    'prettier/prettier': [
      'off',
      {
        trailingComma: 'es5',
        useTabs: false,
        tabWidth: 2,
        printWidth: 300,
        proseWrap: 'preserve',
        arrowParens: 'avoid',
        semi: false,
        singleQuote: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: true,
      },
    ],
    // customize eslint rules
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // (window)允许使用未定义的变量
    'no-undef': 0,
    // (调试用)允许未使用的变量存在
    'no-unused-vars': 0,
    // (调试用)允许未使用的组件存在
    'vue/no-unused-components': 0,
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
