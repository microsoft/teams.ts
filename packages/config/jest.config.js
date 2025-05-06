/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  collectCoverage: true,
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  passWithNoTests: true,
  clearMocks: true,
  collectCoverageFrom: [
    '**/*.ts',
    '!**/*.d.ts',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/testing/**',
    '!**/index.ts',
  ],
  coverageThreshold: {
    // global: {
    //   branches: 90,
    //   functions: 90,
    //   lines: 90,
    //   statements: 90,
    // },
  },
  testEnvironment: 'node',
  silent: true,
  verbose: true,
};
