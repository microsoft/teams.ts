export type TargetedMessageInfoEntity = {
  readonly type: 'targetedMessageInfo';

  /**
   * The message ID of the targeted message.
   */
  messageId: string;

  /**
   * other properties
   */
  [key: string]: any;
};
