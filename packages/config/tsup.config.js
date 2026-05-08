const path = require("node:path");
const { rewriteMjsImportsInDist } = require("./rewrite-esm-imports");

const OUT_DIR = "dist";

/** @type {import('tsup').Options} */
module.exports = {
  dts: true,
  minify: false,
  bundle: false,
  sourcemap: true,
  treeshake: true,
  splitting: true,
  clean: true,
  outDir: OUT_DIR,
  entry: ["src/**/*.ts", "!src/**/*.spec.ts"],
  format: ["cjs", "esm"],
  async onSuccess() {
    rewriteMjsImportsInDist(path.join(process.cwd(), OUT_DIR));
  },
};
