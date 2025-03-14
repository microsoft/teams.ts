import { format, isToday, isYesterday, isThisWeek } from 'date-fns';

export const formatMessageTime = (dateStr: string) => {
  const date = new Date(dateStr);

  if (isToday(date)) {
    return format(date, 'h:mm a');
  }

  if (isYesterday(date)) {
    return `Yesterday ${format(date, 'h:mm a')}`;
  }

  if (isThisWeek(date)) {
    return format(date, 'EEEE h:mm a');
  }

  return format(date, 'M/d h:mm a');
};

export const formatMessageTooltipTime = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, 'MMMM d, yyyy HH:mm');
};

// Returns the date in ISO format for screen readers
export const formatMessageDateTime = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toISOString();
};
