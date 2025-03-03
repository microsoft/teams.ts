/**
 * @interface
 */
export interface MeetingDetails {
  /**
   * @member {string} [id] The meeting's Id, encoded as a BASE64 string.
   */
  id: string;

  /**
   * @member {string} [type] The meeting's type.
   */
  type: string;

  /**
   * @member {string} [joinUrl] The URL used to join the meeting.
   */
  joinUrl: string;

  /**
   * @member {string} [title] The title of the meeting.
   */
  title: string;

  /**
   * @member {string} [msGraphResourceId] The MsGraphResourceId, used specifically for MS Graph API calls.
   */
  msGraphResourceId: string;

  /**
   * @member {Date} [scheduledStartTime] The meeting's scheduled start time, in UTC.
   */
  scheduledStartTime?: Date;

  /**
   * @member {Date} [scheduledEndTime] The meeting's scheduled end time, in UTC.
   */
  scheduledEndTime?: Date;
}
