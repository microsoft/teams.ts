// This script rewrites extensionless relative imports in .mjs files to include .mjs

const fs = require("fs");
const path = require("path");

// Get the directory where this script is being run from (should be the package directory)
const distFolder = process.argv[2] || path.join(process.cwd(), "dist");

function fixEsmImportPaths(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  // Regex to match extensionless relative imports (with minified code support)
  content = content.replace(
    /(import\*?\s*\*?\s*as\s+[\w$]+\s*from\s*['"])(\.\/[\w\-\/]+)(['"])/g,
    (match, p1, p2, p3) => {
      if (/\.[mc]?[jt]s$/.test(p2)) return match;
      const absImportPath = path.resolve(path.dirname(filePath), p2);
      if (fs.existsSync(absImportPath + ".mjs")) {
        return `${p1}${p2}.mjs${p3}`;
      } else if (fs.existsSync(path.join(absImportPath, "index.mjs"))) {
        return `${p1}${p2}/index.mjs${p3}`;
      } else {
        return match;
      }
    },
  );
  // Regex to match extensionless dynamic imports (simple ones like import('./foo'))
  content = content.replace(
    /(import\(['"])(\.\/[\w\-\/]+)(['"]\))/g,
    (match, p1, p2, p3) => {
      if (/\.[mc]?[jt]s$/.test(p2)) return match;
      const absImportPath = path.resolve(path.dirname(filePath), p2);
      if (fs.existsSync(absImportPath + ".mjs")) {
        return `${p1}${p2}.mjs${p3}`;
      } else if (fs.existsSync(path.join(absImportPath, "index.mjs"))) {
        return `${p1}${p2}/index.mjs${p3}`;
      } else {
        return match;
      }
    },
  );
  fs.writeFileSync(filePath, content, "utf8");
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && fullPath.endsWith(".mjs")) {
      fixEsmImportPaths(fullPath);
    }
  }
}

module.exports = { walk };

// Run if called directly
if (require.main === module) {
  if (!fs.existsSync(distFolder)) {
    console.error(`❌ Error: Directory ${distFolder} does not exist`);
  } else {
    console.log("Updating ESM imports...");
    walk(distFolder);
    console.log(
      "✅ ESM imports in .mjs files have been fixed to include .mjs extensions.",
    );
  }
}
