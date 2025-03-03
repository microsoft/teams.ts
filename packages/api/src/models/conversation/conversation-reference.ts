import { Account, ConversationAccount } from '../account';
import { ChannelID } from '../channel-id';

/**
 * An object relating to a particular point in a conversation
 */
export interface ConversationReference {
  /**
   * (Optional) ID of the activity to refer to
   */
  activityId?: string;

  /**
   * (Optional) User participating in this conversation
   */
  user?: Account;

  /**
   * A locale name for the contents of the text field.
   * The locale name is a combination of an ISO 639 two- or three-letter
   * culture code associated with a language and an ISO 3166 two-letter
   * subculture code associated with a country or region.
   * The locale name can also correspond to a valid BCP-47 language tag.
   */
  locale?: string;

  /**
   * Bot participating in this conversation
   */
  bot: Account;

  /**
   * Conversation reference
   */
  conversation: ConversationAccount;

  /**
   * Channel ID
   */
  channelId: ChannelID;

  /**
   * Service endpoint where operations concerning the referenced conversation may be performed
   */
  serviceUrl: string;
}
