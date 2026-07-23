/**
 * credentials for app authentication
 */
import { AgentUser } from '../models/agent-user';

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
 * Options passed to custom token providers when the SDK requests a token.
 */
export type TokenRequestOptions = {
  /**
   * Agent User identity for requests that need an Agent User-scoped token.
   */
  readonly agentUser?: AgentUser;
};

/**
 * credentials for authentication
 * of an app via any external auth method
 */
export type TokenCredentials = {
  readonly clientId: string;
  readonly tenantId?: string;
  readonly token: (scope: string | string[], tenantId?: string, options?: TokenRequestOptions) => string | Promise<string>;
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
