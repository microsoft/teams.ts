// Centralized mock for @fluentui/react-components
const React = require('react');

// Define common token values used across the project
const mockTokens = {
  // Spacing tokens
  spacingVerticalXS: '2px',
  spacingVerticalS: '4px',
  spacingVerticalM: '8px',
  spacingVerticalL: '16px',
  spacingVerticalXL: '24px',

  spacingHorizontalXS: '2px',
  spacingHorizontalS: '4px',
  spacingHorizontalM: '8px',
  spacingHorizontalL: '12px',
  spacingHorizontalXL: '16px',

  // Font size tokens
  fontSizeBase100: '10px',
  fontSizeBase200: '12px',
  fontSizeBase300: '14px',
  fontSizeBase400: '16px',
  fontSizeBase500: '20px',

  // Color tokens
  colorNeutralForeground1: '#242424',
  colorNeutralForeground2: '#424242',
  colorNeutralForeground3: '#666666',
  colorNeutralForeground4: '#8a8a8a',

  colorNeutralBackground1: '#ffffff',
  colorNeutralBackground2: '#f5f5f5',
  colorNeutralBackground3: '#ededed',
  colorNeutralBackground4: '#e5e5e5',

  colorBrandForeground1: '#0078d4',
  colorBrandForeground2: '#106ebe',

  colorPaletteBlueForeground1: '#0078d4',
  colorPaletteRedForeground1: '#d13438',
  colorPaletteGreenForeground1: '#107c10',
};

// Create mock components
const Tooltip = jest.fn(({ children }) => React.createElement(React.Fragment, null, children));
const mergeClasses = jest.fn((...classes) => classes.filter(Boolean).join(' '));
const makeStyles = jest.fn(() => () => ({
  // Common style class names
  messageContainer: 'mock-message-container-class',
  messageRow: 'mock-message-row-class',
  badgeMessageContainer: 'mock-badge-message-container-class',
  timeMessageContainer: 'mock-time-message-container-class',
  timestamp: 'mock-timestamp-class',
  sentTime: 'mock-sent-time-class',

  // Return whatever class name is requested
  get: (prop) => `mock-${prop}-class`,
}));

// Other common FluentUI components
const Button = jest.fn(({ children, ...props }) =>
  React.createElement('button', { ...props, 'data-testid': 'mock-fluent-button' }, children)
);

const Text = jest.fn(({ children, ...props }) =>
  React.createElement('span', { ...props, 'data-testid': 'mock-fluent-text' }, children)
);

const Body1 = jest.fn(({ children, ...props }) =>
  React.createElement('div', { ...props, 'data-testid': 'mock-fluent-body1' }, children)
);

// Create theme objects
const teamsDarkTheme = { name: 'teamsDarkTheme' };
const teamsLightTheme = { name: 'teamsLightTheme' };
const teamsHighContrastTheme = { name: 'teamsHighContrastTheme' };

const FluentProvider = jest.fn(({ children, theme }) =>
  React.createElement('div', { 'data-theme': theme?.name || 'default' }, children)
);

// Export all the mock components
module.exports = {
  // Design tokens
  tokens: mockTokens,

  // Core utilities
  mergeClasses,
  makeStyles,

  // Components
  Tooltip,
  Button,
  Text,
  Body1,
  FluentProvider,

  // Themes
  teamsDarkTheme,
  teamsLightTheme,
  teamsHighContrastTheme,

  // Add proxy to dynamically handle any requested component
  get Badge() {
    return jest.fn(({ children }) =>
      React.createElement('span', { 'data-testid': 'mock-fluent-badge' }, children)
    );
  },

  get Avatar() {
    return jest.fn(({ name }) =>
      React.createElement('div', { 'data-testid': 'mock-fluent-avatar' }, name?.charAt(0) || 'A')
    );
  },

  get Card() {
    return jest.fn(({ children }) =>
      React.createElement('div', { 'data-testid': 'mock-fluent-card' }, children)
    );
  },

  get Menu() {
    return jest.fn(({ children }) =>
      React.createElement('div', { 'data-testid': 'mock-fluent-menu' }, children)
    );
  },

  get MenuItem() {
    return jest.fn(({ children }) =>
      React.createElement('div', { 'data-testid': 'mock-fluent-menu-item' }, children)
    );
  },

  // Add any other FluentUI components as needed
};
