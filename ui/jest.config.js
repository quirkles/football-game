/* globals module */
const path = require('path');

module.exports = {
  rootDir: './src',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverageFrom: ['**/*.{js,jsx}'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFiles: [path.resolve('jest/setupEnzyme.js')],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    'client.js',
    '/server/',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
};
