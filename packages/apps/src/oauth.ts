export type OAuthSettings = {
  /**
   * the OAuth connection name to use for
   * authentication
   * @default `graph`
   */
  readonly defaultConnectionName?: string;

  /**
   * whether to eagerly look up the user's OAuth token on every inbound activity.
   * the token is used to compute `ctx.isSignedIn` and `ctx.userToken`, and to authenticate
   * `ctx.userGraph` (which is always constructed regardless of this setting).
   * when left unset, this is auto-detected: enabled only when an OAuth connection is
   * explicitly configured via `defaultConnectionName`, so apps that never use user OAuth
   * do not pay for a wasted token request on every turn.
   * set explicitly to `true` or `false` to override the auto-detection.
   */
  readonly fetchUserToken?: boolean;
};

export const DEFAULT_OAUTH_SETTINGS: Required<Pick<OAuthSettings, 'defaultConnectionName'>> = {
  defaultConnectionName: 'graph'
};
