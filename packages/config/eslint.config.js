const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

/** @type {import("eslint").Linter.Config} */
module.exports = tseslint.config({
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  ignores: ['dist/**/*'],
  files: ['src/**/*.ts'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
  },
});
