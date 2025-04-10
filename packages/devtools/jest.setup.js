// jest.setup.js
require('@testing-library/jest-dom');

// Mock global objects that might be used in tests
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock window methods not provided by jsdom
window.matchMedia = window.matchMedia || function(query) {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated; backwards compatibility
    removeListener: jest.fn(), // Deprecated; backwards compatibility
    addEventListener: jest.fn(), // Modern API
    removeEventListener: jest.fn(), // Modern API
    dispatchEvent: jest.fn(),
  };
};

// Suppress React act() warnings
// These usually happen because of state updates in useEffect
const originalConsoleError = console.error;
console.error = (...args) => {
  if (/Warning.*not wrapped in act/.test(args[0])) {
    return;
  }
  originalConsoleError(...args);
};
