/**
 *
 * An interface representing AppBasedLinkQuery.
 * Invoke request body type for app-based link query.
 *
 */
export type AppBasedLinkQuery = {
  /**
   * @member {string} [url] Url queried by user
   */
  url?: string;

  /**
   * @member {string} [state] State is the magic code for OAuth Flow
   */
  state?: string;
};
