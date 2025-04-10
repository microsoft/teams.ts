// Centralized mock for all bundled icons used across components
// Import our unified FluentUI icon mocks
const fluentIcons = require('@fluentui/react-icons');

// Export bundled icons used throughout the project
module.exports = {
  // Icons from MessageActionsToolbar
  EditIcon: fluentIcons.bundleIcon(fluentIcons.EditFilled, fluentIcons.EditRegular),
  TextQuoteIcon: fluentIcons.bundleIcon(fluentIcons.TextQuote16Filled, fluentIcons.TextQuote16Regular),
  DeleteIcon: fluentIcons.bundleIcon(fluentIcons.DeleteFilled, fluentIcons.DeleteRegular),
  MoreHorizontalIcon: fluentIcons.bundleIcon(
    fluentIcons.MoreHorizontal20Filled,
    fluentIcons.MoreHorizontalRegular
  ),
  SearchIcon: fluentIcons.bundleIcon(fluentIcons.SearchFilled, fluentIcons.SearchRegular),

  // Additional bundled icons can be added here as the project grows
  // For example:
  // SendIcon: fluentIcons.bundleIcon(fluentIcons.SendFilled, fluentIcons.SendRegular),
  // AttachIcon: fluentIcons.bundleIcon(fluentIcons.AttachFilled, fluentIcons.AttachRegular),
};
