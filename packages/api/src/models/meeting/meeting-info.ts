import { Account, ConversationAccount } from '../account';
import { MeetingDetails } from './meeting-details';

/**
 * @interface
 * General information about a Teams meeting.
 */
export interface MeetingInfo {
  /**
   * @member {string} [id] Unique identifier representing a meeting
   */
  id?: string;

  /**
   * @member {MeetingDetails} [details] The specific details of a Teams meeting.
   */
  details?: MeetingDetails;

  /**
   * @member {ConversationAccount} [conversation] The Conversation Account for the meeting.
   */
  conversation?: ConversationAccount;

  /**
   * @member {TeamsChannelAccount} [organizer] The organizer's user information.
   */
  organizer?: Account;
}
