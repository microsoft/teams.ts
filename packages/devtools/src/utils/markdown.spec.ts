// Set up mocks for ESM dependencies
const mockFromMarkdown = jest.fn();
const mockGfmFromMarkdown = jest.fn();
const mockGfm = jest.fn(() => ({}));

jest.mock(
  'mdast-util-from-markdown',
  () => ({
    fromMarkdown: mockFromMarkdown,
  }),
  { virtual: true }
);

jest.mock(
  'mdast-util-gfm',
  () => ({
    gfmFromMarkdown: mockGfmFromMarkdown,
  }),
  { virtual: true }
);

jest.mock(
  'micromark-extension-gfm',
  () => ({
    gfm: mockGfm,
  }),
  { virtual: true }
);

// Import the module under test
import { hasMarkdownContent } from './markdown';

/**
 * These tests verify that the hasMarkdownContent utility correctly identifies
 * text with markdown syntax versus plain text content
 */
describe('markdown utilities', () => {
  // Set up our mocks to simulate different markdown detection scenarios
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // Default mock for plain text (no markdown)
    mockFromMarkdown.mockImplementation(() => ({
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'text', value: 'Plain text content' }],
        },
      ],
    }));
  });

  describe('hasMarkdownContent', () => {
    it('returns false for plain text', () => {
      mockFromMarkdown.mockImplementation(() => ({
        children: [
          {
            type: 'paragraph',
            children: [{ type: 'text', value: 'This is just plain text without any markdown.' }],
          },
        ],
      }));

      const plainText = 'This is just plain text without any markdown.';
      expect(hasMarkdownContent(plainText)).toBe(false);
    });

    it('returns true for text with bold markdown', () => {
      mockFromMarkdown.mockImplementation(() => ({
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', value: 'This contains ' },
              { type: 'strong', children: [{ type: 'text', value: 'bold' }] },
              { type: 'text', value: ' text' },
            ],
          },
        ],
      }));

      const boldText = 'This contains **bold** text';
      expect(hasMarkdownContent(boldText)).toBe(true);
    });

    it('returns true for text with italic markdown', () => {
      mockFromMarkdown.mockImplementation(() => ({
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', value: 'This contains ' },
              { type: 'emphasis', children: [{ type: 'text', value: 'italic' }] },
              { type: 'text', value: ' text' },
            ],
          },
        ],
      }));

      const italicText = 'This contains *italic* text';
      expect(hasMarkdownContent(italicText)).toBe(true);
    });

    it('returns true for text with links', () => {
      mockFromMarkdown.mockImplementation(() => ({
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', value: 'This contains a ' },
              {
                type: 'link',
                url: 'https://example.com',
                children: [{ type: 'text', value: 'link' }],
              },
            ],
          },
        ],
      }));

      const linkText = 'This contains a [link](https://example.com)';
      expect(hasMarkdownContent(linkText)).toBe(true);
    });

    it('returns true for text with code blocks', () => {
      mockFromMarkdown.mockImplementation(() => ({
        children: [
          {
            type: 'paragraph',
            children: [
              { type: 'text', value: 'This contains ' },
              { type: 'inlineCode', value: 'code' },
              { type: 'text', value: ' block' },
            ],
          },
        ],
      }));

      const codeText = 'This contains `code` block';
      expect(hasMarkdownContent(codeText)).toBe(true);
    });

    it('returns true for text with headers', () => {
      mockFromMarkdown.mockImplementation(() => ({
        children: [
          {
            type: 'heading',
            depth: 1,
            children: [{ type: 'text', value: 'This is a header' }],
          },
        ],
      }));

      const headerText = '# This is a header';
      expect(hasMarkdownContent(headerText)).toBe(true);
    });

    it('returns true for text with lists', () => {
      mockFromMarkdown.mockImplementation(() => ({
        children: [
          {
            type: 'list',
            children: [
              {
                type: 'listItem',
                children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Item 1' }] }],
              },
              {
                type: 'listItem',
                children: [{ type: 'paragraph', children: [{ type: 'text', value: 'Item 2' }] }],
              },
            ],
          },
        ],
      }));

      const listText = '- Item 1\n- Item 2';
      expect(hasMarkdownContent(listText)).toBe(true);
    });

    it('handles empty strings without errors', () => {
      mockFromMarkdown.mockImplementation(() => ({
        children: [],
      }));

      expect(hasMarkdownContent('')).toBe(false);
    });
  });
});
