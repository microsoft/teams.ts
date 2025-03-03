import { SuggestedActions } from '../suggested-actions';

/**
 * @interface
 * An interface the bot's authentication config for SuggestedActions
 */
export interface ConfigAuth {
  /**
   * @member {SuggestedActions} [suggestedActions] SuggestedActions for the Bot Config Auth
   */
  suggestedActions?: SuggestedActions;

  /**
   * @member {BotConfigAuthType} [type] Type of the Bot Config Auth
   */
  type: 'auth';
}
