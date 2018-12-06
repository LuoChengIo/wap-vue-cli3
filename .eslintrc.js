module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/component-name-in-template-casing': false,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": true
      }
    ],
    // "vue/html-end-tags": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}