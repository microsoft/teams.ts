export type QuotedReplyData = {
  /**
   * ID of the message being quoted
   */
  messageId: string;

  /**
   * ID of the sender of the quoted message
   */
  senderId?: string | null;

  /**
   * display name of the sender of the quoted message
   */
  senderName?: string | null;

  /**
   * preview text of the quoted message
   */
  preview?: string | null;

  /**
   * timestamp of the quoted message
   */
  time?: string | null;

  /**
   * whether the quoted message has been deleted
   */
  isReplyDeleted?: boolean;

  /**
   * whether the message reference has been validated
   */
  validatedMessageReference?: boolean;
};

export type QuotedReplyEntity = {
  readonly type: 'quotedReply';

  /**
   * the quoted reply data
   */
  quotedReply: QuotedReplyData;

  /**
   * other properties
   */
  [key: string]: any;
};
