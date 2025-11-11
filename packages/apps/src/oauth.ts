export type OAuthSettings = {
  /**
   * the OAuth connection name to use for
   * authentication
   * @default `graph`
   */
  readonly defaultConnectionName?: string;
};

export const DEFAULT_OAUTH_SETTINGS: Required<OAuthSettings> = {
  defaultConnectionName: 'graph'
};
