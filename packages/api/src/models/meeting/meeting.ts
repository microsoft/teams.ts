/**
 * A participant's meeting-specific details, including their
 * role and current presence status within the meeting.
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
