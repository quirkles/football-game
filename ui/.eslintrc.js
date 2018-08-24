module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'], // extending recommended config and config derived from eslint-config-prettier
  parser: 'babel-eslint',
  plugins: [
      'prettier',
      'jest',
      'react',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    eqeqeq: ['error', 'always'],
  },
  settings: {
    react: {
      version: "16.4",
    },
  },
};