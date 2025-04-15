/** @type {import('tsup').Options} */
module.exports = {
  ...require('@microsoft/teams.config/tsup.config'),
  minify: true,
  bundle: true,
  sourcemap: 'inline',
  entry: ['src/index.ts'],
};
