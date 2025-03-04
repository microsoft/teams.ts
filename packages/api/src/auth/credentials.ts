/**
 * credentials for app authentication
 */
export type Credentials = ClientCredentials | TokenCredentials;

/**
 * credentials for authentication
 * of an app via `clientId` and `clientSecret`
 */
export interface ClientCredentials {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly tenantId?: string;
}

/**
 * credentials for authentication
 * of an app via managed identity
 */
export interface TokenCredentials {
  readonly clientId: string;
  readonly token: (scope: string) => string | Promise<string>;
}
