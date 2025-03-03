import { CardAction } from './card';

export interface SuggestedActions {
  /**
   * Ids of the recipients that the actions should be shown to.  These Ids are relative to the
   * channelId and a subset of all recipients of the activity
   */
  to: string[];

  /**
   * Actions that can be shown to the user
   */
  actions: CardAction[];
}
