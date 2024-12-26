module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', 
  ],
  plugins: ['@typescript-eslint', 'prettier'], 
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error', 
  },
};