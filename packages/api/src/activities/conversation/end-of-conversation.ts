import { IActivity } from '../activity';

/**
 * @deprecated This will be removed by end of summer 2026.
 */
export type EndOfConversationCode =
  | 'unknown'
  | 'completedSuccessfully'
  | 'userCancelled'
  | 'botTimedOut'
  | 'botIssuedInvalidMessage'
  | 'channelFailed';

/**
 * @deprecated This will be removed by end of summer 2026.
 */
export interface IEndOfConversationActivity extends IActivity<'endOfConversation'> {
  /**
   * The a code for endOfConversation activities that indicates why the conversation ended.
   * Possible values include: 'unknown', 'completedSuccessfully', 'userCancelled', 'botTimedOut',
   * 'botIssuedInvalidMessage', 'channelFailed'
   */
  code?: EndOfConversationCode;

  /**
   * The text content of the message.
   */
  text: string;
}
