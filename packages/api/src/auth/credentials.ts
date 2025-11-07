/**
 * credentials for app authentication
 */
export type Credentials = ClientCredentials | TokenCredentials | UserManagedIdentityCredentials | FederatedIdentityCredentials;

/**
 * credentials for authentication
 * of an app via `clientId` and `clientSecret`
 */
export type ClientCredentials = {
  type: 'clientSecret';
  readonly clientId: string;
  readonly clientSecret: string;
  readonly tenantId?: string;
};

/**
 * credentials for authentication
 * of an app via any external auth method
 */
export type TokenCredentials = {
  type: 'token';
  readonly clientId: string;
  readonly tenantId?: string;
  readonly token: (scope: string | string[], tenantId?: string) => string | Promise<string>;
};

/**
 * credentials for user managed identity
*/
export type UserManagedIdentityCredentials = {
  type: 'userManagedIdentity';
  readonly clientId: string;
  readonly tenantId?: string;
};
/**
 * credentials for fedrated identity credentials
*/
type SystemFederatedIdentityCredentials = {
  type: 'federatedIdentityCredentials';
  readonly clientId: string;
  readonly managedIdentityType: 'system';
  readonly tenantId?: string;
};
type UserFederatedIdentityCredentials = {
  type: 'federatedIdentityCredentials';
  readonly clientId: string;
  readonly managedIdentityClientId: string;
  readonly managedIdentityType: 'user';
  readonly tenantId?: string;
};
export type FederatedIdentityCredentials = SystemFederatedIdentityCredentials | UserFederatedIdentityCredentials;
