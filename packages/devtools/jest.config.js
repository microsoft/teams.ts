/** @type {import('jest').Config} */
const baseConfig = require('@microsoft/spark.config/jest.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/src'],
  // Explicitly reference the package
  testEnvironment: require.resolve('jest-environment-jsdom'),
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        isolatedModules: true
      },
    ],
  },
  transformIgnorePatterns: [
    // Transform ESM modules that we're using
    '/node_modules/(?!(mdast-util-from-markdown|mdast-util-gfm|micromark-extension-gfm)).+\\.js$'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    // Handle CSS imports
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    // Handle image imports
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/src/__mocks__/fileMock.js',
    // Any import that ends with .styles.ts should use the griffelStylesMock
    '(.+)\\.styles\\.ts$': '<rootDir>/src/__mocks__/griffelStylesMock.js',
    // Handle module aliases
    '^@/(.*)$': '<rootDir>/src/$1',
    // Handle import.meta.env for devUtils module
    '^import.meta': '<rootDir>/src/__mocks__/import-meta.js'
  }
};
