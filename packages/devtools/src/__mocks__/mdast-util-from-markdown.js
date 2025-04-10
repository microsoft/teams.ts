// Mock for mdast-util-from-markdown
const mockFromMarkdown = jest.fn(() => ({
  children: [
    {
      type: 'paragraph',
      children: [{ type: 'text', value: 'Mock text node' }],
    },
  ],
}));

module.exports = {
  fromMarkdown: mockFromMarkdown,
};
