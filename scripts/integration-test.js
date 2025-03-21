const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Create a temporary directory for testing
const tempDir = path.join(os.tmpdir(), 'spark-integration-test-' + Date.now());
console.log(`Creating test directory at: ${tempDir}`);
fs.mkdirSync(tempDir, { recursive: true });
process.chdir(tempDir);

try {
  // Step 1: Use the local CLI to create a new app
  console.log('Creating new app with local CLI...');
  const cliPath = path.resolve(process.env.GITHUB_WORKSPACE || '.', 'packages/cli/dist/index.js');
  execSync(`node ${cliPath} new my-test-app --template echo`, { stdio: 'inherit' });

  // Change to the newly created app directory
  process.chdir(path.join(tempDir, 'my-test-app'));

  // Step 2: Replace remote dependencies with local ones
  console.log('Updating dependencies to use local packages...');
  const rootDir = process.env.GITHUB_WORKSPACE || path.resolve('../../');
  const packagesDir = path.join(rootDir, 'packages');

  // Read package.json
  const packageJsonPath = path.join(tempDir, 'my-test-app', 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  // Get all available local packages
  const localPackages = fs
    .readdirSync(packagesDir)
    .filter((dir) => fs.statSync(path.join(packagesDir, dir)).isDirectory())
    .filter((dir) => fs.existsSync(path.join(packagesDir, dir, 'package.json')))
    .map((dir) => {
      const pkg = JSON.parse(fs.readFileSync(path.join(packagesDir, dir, 'package.json'), 'utf8'));
      return { name: pkg.name, path: path.join(packagesDir, dir) };
    });

  // Update dependencies
  ['dependencies', 'devDependencies'].forEach((depType) => {
    if (!packageJson[depType]) return;

    Object.keys(packageJson[depType]).forEach((dep) => {
      if (dep.startsWith('@microsoft/spark.')) {
        const localPkg = localPackages.find((p) => p.name === dep);
        if (localPkg) {
          console.log(`Replacing ${dep} with local version at ${localPkg.path}`);
          packageJson[depType][dep] = `file:${localPkg.path}`;
        }
      }
    });
  });

  // Write updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Step 3: Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Step 4: Start the dev server (just to verify it can start)
  console.log('Starting dev server...');

  // Use a shorter timeout for CI environments
  const startProcess = execSync('npm run dev -- --no-open', {
    timeout: 30000, // 30 seconds timeout
    stdio: 'inherit',
  });

  console.log('Integration test passed!');
  process.exit(0);
} catch (error) {
  console.error('Integration test failed:', error);
  process.exit(1);
} finally {
  // Clean up (optional, could keep for debugging in CI)
  // fs.rmSync(tempDir, { recursive: true, force: true });
}
