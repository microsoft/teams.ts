import { ConversationAccount, TeamsChannelAccount } from '../account';

import { Meeting } from './meeting';

/**
 *
 * An interface representing TeamsMeetingParticipant.
 * Teams meeting participant detailing user Azure Active Directory details.
 */
export type MeetingParticipant = {
  /**
   * @member {TeamsChannelAccount} [user] The user details
   */
  user?: TeamsChannelAccount;

  /**
   * @member {Meeting} [meeting] The meeting details.
   */
  meeting?: Meeting;

  /**
   * @member {ConversationAccount} [conversation] The conversation account for the meeting.
   */
  conversation?: ConversationAccount;
};
