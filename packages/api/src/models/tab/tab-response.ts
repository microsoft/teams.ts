import { TabResponseCards } from './tab-response-card';
import { TabSuggestedActions } from './tab-suggested-actions';

/**
 * @interface
 * Envelope for Card Tab Response Payload.
 *
 */
export interface TabResponse {
  /**
   * @member {TabResponsePayload} [tab] The response to the tab/fetch message.
   */
  tab: TabResponsePayload;
}

/**
 * @interface
 * Payload for Tab Response.
 *
 */
export interface TabResponsePayload {
  /**
   * @member {'continue' | 'auth' | 'silentAuth'} [type] Choice of action options when responding to the tab/fetch message.
   */
  type?: 'continue' | 'auth' | 'silentAuth';

  /**
   * @member {TabResponseCards} [value] The TabResponseCards to send when responding to
   * tab/fetch activity with type of 'continue'.
   */
  value?: TabResponseCards;

  /**
   * @member {TabSuggestedActions} [suggestedActions] The Suggested Actions for this card tab.
   */
  suggestedActions?: TabSuggestedActions;
}
