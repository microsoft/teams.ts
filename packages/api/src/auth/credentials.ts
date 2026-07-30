/**
 * credentials for app authentication
 */
import { AgenticUser } from '../models/agentic-user';

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
 * Sufficient for apps that only ever authenticate as themselves; apps that act
 * as an Agentic User or need an app-instance token should supply an
 * {@link ITokenProvider} instead.
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
 * than one kind. The agentic methods are optional; if the SDK needs one and it
 * is missing, it throws rather than falling back to
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
   * Acquires a token carrying the agentic user's identity.
   *
   * @param scope the scope, or scopes, to request the token for.
   * @param agenticUser the agentic user to act on behalf of.
   * @param tenantId the tenant to acquire the token in, when the SDK knows it.
   */
  getAgenticUserToken?(
    scope: string,
    agenticUser: AgenticUser,
    tenantId?: string
  ): TokenProviderResult | Promise<TokenProviderResult>;

  /**
   * Acquires an app-only token for an Agentic App Instance — the agent acting
   * as *itself* rather than on a user's behalf.
   *
   * Omitting this, or {@link ITokenProvider.getAgenticUserToken}, makes the SDK
   * throw when it needs that grant rather than silently substituting an
   * app-only token, which would carry the wrong identity.
   *
   * @param scope the scope, or scopes, to request the token for.
   * @param agenticAppInstanceId the agentic app instance to act as.
   * @param tenantId the tenant to acquire the token in, when the SDK knows it.
   */
  getAgenticAppInstanceToken?(
    scope: string,
    agenticAppInstanceId: string,
    tenantId?: string
  ): TokenProviderResult | Promise<TokenProviderResult>;
}

/**
 * Anything that can supply tokens for an app: a {@link TokenProviderFn} for
 * app-only work, or an {@link ITokenProvider} to also serve the agentic grants.
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
   * Agentic App Instance tokens.
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
