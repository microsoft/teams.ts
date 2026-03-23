import { ConversationAccount, TeamsChannelAccount } from '../account';

import { Meeting } from './meeting';

/**
 *
 * An interface representing TeamsMeetingParticipant.
 * Teams meeting participant detailing user Azure Active Directory details.
 * Meeting participant details pertain to the user's info within the context
 * of a Teams meeting, such as their role and presence status in the meeting. 
 * This is separate from their general user information, which is represented 
 * by the TeamsChannelAccount.
 */
export type MeetingParticipant = {
  /**
   * @member {TeamsChannelAccount} [user] The user details
   */
  user?: TeamsChannelAccount;

  /**
   * @member {Meeting} [meeting] The meeting details pertaining to the user.
   */
  meeting?: Meeting;

  /**
   * @member {ConversationAccount} [conversation] The conversation account for the meeting.
   */
  conversation?: ConversationAccount;
};
