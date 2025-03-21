const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');

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

  // Step 4: Start the dev server and verify it's running
  console.log('Starting dev server...');

  // Start the server in a separate process so we can listen to its output
  const devProcess = spawn('npm', ['run', 'dev', '--', '--no-open'], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let serverStarted = false;
  let timeout = setTimeout(() => {
    if (!serverStarted) {
      console.error('Timeout waiting for server to start');
      devProcess.kill();
      process.exit(1);
    }
  }, 60000); // 60 second timeout

  devProcess.stdout.on('data', (data) => {
    const output = data.toString();
    console.log('Server output:', output);

    // Check if the server is listening on port 3000
    if (
      output.includes('listening on port 3000') ||
      output.includes('Server running at http://localhost:3000')
    ) {
      serverStarted = true;
      clearTimeout(timeout);

      console.log('Server is running on port 3000, sending a test message...');

      // Wait a moment for the server to fully initialize
      setTimeout(() => {
        // Send a test message to the API endpoint
        const testMessage = JSON.stringify({
          type: 'message',
          text: 'Test message from integration test',
          channelId: 'msteams',
          from: {
            id: 'integration-test',
            name: 'Integration Test',
            role: 'user',
          },
          conversation: {
            id: 'test-conversation',
            conversationType: 'personal',
            isGroup: false,
            name: 'test',
          },
        });

        // Make the HTTP request
        const req = http.request(
          {
            hostname: 'localhost',
            port: 3000,
            path: '/api/messages',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(testMessage),
              'X-Teams-DevTools': 'true',
            },
          },
          (res) => {
            console.log(`API response status: ${res.statusCode}`);
            let responseData = '';

            res.on('data', (chunk) => {
              responseData += chunk;
            });

            res.on('end', () => {
              if (res.statusCode >= 200 && res.statusCode < 300) {
                console.log('Test message sent successfully:', responseData);
                console.log('Integration test passed!');
              } else {
                console.error('Failed to send test message:', responseData);
                console.error('Integration test failed!');
              }

              // Clean up and exit
              devProcess.kill();
              process.exit(res.statusCode >= 200 && res.statusCode < 300 ? 0 : 1);
            });
          }
        );

        req.on('error', (e) => {
          console.error('Error sending test message:', e.message);
          devProcess.kill();
          process.exit(1);
        });

        req.write(testMessage);
        req.end();
      }, 5000); // Wait 5 seconds before sending the request
    }
  });

  devProcess.stderr.on('data', (data) => {
    console.error('Server error:', data.toString());
  });

  devProcess.on('close', (code) => {
    if (!serverStarted) {
      console.error(`Server process exited with code ${code} before starting`);
      process.exit(1);
    }
  });
} catch (error) {
  console.error('Integration test failed:', error);
  process.exit(1);
} finally {
  // Clean up (optional, could keep for debugging in CI)
  // fs.rmSync(tempDir, { recursive: true, force: true });
}
