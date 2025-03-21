const orderImports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce devtools import ordering convention',
      category: 'Stylistic Issues',
      recommended: true,
    },
    fixable: 'code',
  },
  create(context) {
    return {
      Program(node) {
        const sourceCode = context.getSourceCode();
        const imports = node.body.filter(node => node.type === 'ImportDeclaration');

        if (imports.length === 0) return;

        const importGroups = {
          react: [],
          external: [],
          internal: [],
          local: [],
        };

        // Categorize imports
        imports.forEach(imp => {
          const source = imp.source.value;
          if (source === 'react') {
            importGroups.react.push(imp);
          } else if (source.startsWith('@') || !source.startsWith('.')) {
            importGroups.external.push(imp);
          } else if (source.startsWith('../')) {
            importGroups.internal.push(imp);
          } else {
            importGroups.local.push(imp);
          }
        });

        // Sort each group
        importGroups.external.sort((a, b) => a.source.value.localeCompare(b.source.value));

        // Helper function to get path depth
        const getPathDepth = (path) => {
          const parts = path.split('/');
          return parts.length - 1;
        };

        // Helper function to get import category weight
        const getCategoryWeight = (path) => {
          if (path.includes('/screens/')) return 0;
          if (path.includes('/components/')) return 1;
          if (path.includes('/hooks/')) return 2;
          if (path.includes('/stores/')) return 3;
          if (path.includes('/types/')) return 4;
          if (path.includes('/utils/')) return 5;
          if (path.endsWith('.styles')) return 6;
          return 7;
        };

        // Sort internal imports by depth, category, and then alphabetically
        const sortByDepthCategoryAndName = (a, b) => {
          const depthA = getPathDepth(a.source.value);
          const depthB = getPathDepth(b.source.value);

          if (depthA !== depthB) return depthB - depthA;

          const categoryA = getCategoryWeight(a.source.value);
          const categoryB = getCategoryWeight(b.source.value);

          if (categoryA !== categoryB) return categoryA - categoryB;

          return a.source.value.localeCompare(b.source.value);
        };

        importGroups.internal.sort(sortByDepthCategoryAndName);
        importGroups.local.sort(sortByDepthCategoryAndName);

        // Build the desired import text with proper spacing
        const importParts = [];

        // Add React imports and external imports together
        const topImports = [...importGroups.react, ...importGroups.external];
        if (topImports.length) {
          importParts.push(topImports.map(imp => sourceCode.getText(imp)).join('\n'));
        }

        // Add internal imports
        if (importGroups.internal.length) {
          if (importParts.length > 0) importParts.push('');
          importParts.push(importGroups.internal.map(imp => sourceCode.getText(imp)).join('\n'));
        }

        // Add local imports
        if (importGroups.local.length) {
          if (importParts.length > 0) importParts.push('');
          importParts.push(importGroups.local.map(imp => sourceCode.getText(imp)).join('\n'));
        }

        const desiredImportText = importParts.join('\n');

        // Find the next non-import statement
        const nextNode = node.body.find(n =>
          n.type !== 'ImportDeclaration' &&
          imports[imports.length - 1].range[1] < n.range[0]
        );

        // Get the current import text including whitespace after imports
        let currentImportText = '';
        const firstImport = imports[0];
        const lastImport = imports[imports.length - 1];
        const importEnd = lastImport.range[1];

        if (nextNode) {
          const nextStart = nextNode.range[0];
          currentImportText = sourceCode.text.slice(firstImport.range[0], nextStart);

          // Count newlines between imports and next node
          const textAfterImports = sourceCode.text.slice(importEnd, nextStart);
          const newlineCount = (textAfterImports.match(/\n/g) || []).length;

          if (newlineCount > 2 || currentImportText !== desiredImportText + '\n\n') {
            context.report({
              node: firstImport,
              message: 'Incorrect import order or formatting.',
              fix(fixer) {
                // Remove everything from first import to next node
                const removeRange = [firstImport.range[0], nextStart];
                const fix = fixer.replaceTextRange(removeRange, desiredImportText + '\n\n');
                return fix;
              },
            });
          }
        } else {
          currentImportText = sourceCode.text.slice(firstImport.range[0], importEnd);
          if (currentImportText !== desiredImportText) {
            context.report({
              node: firstImport,
              message: 'Incorrect import order or formatting.',
              fix(fixer) {
                // Remove and replace all imports
                const removeRange = [firstImport.range[0], lastImport.range[1]];
                const fix = fixer.replaceTextRange(removeRange, desiredImportText);
                return fix;
              },
            });
          }
        }
      },
    };
  },
};

module.exports = orderImports;
