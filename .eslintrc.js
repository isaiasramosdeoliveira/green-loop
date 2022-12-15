module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'default-case': 'off',
    'import/prefer-default-export': 'off',
  },
};
