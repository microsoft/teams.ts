#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const version = process.argv[2];

if (!version) {
  console.error('Usage: node scripts/version.js <version>');
  console.error('Example: node scripts/version.js 2.0.6');
  process.exit(1);
}

if (!/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(version)) {
  console.error(`Invalid version format: ${version}`);
  console.error('Expected format: X.Y.Z or X.Y.Z-prerelease');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');

const files = [
  path.join(rootDir, 'package.json'),
  ...glob.sync(path.join(rootDir, 'packages/*/package.json')),
  ...glob.sync(path.join(rootDir, 'external/*/package.json'))
];

console.log(`Setting version to ${version}...\n`);

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const pkg = JSON.parse(content);
  const relativePath = path.relative(rootDir, file);

  // Update version for @microsoft/teams.* packages
  if (pkg.name && pkg.name.startsWith('@microsoft/teams')) {
    pkg.version = version;
  }

  // Update internal dependencies
  ['dependencies', 'devDependencies', 'peerDependencies'].forEach(depType => {
    if (pkg[depType]) {
      Object.keys(pkg[depType]).forEach(dep => {
        if (dep.startsWith('@microsoft/teams.')) {
          pkg[depType][dep] = version;
        }
      });
    }
  });

  fs.writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`  ${relativePath}`);
});

console.log(`\nDone. Updated ${files.length} files to version ${version}`);
