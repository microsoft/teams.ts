/**
 *
 * An interface representing a Meeting.
 * Meeting details.
 */
export type Meeting = {
  /**
   * @member {string} [role] Meeting role of the user.
   */
  role?: string;

  /**
   * @member {string} [inMeeting] Indicates if the participant is in the meeting.
   */
  inMeeting?: boolean;
};
