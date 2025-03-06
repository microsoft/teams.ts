import { WindowClient } from '../window-client';

/**
 * Compose meeting parameters
 */
export type ComposeCalendarMeetingParams = {
  /**
   * An array of email addresses, user name, or user id of the attendees to invite to the meeting.
   */
  attendees?: string[];

  /**
   * The start time of the meeting in MM/DD/YYYY HH:MM:SS format.
   */
  startTime?: string;

  /**
   * The end time of the meeting in MM/DD/YYYY HH:MM:SS format.
   */
  endTime?: string;

  /**
   * The subject line of the meeting.
   */
  subject?: string;

  /**
   * The body content of the meeting.
   */
  content?: string;
};

/**
 * Open calendar item parameters.
 */
export type OpenCalendarItemParams = {
  /**
   * An unique base64-encoded string id that represents the event's unique identifier of the calendar item to be opened.
   */
  itemId: string;
};

export class CalendarClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async composeMeeting(params: ComposeCalendarMeetingParams) {
    await this.window.send('calendar.composeMeeting', params);
  }

  async openItem(params: OpenCalendarItemParams) {
    await this.window.send('calendar.openCalendarItem', params);
  }
}
