#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const lockfilePath = path.resolve(__dirname, '..', 'package-lock.json');
const lockfile = JSON.parse(fs.readFileSync(lockfilePath, 'utf8'));
const unexpectedUrls = [];

for (const [packagePath, packageInfo] of Object.entries(lockfile.packages ?? {})) {
  const resolved = packageInfo.resolved;
  if (!resolved || !resolved.startsWith('http')) {
    continue;
  }

  if (new URL(resolved).hostname !== 'registry.npmjs.org') {
    unexpectedUrls.push(`${packagePath || '<root>'}: ${resolved}`);
  }
}

if (unexpectedUrls.length > 0) {
  console.error('package-lock.json contains dependencies resolved from unexpected registries:');
  for (const entry of unexpectedUrls) {
    console.error(`  ${entry}`);
  }
  process.exit(1);
}

console.log('package-lock.json uses only the public npm registry.');
