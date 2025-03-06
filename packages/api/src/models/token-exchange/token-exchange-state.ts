import { ConversationReference } from '../conversation';

/**
 * State object passed to the bot token service.
 */
export type TokenExchangeState = {
  /**
   * The connection name that was used.
   */
  connectionName: string;

  /**
   * A reference to the conversation.
   */
  conversation: ConversationReference;

  /**
   * A reference to a related parent conversation conversation.
   */
  relatesTo?: ConversationReference;

  /**
   * The URL of the bot messaging endpoint.
   */
  msAppId: string;
};
