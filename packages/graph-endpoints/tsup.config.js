const pkg = require('./package.json');


/** @type {import('tsup').Options} */
module.exports = {
  ...require('@microsoft/teams.config/tsup.config'),
  minify: true,
  bundle: false, // Keep bundle false to preserve directory structure
  sourcemap: false,
  target: 'node18',
  splitting: true,
  treeshake: true,
  dts: false, // .d.ts file generation is done with tsc --emitDeclarationOnly
  entry: ['src/**/*.ts', '!src/**/*.test.ts', '!src/**/*.d.ts'],
  preserveModules: true,
  preserveModulesRoot: 'src',
  format: ['esm', 'cjs'],
  outDir: 'dist',
  define: {
    __VERSION__: JSON.stringify(pkg.version)
  },

};
