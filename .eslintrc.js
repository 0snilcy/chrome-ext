module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['prettier/@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
};
