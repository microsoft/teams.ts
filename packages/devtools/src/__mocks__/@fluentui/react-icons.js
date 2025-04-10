// Unified mock for all FluentUI icon imports
// This single file will handle imports from:
// - @fluentui/react-icons
// - @fluentui/react-icons/lib/fonts
// - @fluentui/react-icons/fonts

// Create a generic mock for FluentIcon type
const createMockIcon = (name) => ({
  displayName: name,
  render: jest.fn(() => null),
});

// Create proxy handler to dynamically generate mock icons on demand
const iconHandler = {
  get: (target, prop) => {
    // Handle submodule requests
    if (prop === 'lib' || prop === 'fonts') {
      return target;
    }

    // Return existing mock if we have it
    if (prop in target) {
      return target[prop];
    }

    // Create a new mock icon for this name
    if (typeof prop === 'string' && !prop.startsWith('_')) {
      const mockIcon = createMockIcon(prop);
      target[prop] = mockIcon;
      return mockIcon;
    }

    return undefined;
  }
};

// Create proxy object that will dynamically generate icon mocks
const iconMocks = new Proxy({}, iconHandler);

// Common icons used in the project
const commonIcons = [
  // Message action icons
  'EditRegular', 'EditFilled',
  'TextQuote16Regular', 'TextQuote16Filled',
  'SearchRegular', 'SearchFilled',
  'DeleteRegular', 'DeleteFilled',
  'MoreHorizontalRegular', 'MoreHorizontal20Filled',
];

// Pre-create commonly used icons
commonIcons.forEach(name => {
  iconMocks[name] = createMockIcon(name);
});

// Mock bundleIcon function
const bundleIcon = jest.fn((filledIcon, regularIcon) => ({
  displayName: `Bundled${regularIcon.displayName || 'Icon'}`,
  render: jest.fn(() => null),
}));

// Add bundleIcon function to iconMocks
iconMocks.bundleIcon = bundleIcon;

// Add FluentIcon type to iconMocks
iconMocks.FluentIcon = 'mock-fluent-icon-type';

module.exports = iconMocks;
