// validate-snippets.js
const { execSync } = require('child_process');

try {
  console.log('Running bluehawk snippet validation...');
  execSync('bluehawk check . --ignore packages/graph --ignore "!**/*.ts"', {
    stdio: 'inherit',
    shell: true, // required for cross-platform compatibility
  });
  console.log('✅ Bluehawk check succeeded.');
  process.exit(0);
} catch (error) {
  console.error('❌ Bluehawk check failed.');
  process.exit(1);
}
