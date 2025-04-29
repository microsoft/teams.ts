const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettierPluginRecommended = require('eslint-plugin-prettier/recommended');
const importPlugin = require('eslint-plugin-import');

/** @type {import("eslint").Linter.Config} */
module.exports = (async () => {
  const stylistic = await import('@stylistic/eslint-plugin');

  return tseslint.config(
    {
      ignores: [
        '**/dist/**',
        '**/coverage/**',
        '**/node_modules/**',
        '**/coverage/**'
      ]
    },
    {
      extends: [
        eslint.configs.recommended,
        prettierPluginRecommended,
        importPlugin.flatConfigs.recommended,
        ...tseslint.configs.recommended
      ],
      plugins: {
        '@stylistic': stylistic.default
      },
      ignores: [
        '**/dist/**',
        '**/coverage/**',
        '**/node_modules/**',
        '**/coverage/**'
      ],
      files: ['src/**/*.ts'],
      rules: {
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],

        // imports
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/order': [
          'error',
          {
            'newlines-between': 'always-and-inside-groups',
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
            'pathGroups': [
              {
                'pattern': '@microsoft/**',
                'group': 'external',
                'position': 'after'
              }
            ],
            'alphabetize': {
              'order': 'asc',
              'caseInsensitive': true
            },
            'pathGroupsExcludedImportTypes': []
          }
        ],

        // typescript
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-duplicate-enum-values': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/member-ordering': [
          'error',
          {
            'default': {
              'memberTypes': [
                // Fields
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                '#private-static-field',

                'public-decorated-field',
                'protected-decorated-field',
                'private-decorated-field',

                'public-instance-field',
                'protected-instance-field',
                'private-instance-field',
                '#private-instance-field',

                'public-abstract-field',
                'protected-abstract-field',

                'public-field',
                'protected-field',
                'private-field',
                '#private-field',

                'static-field',
                'instance-field',
                'abstract-field',

                'decorated-field',

                'field',

                // Static initialization
                'static-initialization',

                // Constructors
                'public-constructor',
                'protected-constructor',
                'private-constructor',

                'constructor',

                // Methods
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                '#private-static-method',

                'public-decorated-method',
                'protected-decorated-method',
                'private-decorated-method',

                'public-instance-method',
                'protected-instance-method',
                'private-instance-method',
                '#private-instance-method',

                'public-abstract-method',
                'protected-abstract-method',

                'public-method',
                'protected-method',
                'private-method',
                '#private-method',

                'static-method',
                'instance-method',
                'abstract-method',

                'decorated-method'
              ],
            }
          }
        ],
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

        // stylistic
        '@stylistic/space-before-blocks': 'error',
        '@stylistic/block-spacing': 'error',
        '@stylistic/keyword-spacing': 'error'
      },
    }
  );
})();
