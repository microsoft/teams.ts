const js = require('@eslint/js');
const globals = require('globals');
const reactHooks = require('eslint-plugin-react-hooks');
// eslint-plugin-react-refresh v0.5 is ESM-only, so `require()` yields the module namespace and the plugin lives on the `default` export.
const reactRefresh = require('eslint-plugin-react-refresh').default;
const tseslint = require('typescript-eslint');
const orderImports = require('./eslint-rules/order-imports');

module.exports = tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'order-imports': { rules: { 'order-imports': orderImports } },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Keep newly introduced diagnostics advisory during the plugin migration.
      'react-hooks/preserve-manual-memoization': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'off',
      'order-imports/order-imports': 'error',
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname
      }
    }
  }
);
