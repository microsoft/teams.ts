/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    // `jose` (reached via `jwks-rsa`) publishes ESM only, with no CommonJS build.
    // Jest's default runtime is CommonJS and cannot `require()` it, so the files
    // un-ignored below are down-levelled to CommonJS here.
    '^.+\\.m?js$': [
      'ts-jest',
      { tsconfig: { allowJs: true, module: 'CommonJS', target: 'ES2022' }, isolatedModules: true },
    ],
  },
  // Jest skips node_modules when transforming. Un-ignore ESM-only dependencies so the
  // transform above can reach them. The negative lookahead is relative to whichever
  // `/node_modules/` segment matched, so it covers hoisted and nested copies alike.
  // Add a package here only when it ships ESM without a `require` export condition.
  transformIgnorePatterns: ['/node_modules/(?!jose/)'],
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
