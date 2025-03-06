import { Attachment } from '../attachment';
import { Importance } from '../importance';

import { MessageBody } from './message-body';
import { MessageFrom } from './message-from';
import { MessageMention } from './message-mention';
import { MessageReaction } from './message-reaction';

/**
 *
 * An interface representing MessageActionsPayload.
 * Represents the individual message within a chat or channel where a message
 * actions is taken.
 *
 */
export type Message = {
  /**
   * @member {string} [id] Unique id of the message.
   */
  id: string;

  /**
   * @member {string} [replyToId] Id of the parent/root message of the thread.
   */
  replyToId?: string;

  /**
   * @member {MessageType} [messageType] Type of message - automatically set to
   * message. Possible values include: 'message'
   */
  messageType?: 'message';

  /**
   * @member {string} [createdDateTime] Timestamp of when the message was
   * created.
   */
  createdDateTime?: string;

  /**
   * @member {string} [lastModifiedDateTime] Timestamp of when the message was
   * edited or updated.
   */
  lastModifiedDateTime?: string;

  /**
   * @member {boolean} [deleted] Indicates whether a message has been soft
   * deleted.
   */
  deleted?: boolean;

  /**
   * @member {string} [subject] Subject line of the message.
   */
  subject?: string;

  /**
   * @member {string} [summary] Summary text of the message that could be used
   * for notifications.
   */
  summary?: string;

  /**
   * @member {Importance} [importance] The importance of the message. Possible
   * values include: 'normal', 'high', 'urgent'
   */
  importance?: Importance;

  /**
   * @member {string} [locale] Locale of the message set by the client.
   */
  locale?: string;

  /**
   * @member {string} [linkToMessage] Link back to the message.
   */
  linkToMessage?: string;

  /**
   * @member {MessageActionsPayloadFrom} [from] Sender of the message.
   */
  from?: MessageFrom;

  /**
   * @member {MessageActionsPayloadBody} [body] Plaintext/HTML representation
   * of the content of the message.
   */
  body?: MessageBody;

  /**
   * @member {string} [attachmentLayout] How the attachment(s) are displayed in
   * the message.
   */
  attachmentLayout?: string;

  /**
   * @member {MessageActionsPayloadAttachment[]} [attachments] Attachments in
   * the message - card, image, file, etc.
   */
  attachments?: Attachment[];

  /**
   * @member {MessageActionsPayloadMention[]} [mentions] List of entities
   * mentioned in the message.
   */
  mentions?: MessageMention[];

  /**
   * @member {MessageActionsPayloadReaction[]} [reactions] Reactions for the
   * message.
   */
  reactions?: MessageReaction[];
};
