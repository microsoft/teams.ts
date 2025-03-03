import { AdaptiveCardAuthentication } from './adaptive-card-authentication';
import { AdaptiveCardInvokeAction } from './adaptive-card-invoke-action';

/**
 * Defines the structure that arrives in the Activity.Value for Invoke activity with
 * Name of 'adaptiveCard/action'.
 */
export interface AdaptiveCardInvokeValue {
  /**
   * The [AdaptiveCardInvokeAction](xref:botframework-schema.AdaptiveCardInvokeAction) of
   * this adaptive card invoke action value.
   */
  action: AdaptiveCardInvokeAction;

  /**
   * The [AdaptiveCardAuthentication](xref:botframework-schema.AdaptiveCardAuthentication)
   * for this adaptive card invoke action value.
   */
  authentication?: AdaptiveCardAuthentication;

  /**
   * The 'state' or magic code for an OAuth flow.
   */
  state?: string;

  /**
   * What triggered the action
   */
  trigger?: 'manual';
}
