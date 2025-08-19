const base = require('@microsoft/teams.config/tsup.config');

/**
 * @type {import('tsup').Options}
 */
module.exports = {
  ...base,
  minify: true,
  bundle: false,
  entry: ['src/**/*.ts'],
  publicDir: 'templates',
};
