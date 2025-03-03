import { Account } from '../account';

/**
 * Conversation and its members
 */
export interface Conversation {
  /**
   * Conversation ID
   */
  id: string;

  /**
   * List of members in this conversation
   */
  members: Account[];
}
