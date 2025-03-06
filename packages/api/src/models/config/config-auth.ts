import { SuggestedActions } from '../suggested-actions';

/**
 *
 * An interface the bot's authentication config for SuggestedActions
 */
export type ConfigAuth = {
  /**
   * @member {SuggestedActions} [suggestedActions] SuggestedActions for the Bot Config Auth
   */
  suggestedActions?: SuggestedActions;

  /**
   * @member {BotConfigAuthType} [type] Type of the Bot Config Auth
   */
  type: 'auth';
};
