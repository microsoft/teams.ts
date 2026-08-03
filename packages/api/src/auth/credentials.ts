/**
 * credentials for app authentication
 */
export type Credentials = ClientCredentials | TokenCredentials | UserManagedIdentityCredentials | FederatedIdentityCredentials;

/**
 * credentials for authentication
 * of an app via `clientId` and `clientSecret`
 */
export type ClientCredentials = {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly tenantId?: string;
};

/**
 * The simplest way to supply your own tokens: one callback for every request.
 * Sufficient for apps that only ever authenticate as themselves; apps that need
 * Agentic User or Agentic App tokens should supply an {@link ITokenProvider}
 * instead.
 */
export type TokenProviderFn = (
  scope: string | string[],
  tenantId?: string
) => string | Promise<string>;

/**
 * What a token provider may hand back: the raw access token string, anything
 * that stringifies to one (such as the SDK's own `IToken`), or `null` /
 * `undefined` to mean "no token available".
 */
export type TokenProviderResult = string | { toString(): string } | null | undefined;

/**
 * Named token acquisition, for apps that supply their own tokens and need more
 * than one kind. Agentic token helpers are specific to the grant being minted;
 * if the SDK needs one and it is missing, it throws rather than falling back to
 * {@link ITokenProvider.getAppToken} under an identity the caller did not ask for.
 *
 * Return the raw access token string. The SDK does not cache it.
 */
export interface ITokenProvider {
  /**
   * Acquires an app-only (service-to-service) token.
   *
   * @param scope the scope to request the token for. Always supplied by the SDK.
   * @param tenantId the tenant to acquire the token in, when the SDK knows it.
   */
  getAppToken(scope: string, tenantId?: string): TokenProviderResult | Promise<TokenProviderResult>;

  /**
   * Acquires a token carrying the requested user-backed agentic identity.
   *
   * @param scope the scope to request the token for.
   * @param agenticAppId the agentic app ID that owns the user.
   * @param agenticUserId the agentic user ID to act as.
   * @param tenantId the tenant to acquire the token in, when the SDK knows it.
   */
  getAgenticUserToken?(
    scope: string,
    agenticAppId: string,
    agenticUserId: string,
    tenantId?: string
  ): TokenProviderResult | Promise<TokenProviderResult>;

  /**
   * Acquires a token carrying the requested app-backed agentic identity.
   *
   * @param scope the scope to request the token for.
   * @param agenticAppId the agentic app ID to act as.
   * @param tenantId the tenant to acquire the token in, when the SDK knows it.
   */
  getAgenticAppToken?(
    scope: string,
    agenticAppId: string,
    tenantId?: string
  ): TokenProviderResult | Promise<TokenProviderResult>;
}

/**
 * Anything that can supply tokens for an app: a {@link TokenProviderFn} for
 * app-only work, or an {@link ITokenProvider} to also serve Agentic User and
 * Agentic App grants.
 */
export type TokenProvider = TokenProviderFn | ITokenProvider;

/**
 * credentials for authentication
 * of an app via any external auth method
 */
export type TokenCredentials = {
  readonly clientId: string;
  readonly tenantId?: string;
  /**
   * Supplies tokens for this app. Pass a {@link TokenProviderFn} for app-only
   * work, or an {@link ITokenProvider} to additionally serve Agentic User and
   * Agentic App tokens.
   */
  readonly token: TokenProvider;
};

/**
 * credentials for user managed identity
*/
export type UserManagedIdentityCredentials = {
  readonly clientId: string;
  readonly tenantId?: string;
};
/**
 * credentials for fedrated identity credentials
*/
type SystemFederatedIdentityCredentials = {
  readonly clientId: string;
  readonly managedIdentityType: 'system';
  readonly tenantId?: string;
};
type UserFederatedIdentityCredentials = {
  readonly clientId: string;
  readonly managedIdentityClientId: string;
  readonly managedIdentityType: 'user';
  readonly tenantId?: string;
};
export type FederatedIdentityCredentials = SystemFederatedIdentityCredentials | UserFederatedIdentityCredentials;
