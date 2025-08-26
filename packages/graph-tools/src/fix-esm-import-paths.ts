// This script rewrites extensionless relative imports in .mjs files to include .mjs

import fs from 'fs';
import path from 'path';

function fixEsmImportPaths(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Regex to match extensionless relative imports (with minified code support)
  content = content.replace(
    /(import\*?\s*\*?\s*as\s+[\w$]+\s*from\s*['"])(\.\/[\w\-/]+)(['"])/g,
    (match, p1, p2, p3) => {
      if (/\.[mc]?[jt]s$/.test(p2)) return match;
      const absImportPath = path.resolve(path.dirname(filePath), p2);
      if (fs.existsSync(absImportPath + '.mjs')) {
        return `${p1}${p2}.mjs${p3}`;
      } else if (fs.existsSync(path.join(absImportPath, 'index.mjs'))) {
        return `${p1}${p2}/index.mjs${p3}`;
      } else {
        return match;
      }
    }
  );
  // Regex to match extensionless dynamic imports (simple ones like import('./foo'))
  content = content.replace(
    /(import\(['"])(\.\/[\w\-/]+)(['"]\))/g,
    (match, p1, p2, p3) => {
      if (/\.[mc]?[jt]s$/.test(p2)) return match;
      const absImportPath = path.resolve(path.dirname(filePath), p2);
      if (fs.existsSync(absImportPath + '.mjs')) {
        return `${p1}${p2}.mjs${p3}`;
      } else if (fs.existsSync(path.join(absImportPath, 'index.mjs'))) {
        return `${p1}${p2}/index.mjs${p3}`;
      } else {
        return match;
      }
    }
  );
  fs.writeFileSync(filePath, content, 'utf8');
}

export function walk(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && fullPath.endsWith('.mjs')) {
      fixEsmImportPaths(fullPath);
    }
  }
}

// CLI interface
export function fixEsmImports(distFolder?: string) {
  const targetFolder = distFolder || path.join(process.cwd(), 'dist');
  
  if (!fs.existsSync(targetFolder)) {
    console.error(`❌ Error: Directory ${targetFolder} does not exist`);
    return;
  }
  
  console.log('Updating ESM imports...');
  walk(targetFolder);
  console.log('✅ ESM imports in .mjs files have been fixed to include .mjs extensions.');
}

// CLI entry point - run when this file is executed directly
if (require.main === module) {
  const targetFolder = process.argv[2] || path.join(process.cwd(), 'dist');
  fixEsmImports(targetFolder);
}
