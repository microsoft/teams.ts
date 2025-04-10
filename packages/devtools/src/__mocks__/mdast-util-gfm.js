// Mock for mdast-util-gfm
const mockGfmFromMarkdown = jest.fn();

module.exports = {
  gfmFromMarkdown: mockGfmFromMarkdown,
};
