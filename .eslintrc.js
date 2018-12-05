module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/component-name-in-template-casing': false
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/prettier'
  ]
};