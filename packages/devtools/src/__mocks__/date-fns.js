// Mock for date-fns module
const dateFns = jest.createMockFromModule('date-fns');

// Create mocked versions of the functions we use
dateFns.format = jest.fn((date, formatStr) => {
  // Return consistent values based on specific formats
  if (formatStr === 'h:mm a') return '1:45 pm';
  if (formatStr === 'EEEE h:mm a') return 'Monday 8:30 pm';
  if (formatStr === 'M/d h:mm a') return '3/15 4:20 pm';
  if (formatStr === 'MMMM d, yyyy HH:mm') return 'April 9, 2025 13:45';

  // Default case
  return 'April 9, 2025 13:45';
});

dateFns.isToday = jest.fn(() => false);
dateFns.isYesterday = jest.fn(() => false);
dateFns.isThisWeek = jest.fn(() => false);

// Helper to set specific date conditions
dateFns.__setDateConditions = (isToday = false, isYesterday = false, isThisWeek = false) => {
  dateFns.isToday.mockReturnValue(isToday);
  dateFns.isYesterday.mockReturnValue(isYesterday);
  dateFns.isThisWeek.mockReturnValue(isThisWeek);
};

module.exports = dateFns;
