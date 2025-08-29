const baseConfig = require('@microsoft/teams.config/jest.config');
const pkg = require('./package.json');

module.exports = {
  ...baseConfig,
  globals: {
    __PACKAGE_VERSION__: pkg.version,
  },
};