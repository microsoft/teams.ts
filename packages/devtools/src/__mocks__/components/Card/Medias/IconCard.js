// Mock for IconCard component
const React = require('react');

// Create a simple functional component mock that renders the icon name
const IconCard = jest.fn(({ value, className }) => {
  return React.createElement(
    'div',
    {
      className: className,
      'data-testid': 'mock-icon-card',
      'data-icon-name': value.name
    },
    `Icon: ${value.name}`
  );
});

IconCard.displayName = 'MockIconCard';
module.exports = { __esModule: true, default: IconCard };
