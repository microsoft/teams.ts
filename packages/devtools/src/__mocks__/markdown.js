// Mock for markdown utility
const markdown = jest.createMockFromModule('../utils/markdown');

// Default mock implementation
markdown.hasMarkdownContent = jest.fn((content) => {
  // Basic implementation that considers text having markdown if it contains
  // common markdown characters
  const markdownPatterns = [
    /\*\*.+\*\*/, // Bold
    /\*.+\*/, // Italic
    /\[.+\]\(.+\)/, // Links
    /`[^`]+`/, // Code
    /^#{1,6}\s/m, // Headers
    /^-\s.+/m, // Lists
    /^>\s.+/m, // Blockquotes
  ];

  return markdownPatterns.some((pattern) => pattern.test(content));
});

// Helper to configure the return value
markdown.__setMarkdownDetection = (returnValue) => {
  markdown.hasMarkdownContent.mockReturnValue(returnValue);
};

module.exports = markdown;
