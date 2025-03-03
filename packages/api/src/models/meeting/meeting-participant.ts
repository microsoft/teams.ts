import { Account, ConversationAccount } from '../account';
import { Meeting } from './meeting';

/**
 * @interface
 * An interface representing TeamsMeetingParticipant.
 * Teams meeting participant detailing user Azure Active Directory details.
 */
export interface MeetingParticipant {
  /**
   * @member {TeamsChannelAccount} [user] The user details
   */
  user?: Account;

  /**
   * @member {Meeting} [meeting] The meeting details.
   */
  meeting?: Meeting;

  /**
   * @member {ConversationAccount} [conversation] The conversation account for the meeting.
   */
  conversation?: ConversationAccount;
}
