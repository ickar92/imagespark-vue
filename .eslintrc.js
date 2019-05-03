module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': ['error', { props: false }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: true,
      },
    }],
    'vue/singleline-html-element-content-newline': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
