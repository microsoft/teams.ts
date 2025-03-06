/**
 * credentials for app authentication
 */
export type Credentials = ClientCredentials | TokenCredentials;

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
 * credentials for authentication
 * of an app via any external auth method
 */
export type TokenCredentials = {
  readonly clientId: string;
  readonly tenantId?: string;
  readonly token: (scope: string | string[], tenantId?: string) => string | Promise<string>;
};
