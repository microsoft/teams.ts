const fs = require('node:fs');
const path = require('node:path');

function rewriteRelativeMjsSpecifier(specifier, sourceFilePath) {
  // Skip if specifier already has a file extension (.js, .mjs, .json, etc.)
  if (path.posix.extname(specifier)) {
    return specifier;
  }

  const sourceDir = path.dirname(sourceFilePath);
  const resolvedBase = path.resolve(sourceDir, specifier);
  const resolvedFile = `${resolvedBase}.mjs`;
  const resolvedIndex = path.join(resolvedBase, 'index.mjs');

  if (fs.existsSync(resolvedFile)) {
    return `${specifier}.mjs`;
  }

  if (fs.existsSync(resolvedIndex)) {
    const cleanSpecifier = specifier.endsWith('/')
      ? specifier.slice(0, -1)
      : specifier;
    return `${cleanSpecifier}/index.mjs`;
  }

  return specifier;
}

function rewriteMjsSpecifiers(content, sourceFilePath) {
  const rewrite = (_, prefix, specifier, suffix) => {
    return `${prefix}${rewriteRelativeMjsSpecifier(specifier, sourceFilePath)}${suffix}`;
  };

  return content
    .replace(/(from\s+['"])(\.{1,2}\/[^'"\n]+)(['"])/g, rewrite)
    .replace(/(import\s+['"])(\.{1,2}\/[^'"\n]+)(['"])/g, rewrite)
    .replace(/(import\(\s*['"])(\.{1,2}\/[^'"\n]+)(['"]\s*\))/g, rewrite);
}

function rewriteMjsImportsInDist(distDir) {
  if (!fs.existsSync(distDir)) {
    return;
  }

  const visit = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        visit(fullPath);
        continue;
      }

      if (!entry.isFile() || !entry.name.endsWith('.mjs')) {
        continue;
      }

      const source = fs.readFileSync(fullPath, 'utf8');
      const rewritten = rewriteMjsSpecifiers(source, fullPath);
      if (rewritten !== source) {
        fs.writeFileSync(fullPath, rewritten, 'utf8');
      }
    }
  };

  visit(distDir);
}

module.exports = {
  rewriteMjsImportsInDist,
};
