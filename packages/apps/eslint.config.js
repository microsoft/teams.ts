module.exports = [
  ...require('@microsoft/teams.config/eslint.config').default,
  {
    files: ['src/**/*.test-harness.ts'],
    languageOptions: {
      parserOptions: {
        projectService: false
      }
    }
  }
];
