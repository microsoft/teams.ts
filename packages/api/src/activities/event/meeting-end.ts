import { ActivityBase } from '../base';

export interface MeetingEndEventActivity extends ActivityBase {
  readonly type: 'event';

  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'application/vnd.microsoft.meetingEnd';

  /**
   * A value that is associated with the activity.
   */
  value: {
    /**
     * @member {string} [id] The meeting's Id, encoded as a BASE64 string.
     */
    id: string;

    /**
     * @member {string} [meetingType] The meeting's type.
     */
    meetingType: string;

    /**
     * @member {string} [joinUrl] The URL used to join the meeting.
     */
    joinUrl: string;

    /**
     * @member {string} [title] The title of the meeting.
     */
    title: string;

    /**
     * @member {Date} [startTime] Timestamp for meeting end, in UTC.
     */
    endTime: Date;
  };
}
