const tseslint = require('typescript-eslint');
const baseConfig = require('@microsoft/teams.config/eslint.config').default;

module.exports = tseslint.config(
  {
    ignores: ['src/common/schema.ts'],
  },
  ...baseConfig
);
