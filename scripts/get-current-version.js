#!/usr/bin/env node

const { execSync } = require('child_process');

try {
  // Get all v* tags sorted by version (descending)
  const output = execSync('git tag --list v* --sort=-v:refname', { encoding: 'utf8' });
  const tags = output.trim().split('\n').filter(Boolean);

  if (tags.length === 0) {
    throw new Error('No tags found');
  }

  const version = tags[0].replace(/^v/, '');
  console.log(version);
} catch (error) {
  console.error('No version tags found');
  process.exit(1);
}
