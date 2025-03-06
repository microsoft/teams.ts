import { ExecuteAction } from '../actions';

/**
 * Defines how a card can be refreshed by making a request to the target Bot.
 */
export type Refresh = {
  /**
   * The action to be executed to refresh the card. Clients can run this refresh action automatically or can provide an affordance for users to trigger it manually.
   */
  action?: ExecuteAction;

  /**
   * A timestamp that informs a Host when the card content has expired, and that it should trigger a refresh as appropriate. The format is ISO-8601 Instant format. E.g., 2022-01-01T12:00:00Z
   */
  expires?: string;

  /**
   * A list of user Ids informing the client for which users should the refresh action should be run automatically. Some clients will not run the refresh action automatically unless this property is specified. Some clients may ignore this property and always run the refresh action automatically.
   */
  userIds?: string[];
};
