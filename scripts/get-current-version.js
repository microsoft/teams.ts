#!/usr/bin/env node

const { execSync } = require('child_process');

try {
  // Get the latest v* tag (e.g., v2.0.5)
  const tag = execSync('git tag --list "v*" --sort=-v:refname | head -1', { encoding: 'utf8' }).trim();
  if (!tag) {
    throw new Error('No tags found');
  }
  const version = tag.replace(/^v/, '');
  console.log(version);
} catch (error) {
  console.error('No version tags found');
  process.exit(1);
}
