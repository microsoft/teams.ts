const baseConfig = require('@microsoft/teams.config/jest.config');

module.exports = {
  ...baseConfig,
  collectCoverageFrom: [
    'src/index.ts', // Only collect coverage for this file
    '!**/*.d.ts',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^src/../package.json$': '<rootDir>/package.json',
  },
};