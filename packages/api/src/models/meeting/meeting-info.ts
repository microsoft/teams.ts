import { ConversationAccount, TeamsChannelAccount } from '../account';

import { MeetingDetails } from './meeting-details';

/**
 *
 * General information about a Teams meeting.
 */
export type MeetingInfo = {
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
  organizer?: TeamsChannelAccount;
};
