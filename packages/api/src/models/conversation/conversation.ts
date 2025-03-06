import { Account } from '../account';

/**
 * Conversation and its members
 */
export type Conversation = {
  /**
   * Conversation ID
   */
  id: string;

  /**
   * List of members in this conversation
   */
  members: Account[];
};
