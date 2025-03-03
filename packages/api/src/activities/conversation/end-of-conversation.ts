import { ActivityBase } from '../base';

export type EndOfConversationCode =
  | 'unknown'
  | 'completedSuccessfully'
  | 'userCancelled'
  | 'botTimedOut'
  | 'botIssuedInvalidMessage'
  | 'channelFailed';

export interface EndOfConversationActivity extends ActivityBase {
  readonly type: 'endOfConversation';

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
