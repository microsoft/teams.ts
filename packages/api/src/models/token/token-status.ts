/**
 * The status of a particular token.
 */
export type TokenStatus = {
  /**
   * The channel ID.
   */
  channelId: string;

  /**
   * The connection name.
   */
  connectionName: string;

  /**
   * Boolean indicating if a token is stored for this ConnectionName.
   */
  hasToken: boolean;

  /**
   * The display name of the service provider for which this Token belongs to.
   */
  serviceProviderDisplayName: string;
};
