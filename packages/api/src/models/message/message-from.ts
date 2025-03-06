import { MessageApp } from './message-app';
import { MessageConversation } from './message-conversation';
import { MessageUser } from './message-user';

/**
 *
 * An interface representing MessageActionsPayloadFrom.
 * Represents a user, application, or conversation type that either sent or was
 * referenced in a message.
 *
 */
export type MessageFrom = {
  /**
   * @member {MessageActionsPayloadUser} [user] Represents details of the user.
   */
  user?: MessageUser;

  /**
   * @member {MessageActionsPayloadApp} [application] Represents details of the
   * app.
   */
  application?: MessageApp;

  /**
   * @member {MessageActionsPayloadConversation} [conversation] Represents
   * details of the converesation.
   */
  conversation?: MessageConversation;
};
