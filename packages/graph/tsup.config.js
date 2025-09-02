const pkg = require('./package.json');

/** @type {import('tsup').Options} */
module.exports = {
  ...require('@microsoft/teams.config/tsup.config'),
  minify: true,
  bundle: true,
  sourcemap: 'inline',
  entry: ['src/index.ts'],
  define: {
    __PACKAGE_VERSION__: JSON.stringify(pkg.version),
  },
};
