import { TabResponseCards } from './tab-response-card';
import { TabSuggestedActions } from './tab-suggested-actions';

/**
 *
 * Envelope for Card Tab Response Payload.
 *
 */
export type TabResponse = {
  /**
   * @member {TabResponsePayload} [tab] The response to the tab/fetch message.
   */
  tab: TabResponsePayload;
};

/**
 *
 * Payload for Tab Response.
 *
 */
export type TabResponsePayload = {
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
};
