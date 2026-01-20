import { IActivity } from '../activity';

export interface IMeetingStartEventActivity extends IActivity<'event'> {
  /**
   * The name of the operation associated with an invoke or event activity.
   */
  name: 'application/vnd.microsoft.meetingStart';

  /**
   * A value that is associated with the activity.
   */
  value: {
    /**
     * @member {string} [Id] The meeting's Id, encoded as a BASE64 string.
     */
    Id: string;

    /**
     * @member {string} [MeetingType] The meeting's type.
     */
    MeetingType: string;

    /**
     * @member {string} [JoinUrl] The URL used to join the meeting.
     */
    JoinUrl: string;

    /**
     * @member {string} [Title] The title of the meeting.
     */
    Title: string;

    /**
     * @member {Date} [StartTime] Timestamp for meeting start, in UTC.
     */
    StartTime: Date;
  };
}
