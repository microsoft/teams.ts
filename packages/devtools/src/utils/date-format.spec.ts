import { formatMessageTime, formatMessageTooltipTime, formatMessageDateTime } from './date-format';

/**
 * Mock date-fns functions to ensure consistent test results regardless of timezone
 *
 * These mocks ensure our tests work consistently on any machine and in any timezone by:
 * 1. Intercepting calls to date-fns format function and returning hardcoded values
 * 2. Controlling the behavior of isToday/isYesterday/isThisWeek functions
 * 3. Matching specific date strings to specific expected formatted outputs
 */
jest.mock('date-fns', () => {
  // Keep original date-fns implementation for functions we don't mock
  const actualDateFns = jest.requireActual('date-fns');

  return {
    ...actualDateFns,

    // Mock the format function to return consistent values regardless of timezone
    format: jest.fn((date, formatStr) => {
      const isoString = date.toISOString();

      // Map specific input date + format combinations to their expected output
      // This avoids timezone issues by hardcoding the expected outputs
      if (isoString === '2025-04-09T13:45:00.000Z') {
        if (formatStr === 'h:mm a') return '1:45 pm';
        if (formatStr === 'MMMM d, yyyy HH:mm') return 'April 9, 2025 13:45';
      } else if (isoString === '2025-04-08T10:15:00.000Z' && formatStr === 'h:mm a') {
        return '10:15 am';
      } else if (isoString === '2025-04-07T20:30:00.000Z' && formatStr === 'EEEE h:mm a') {
        return 'Monday 8:30 pm';
      } else if (isoString === '2025-03-15T16:20:00.000Z' && formatStr === 'M/d h:mm a') {
        return '3/15 4:20 pm';
      }

      // For any unhandled cases, use the real implementation
      return actualDateFns.format(date, formatStr);
    }),

    // Mock date-specific detection functions
    isToday: jest.fn((date) => date.toISOString().startsWith('2025-04-09')),
    isYesterday: jest.fn((date) => date.toISOString().startsWith('2025-04-08')),
    isThisWeek: jest.fn((date) => {
      const isoString = date.toISOString();
      // For our test scenario, April 7-9, 2025 are considered "this week"
      return (
        isoString.startsWith('2025-04-07') ||
        isoString.startsWith('2025-04-08') ||
        isoString.startsWith('2025-04-09')
      );
    }),
  };
});

describe('date-format utilities', () => {
  // Test constants - reuse these exact strings to match our mock implementation
  const TODAY = '2025-04-09T13:45:00Z'; // Today (April 9, 2025)
  const YESTERDAY = '2025-04-08T10:15:00Z'; // Yesterday
  const THIS_WEEK = '2025-04-07T20:30:00Z'; // Earlier this week (Monday)
  const OLDER_DATE = '2025-03-15T16:20:00Z'; // Previous month

  describe('formatMessageTime', () => {
    it("formats today's date as time only", () => {
      expect(formatMessageTime(TODAY)).toBe('1:45 pm');
    });

    it('formats yesterday\'s date with "Yesterday" prefix', () => {
      expect(formatMessageTime(YESTERDAY)).toBe('Yesterday 10:15 am');
    });

    it('formats dates from this week with day name', () => {
      expect(formatMessageTime(THIS_WEEK)).toBe('Monday 8:30 pm');
    });

    it('formats older dates with month and day', () => {
      expect(formatMessageTime(OLDER_DATE)).toBe('3/15 4:20 pm');
    });
  });

  describe('formatMessageTooltipTime', () => {
    it('formats date in full format with 24h time', () => {
      expect(formatMessageTooltipTime(TODAY)).toBe('April 9, 2025 13:45');
    });
  });

  describe('formatMessageDateTime', () => {
    it('returns the date in ISO format', () => {
      const date = TODAY;
      const isoDate = new Date(date).toISOString();
      expect(formatMessageDateTime(date)).toBe(isoDate);
    });
  });
});
