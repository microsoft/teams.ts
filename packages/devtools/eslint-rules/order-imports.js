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
        // Get the filename to determine if it's a test file
        const filename = context.getFilename();
        const isTestFile = /\.(?:spec|test)\.[jt]sx?$/.test(filename);

        // Skip the rule for test files
        if (isTestFile) {
          return;
        }

        const sourceCode = context.getSourceCode();
        const imports = node.body.filter((node) => node.type === 'ImportDeclaration');

        // If there are no imports, don't try to fix anything
        if (imports.length === 0) {
          return;
        }

        // Get all comments before the first import
        const firstImport = imports[0];
        const commentsBeforeImports = sourceCode.getCommentsBefore(firstImport);
        const leadingComments = commentsBeforeImports.map((c) => sourceCode.getText(c)).join('\n');

        // Get all comments after the last import
        const lastImport = imports[imports.length - 1];
        const nextNode = node.body.find(
          (n) => n.type !== 'ImportDeclaration' && lastImport.range[1] < n.range[0]
        );

        // Get trailing comments
        let trailingComments = '';
        const allComments = sourceCode.getAllComments();
        const commentsAfterImports = allComments.filter((comment) => {
          const commentStart = comment.range[0];
          return (
            commentStart > lastImport.range[1] &&
            (!nextNode || commentStart < nextNode.range[0]) &&
            // Make sure the comment is actually between imports and next node
            sourceCode.text.slice(lastImport.range[1], commentStart).trim() === ''
          );
        });
        trailingComments = commentsAfterImports.map((c) => sourceCode.getText(c)).join('\n');

        const importGroups = {
          react: [],
          external: [],
          internal: [],
          local: [],
        };

        // Categorize imports
        imports.forEach((imp) => {
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

        // Helper function to get comments associated with a node
        const getNodeComments = (node) => {
          const comments = [];
          const tokens = sourceCode.getTokens(node, { includeComments: true });

          for (const token of tokens) {
            if (token.type === 'Line' || token.type === 'Block') {
              comments.push(token);
            }
          }

          return comments;
        };

        // Build the desired import text with proper spacing and comments
        const importParts = [];

        // Add leading comments if they exist
        if (leadingComments) {
          importParts.push(leadingComments);
          importParts.push('');
        }

        // Add React imports and external imports together with their comments
        const topImports = [...importGroups.react, ...importGroups.external];
        if (topImports.length) {
          const importTexts = topImports.map((imp) => {
            const comments = getNodeComments(imp);
            const commentText = comments.map((c) => sourceCode.getText(c)).join('\n');
            return commentText
              ? `${commentText}\n${sourceCode.getText(imp)}`
              : sourceCode.getText(imp);
          });
          importParts.push(importTexts.join('\n'));
        }

        // Add internal imports with their comments
        if (importGroups.internal.length) {
          if (topImports.length > 0) importParts.push('');
          const importTexts = importGroups.internal.map((imp) => {
            const comments = getNodeComments(imp);
            const commentText = comments.map((c) => sourceCode.getText(c)).join('\n');
            return commentText
              ? `${commentText}\n${sourceCode.getText(imp)}`
              : sourceCode.getText(imp);
          });
          importParts.push(importTexts.join('\n'));
        }

        // Add local imports with their comments
        if (importGroups.local.length) {
          if (topImports.length > 0 || importGroups.internal.length > 0) importParts.push('');
          const importTexts = importGroups.local.map((imp) => {
            const comments = getNodeComments(imp);
            const commentText = comments.map((c) => sourceCode.getText(c)).join('\n');
            return commentText
              ? `${commentText}\n${sourceCode.getText(imp)}`
              : sourceCode.getText(imp);
          });
          importParts.push(importTexts.join('\n'));
        }

        // Add trailing comments if they exist
        if (trailingComments) {
          importParts.push('');
          importParts.push(trailingComments);
        }

        const desiredImportText = importParts.join('\n');

        // Get the current import text including whitespace after imports
        let currentImportText = '';
        const importEnd = lastImport.range[1];

        if (nextNode) {
          const nextStart = nextNode.range[0];
          currentImportText = sourceCode.text.slice(firstImport.range[0], nextStart);
          const suffix = trailingComments ? '\n' : '\n\n';
          const expectedText = desiredImportText + suffix;

          // Only fix if the current text is different from what we want
          if (currentImportText.trim() !== expectedText.trim()) {
            context.report({
              node: firstImport,
              message: 'Import order needs to be fixed.',
              fix(fixer) {
                return fixer.replaceTextRange([firstImport.range[0], nextStart], expectedText);
              },
            });
          }
        } else {
          currentImportText = sourceCode.text.slice(firstImport.range[0], importEnd);
          if (currentImportText.trim() !== desiredImportText.trim()) {
            context.report({
              node: firstImport,
              message: 'Import order needs to be fixed.',
              fix(fixer) {
                return fixer.replaceTextRange([firstImport.range[0], importEnd], desiredImportText);
              },
            });
          }
        }
      },
    };
  },
};

module.exports = orderImports;
