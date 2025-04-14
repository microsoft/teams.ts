import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'fs';
import { join, resolve } from 'path';
import { findManagedSections, updateManagedSectionContent } from './managedSections';

function getAllMdcFiles(dir: string): string[] {
  const files: string[] = [];

  for (const file of readdirSync(dir)) {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      files.push(...getAllMdcFiles(fullPath));
    } else if (file.endsWith('.mdc')) {
      files.push(fullPath);
    }
  }

  return files;
}

function updateManagedSection(filePath: string, sectionId: string, newContent: string): void {
  const content = readFileSync(filePath, 'utf-8');
  const updatedContent = updateManagedSectionContent(content, sectionId, newContent);
  writeFileSync(filePath, updatedContent);
}

function copyRules(): void {
  try {
    // Get the rules source directory (relative to this script)
    const rulesDir = resolve(__dirname, 'rules');

    // Create .cursor/rules directory in user's workspace
    const cursorRulesDir = join(process.cwd(), '.cursor', 'rules');
    if (!existsSync(cursorRulesDir)) {
      mkdirSync(cursorRulesDir, { recursive: true });
    }

    // Find and copy all .mdc files recursively
    const mdcFiles = getAllMdcFiles(rulesDir);
    for (const src of mdcFiles) {
      // Get the relative path from rulesDir to preserve directory structure
      const relativePath = src.slice(rulesDir.length + 1);
      const dest = join(cursorRulesDir, relativePath);

      // Create parent directory if it doesn't exist
      const destDir = dest.slice(0, dest.lastIndexOf('/'));
      if (!existsSync(destDir)) {
        mkdirSync(destDir, { recursive: true });
      }

      // If destination file exists, preserve managed sections
      if (existsSync(dest)) {
        const srcContent = readFileSync(src, 'utf-8');
        const sections = findManagedSections(srcContent);

        // First copy the file to preserve any non-managed content
        copyFileSync(src, dest);

        // Then update any managed sections that existed in the source
        for (const section of sections) {
          updateManagedSection(dest, section.id, section.content);
        }

        console.log(`Updated ${relativePath} in .cursor/rules/ preserving managed sections`);
      } else {
        copyFileSync(src, dest);
        console.log(`Copied ${relativePath} to .cursor/rules/`);
      }
    }

    console.log('Successfully installed Spark cursor rules');
  } catch (err) {
    console.error('Failed to install Spark cursor rules:', err);
    process.exit(1);
  }
}

copyRules();
