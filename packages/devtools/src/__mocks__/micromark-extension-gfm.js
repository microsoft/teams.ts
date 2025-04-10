// Mock for micromark-extension-gfm
const mockGfm = jest.fn(() => ({}));

module.exports = {
  gfm: mockGfm,
};
