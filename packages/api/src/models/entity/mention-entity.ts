import { Account } from '../account';

export interface MentionEntity {
  readonly type: 'mention';

  /**
   * the mentioned user.
   */
  mentioned: Account;

  /**
   * text which represents the mention
   */
  text?: string | null;

  /**
   * other properties
   */
  [key: string]: any;
}
