/**
 * @interface
 * An interface representing a Meeting.
 * Meeting details.
 */
export interface Meeting {
  /**
   * @member {string} [role] Meeting role of the user.
   */
  role?: string;

  /**
   * @member {string} [inMeeting] Indicates if the participant is in the meeting.
   */
  inMeeting?: boolean;
}
