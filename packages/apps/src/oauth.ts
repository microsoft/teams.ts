export type OAuthSettings = {
  /**
   * the OAuth connection name to use for
   * authentication
   * @default `graph`
   */
  readonly defaultConnectionName?: string;

  /**
   * whether to eagerly fetch the user's OAuth token on every inbound activity to
   * populate `ctx.isSignedIn` / `ctx.userToken` / `ctx.userGraph`.
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
