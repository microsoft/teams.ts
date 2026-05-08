const path = require('node:path');
const { rewriteMjsImportsInDist } = require('./rewrite-esm-imports');

/** @type {import('tsup').Options} */
module.exports = {
  dts: true,
  minify: false,
  bundle: false,
  sourcemap: true,
  treeshake: true,
  splitting: true,
  clean: true,
  outDir: 'dist',
  entry: ['src/**/*.ts', '!src/**/*.spec.ts'],
  format: ['cjs', 'esm'],
  async onSuccess() {
    rewriteMjsImportsInDist(path.join(process.cwd(), 'dist'));
  },
};
