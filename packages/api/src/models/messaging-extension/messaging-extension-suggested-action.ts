import { CardAction } from '../card';

/**
 *
 * An interface representing MessagingExtensionSuggestedAction.
 * Messaging extension Actions (Only when type is auth or config)
 *
 */
export type MessagingExtensionSuggestedAction = {
  /**
   * @member {CardAction[]} [actions] Actions
   */
  actions?: CardAction[];
};
