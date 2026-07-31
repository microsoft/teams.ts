
import { AuthenticationResult, ConfidentialClientApplication, ManagedIdentityApplication, LogLevel as MSALLogLevel, NodeSystemOptions } from '@azure/msal-node';

import { AgenticIdentity, ClientCredentials, CloudEnvironment, Credentials, IToken, ITokenProvider, JsonWebToken, TokenProvider, TokenProviderResult, PUBLIC, TokenCredentials, FederatedIdentityCredentials, UserManagedIdentityCredentials, isUserBackedAgenticIdentity } from '@microsoft/teams.api';
import { ConsoleLogger, ILogger, LogLevel } from '@microsoft/teams.common';

/**
 * Graph falls back to the multi-tenant `common` endpoint when no tenant is
 * known, unlike other scopes which fall back to the cloud's login tenant.
 */
export const DEFAULT_TENANT_FOR_GRAPH_TOKEN = 'common';
const TOKEN_EXCHANGE_SCOPE = 'api://AzureADTokenExchange/.default';

const MSAL_LOG_LEVEL_TO_LOG_LEVEL: Record<MSALLogLevel, LogLevel> = {
  [MSALLogLevel.Error]: 'error',
  [MSALLogLevel.Warning]: 'warn',
  [MSALLogLevel.Info]: 'info',
  [MSALLogLevel.Verbose]: 'debug',
  [MSALLogLevel.Trace]: 'trace'
};
const LOG_LEVEL_TO_MSAL_LOG_LEVEL: Record<LogLevel, MSALLogLevel> = {
  'error': MSALLogLevel.Error,
  'warn': MSALLogLevel.Warning,
  'info': MSALLogLevel.Info,
  'debug': MSALLogLevel.Verbose,
  'trace': MSALLogLevel.Trace
};

type MSALLoggerOptions = NodeSystemOptions['loggerOptions'];

// Type guard functions
function isClientCredentials(credentials: Credentials): credentials is ClientCredentials {
  return 'clientSecret' in credentials;
}

function isTokenCredentials(credentials: Credentials): credentials is TokenCredentials {
  return 'token' in credentials;
}

function isFederatedIdentityCredentials(credentials: Credentials): credentials is FederatedIdentityCredentials {
  return 'managedIdentityType' in credentials;
}


export type TokenManagerOptions = {
  readonly clientId?: string;
  readonly clientSecret?: string;
  readonly tenantId?: string;
  readonly token?: TokenProvider;
  managedIdentityClientId?: 'system' | (string & {});
  readonly cloud?: CloudEnvironment;
};

export class TokenManager {
  readonly credentials?: Credentials;
  private logger: ILogger;
  private _msalLogger: ILogger;
  private cloud: CloudEnvironment;
  private confidentialClientsByTenantId: Record<string, ConfidentialClientApplication> = {};
  private federatedIdentityClientsByTenantId: Record<string, ConfidentialClientApplication> = {};
  private agenticAppClientsByTenantAndAppId: Record<string, ConfidentialClientApplication> = {};
  private managedIdentityClient: ManagedIdentityApplication | null = null;

  constructor(options: TokenManagerOptions, logger: ILogger) {
    this.logger = logger.child('TokenManager') ?? new ConsoleLogger('TokenManager');
    this._msalLogger = this.logger.child('azure/msal-node', {
      // Msal logging is fairly noisy. So we keep it quiet unless the user
      // explicitly turns it on
      pattern: '-azure/msal-node'
    });
    this.cloud = options.cloud ?? PUBLIC;
    this.credentials = this.initializeCredentials(options);
  }

  async getBotToken(): Promise<IToken | null> {
    return await this.getToken(this.cloud.botScope, this.resolveTenantId(undefined, this.cloud.loginTenant));
  }

  async getAppToken(scope: string, tenantId?: string): Promise<IToken | null> {
    return await this.getToken(scope, this.resolveTenantId(tenantId, this.cloud.loginTenant));
  }

  async getGraphToken(tenantId?: string): Promise<IToken | null> {
    return await this.getToken(this.cloud.graphScope, this.resolveTenantId(tenantId, DEFAULT_TENANT_FOR_GRAPH_TOKEN));
  }

  /**
   * Acquires a token for the supplied AgenticIdentity.
   *
   * User-backed identities perform the full user exchange. App-backed
   * identities acquire an app token scoped to `agenticAppId`.
   *
   * @param scope the scope to request the final token for.
   * @param agenticIdentity the agentic identity to act under. Its
   * `tenantId` takes precedence over the tenant configured on the credentials.
   * @returns the token, or `null` when the app has no credentials configured.
   */
  async getAgenticIdentityToken(
    scope: string,
    agenticIdentity: AgenticIdentity
  ): Promise<IToken | null> {
    if (!this.credentials) {
      return null;
    }

    const agenticAppId = this.requireAgenticAppId(agenticIdentity);
    const tenantId = this.resolveAgenticTenantId(agenticIdentity.tenantId, 'AgenticIdentity');

    if (isTokenCredentials(this.credentials)) {
      const getAgenticIdentityToken = this.requireTokenProviderCapability(
        this.credentials,
        'getAgenticIdentityToken',
        'AgenticIdentity'
      );
      return this.toProviderToken(await getAgenticIdentityToken(scope, agenticIdentity, tenantId));
    }

    this.requireClientCredentials(this.credentials, 'AgenticIdentity');

    if (!isUserBackedAgenticIdentity(agenticIdentity)) {
      const { token } = await this.acquireAgenticAppToken(
        scope,
        agenticAppId,
        tenantId,
        this.blueprintAssertionFor(agenticAppId, tenantId)
      );
      return new JsonWebToken(token);
    }

    const blueprintAssertion = this.blueprintAssertionFor(agenticAppId, tenantId);

    // Rung 2: an app token, requested for the exchange scope so it can
    // be presented as the subject assertion for the user exchange below.
    const { client, token: appToken } = await this.acquireAgenticAppToken(
      TOKEN_EXCHANGE_SCOPE,
      agenticAppId,
      tenantId,
      blueprintAssertion
    );

    // Rung 3: redeem the app token for a user-backed AgenticIdentity token.
    const userResult = await client.acquireTokenByUserFederatedIdentityCredential({
      scopes: [scope],
      assertion: appToken,
      userObjectId: agenticIdentity.agenticUserId,
      clientAssertion: await blueprintAssertion(),
    });

    return new JsonWebToken(
      this.getAccessTokenOrThrow(userResult, 'Agent token exchange step 3 failed')
    );
  }

  /**
   * Rung 1 of the agentic token ladder: an ordinary confidential-client grant
   * for the app's own credentials, requesting the token exchange scope with an
   * `fmiPath` naming the agentic app.
   *
   * Returned as a callback rather than a token because MSAL resolves client
   * assertions lazily and re-invokes them when the assertion expires.
   */
  private blueprintAssertionFor(agenticAppId: string, tenantId: string) {
    return async () => {
      const confidentialClient = this.getConfidentialClient(this.credentials as ClientCredentials, tenantId);
      const result = await confidentialClient.acquireTokenByClientCredential({
        scopes: [TOKEN_EXCHANGE_SCOPE],
        fmiPath: agenticAppId,
      });
      return this.getAccessTokenOrThrow(result, 'Agent token exchange step 1 failed');
    };
  }

  /**
   * Rung 2 of the agentic token ladder: a client-credentials grant made *as the
   * agentic app*, authenticated by the rung 1 blueprint assertion.
   *
   * Also returns the MSAL client so callers that need to climb to rung 3 can
   * reuse it instead of re-resolving it.
   */
  private async acquireAgenticAppToken(
    scope: string,
    agenticAppId: string,
    tenantId: string,
    blueprintAssertion: () => Promise<string>
  ) {
    const client = this.getAgenticAppClient(tenantId, agenticAppId, blueprintAssertion);
    const result = await client.acquireTokenByClientCredential({ scopes: [scope] });

    return {
      client,
      token: this.getAccessTokenOrThrow(result, 'Agent token exchange step 2 failed'),
    };
  }

  private requireAgenticAppId(identity: AgenticIdentity) {
    if (!identity.agenticAppId) {
      throw new Error('agenticAppId is required to get an AgenticIdentity token');
    }

    return identity.agenticAppId;
  }

  private resolveAgenticTenantId(tenantId: string | undefined, tokenLabel: string) {
    const resolved = tenantId ?? this.credentials?.tenantId;
    if (!resolved) {
      throw new Error(`tenantId is required to get an ${tokenLabel} token`);
    }

    return resolved;
  }

  private requireClientCredentials(credentials: Credentials, tokenLabel: string): ClientCredentials {
    if (!isClientCredentials(credentials)) {
      throw new Error(`${tokenLabel} tokens require ClientCredentials`);
    }

    return credentials;
  }

  private initializeCredentials(options: TokenManagerOptions): Credentials | undefined {
    const clientId = options.clientId ?? process.env.CLIENT_ID;
    const tenantId = options.tenantId ?? process.env.TENANT_ID;
    const clientSecret = options.clientSecret ?? process.env.CLIENT_SECRET;
    const token = options.token;
    const managedIdentityClientId = options.managedIdentityClientId ?? (process.env.MANAGED_IDENTITY_CLIENT_ID as TokenManagerOptions['managedIdentityClientId']);

    if (clientId && clientSecret) {
      this.logger.debug('Using Client Credentials auth');
      return {
        clientId,
        clientSecret,
        tenantId,
      };
    } else if (clientId && token) {
      this.logger.debug(('Using custom token factory auth'));
      return {
        clientId,
        tenantId,
        token,
      };
    } else if (clientId && !clientSecret) {
      if (managedIdentityClientId == null || managedIdentityClientId.toLowerCase() === clientId.toLowerCase()) {
        this.logger.debug('Using user managed identity auth');
        return {
          clientId,
          tenantId
        };
      } else {
        const identityType = managedIdentityClientId === 'system' ? 'system' : 'user' as const;
        this.logger.debug(`Using Federated Identity Credentials auth (${identityType})`);
        return {
          clientId,
          tenantId,
          managedIdentityClientId,
          managedIdentityType: identityType,
        };
      }
    }

    return undefined;
  }

  private async getToken(scope: string, tenantId: string): Promise<IToken | null> {
    if (!this.credentials) {
      return null;
    }

    if (isClientCredentials(this.credentials)) {
      return this.getTokenWithClientCredentials(this.credentials, scope, tenantId);
    } else if (isTokenCredentials(this.credentials)) {
      return this.getTokenWithTokenProvider(this.credentials, scope, tenantId);
    } else if (isFederatedIdentityCredentials(this.credentials)) {
      return this.getTokenWithFederatedCredentials(this.credentials, scope, tenantId);
    } else {
      return this.getTokenWithManagedIdentity(this.credentials, scope);
    }

  }

  private async getTokenWithClientCredentials(credentials: ClientCredentials, scope: string, tenantId: string): Promise<IToken | null> {
    const confidentialClient = this.getConfidentialClient(credentials, tenantId);
    const result = await confidentialClient.acquireTokenByClientCredential({ scopes: [scope] });
    return this.handleTokenResponse(result);
  }

  private async getTokenWithTokenProvider(credentials: TokenCredentials, scope: string, tenantId: string): Promise<IToken | null> {
    const provider = credentials.token;
    const token = typeof provider === 'function'
      ? await provider(scope, tenantId)
      : await provider.getAppToken(scope, tenantId);
    return this.toProviderToken(token);
  }

  /**
   * Normalizes whatever a token provider returned into an `IToken`. `null` /
   * `undefined` pass through as `null`.
   */
  private toProviderToken(value: TokenProviderResult): IToken | null {
    if (value == null) {
      return null;
    }

    return new JsonWebToken(typeof value === 'string' ? value : value.toString());
  }

  /**
   * Resolves a capability off a custom token provider, or throws when it is
   * missing rather than falling back under an identity the caller did not ask for.
   */
  private requireTokenProviderCapability<K extends 'getAgenticIdentityToken'>(
    credentials: TokenCredentials,
    capability: K,
    tokenLabel: string
  ): NonNullable<ITokenProvider[K]> {
    const provider = credentials.token;
    const method = typeof provider === 'function' ? undefined : provider[capability];

    if (!method) {
      throw new Error(
        `${tokenLabel} tokens require a token provider implementing \`${capability}\`. ` +
        'The configured `token` credential does not, and returning an app-only token instead ' +
        'would authenticate as the app under the wrong identity.'
      );
    }

    return method.bind(provider) as NonNullable<ITokenProvider[K]>;
  }

  private async getTokenWithManagedIdentity(credentials: UserManagedIdentityCredentials, scope: string) {
    const managedIdentityClient = this.getManagedIdentityClient(credentials);
    // Resource doesn't need the ./default suffix
    const resource = scope.replace('/.default', '');
    const result = await managedIdentityClient.acquireToken({
      resource
    });
    return this.handleTokenResponse(result);
  }

  private async getTokenWithFederatedCredentials(credentials: FederatedIdentityCredentials, scope: string, tenantId: string) {
    const confidentialClient = this.getFederatedIdentityClient(credentials, tenantId);
    const result = await confidentialClient.acquireTokenByClientCredential({ scopes: [scope] });
    return this.handleTokenResponse(result);
  }

  private resolveTenantId(tenantId: string | undefined, defaultTenantId: string) {
    return tenantId || this.credentials?.tenantId || defaultTenantId;
  }

  private getConfidentialClient(credentials: ClientCredentials, tenantId: string) {
    const cachedClient = this.confidentialClientsByTenantId[tenantId];
    if (cachedClient) {
      return cachedClient;
    }

    const client = new ConfidentialClientApplication({
      auth: {
        clientId: credentials.clientId,
        clientSecret: credentials.clientSecret,
        authority: `${this.cloud.loginEndpoint}/${tenantId}`
      },
      system: {
        loggerOptions: this.buildLoggerOptions()
      }
    });
    this.confidentialClientsByTenantId[tenantId] = client;
    return client;
  }

  private getFederatedIdentityClient(credentials: FederatedIdentityCredentials, tenantId: string) {
    const cachedClient = this.federatedIdentityClientsByTenantId[tenantId];
    if (cachedClient) {
      return cachedClient;
    }

    const client = new ConfidentialClientApplication({
      auth: {
        clientId: credentials.clientId,
        clientAssertion: async () => {
          const managedIdentityTokenRes = await this.getManagedIdentityClient(credentials).acquireToken({ resource: 'api://AzureADTokenExchange' });
          if (!managedIdentityTokenRes) {
            throw new Error('Failed to acquire managed identity exchange token for federated identity credential');
          }
          return managedIdentityTokenRes.accessToken;
        },
        authority: `${this.cloud.loginEndpoint}/${tenantId}`
      },
      system: {
        loggerOptions: this.buildLoggerOptions()
      }
    });
    this.federatedIdentityClientsByTenantId[tenantId] = client;
    return client;
  }

  private getAgenticAppClient(tenantId: string, agenticAppId: string, clientAssertion: () => Promise<string>) {
    const cacheKey = `${tenantId}:${agenticAppId}`;
    const cachedClient = this.agenticAppClientsByTenantAndAppId[cacheKey];
    if (cachedClient) {
      return cachedClient;
    }

    const client = new ConfidentialClientApplication({
      auth: {
        clientId: agenticAppId,
        clientAssertion,
        authority: `${this.cloud.loginEndpoint}/${tenantId}`
      },
      system: {
        loggerOptions: this.buildLoggerOptions()
      }
    });
    this.agenticAppClientsByTenantAndAppId[cacheKey] = client;
    return client;
  }

  private getManagedIdentityClient(credentials: UserManagedIdentityCredentials | FederatedIdentityCredentials): ManagedIdentityApplication {
    if (this.managedIdentityClient) {
      return this.managedIdentityClient;
    }

    if (isFederatedIdentityCredentials(credentials)) {
      if (credentials.managedIdentityType === 'user') {
        this.managedIdentityClient = new ManagedIdentityApplication({
          managedIdentityIdParams: {
            userAssignedClientId: credentials.managedIdentityClientId
          },
          system: {
            loggerOptions: this.buildLoggerOptions()
          }
        });
      } else {
        this.managedIdentityClient = new ManagedIdentityApplication(
          {
            managedIdentityIdParams: undefined, //no options automatically indicates system assigned managed identity
            system: {
              loggerOptions: this.buildLoggerOptions()
            }

          }
        );
      }
    } else {
      this.managedIdentityClient = new ManagedIdentityApplication({
        managedIdentityIdParams: {
          userAssignedClientId: credentials.clientId
        },
        system: {
          loggerOptions: this.buildLoggerOptions()
        }
      });
    }

    return this.managedIdentityClient;
  }

  private handleTokenResponse(result: AuthenticationResult | null) {
    if (!result) {
      throw new Error('Failed to get token');
    }

    return new JsonWebToken(result.accessToken);
  }

  private getAccessTokenOrThrow(result: AuthenticationResult | null, errorPrefix: string): string {
    if (!result?.accessToken) {
      throw new Error(`${errorPrefix}: Failed to get token`);
    }

    return result.accessToken;
  }

  private buildLoggerOptions(): MSALLoggerOptions {
    return {
      logLevel: this.logger.loggerOptions?.level != null ? LOG_LEVEL_TO_MSAL_LOG_LEVEL[this.logger.loggerOptions.level] : undefined,
      loggerCallback: (level, message) => {
        // There's a bug in MSAL where it warns this on all requests.
        // https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/7917
        if (message.endsWith('Warning - No client info in response')) {
          return;
        }
        this._msalLogger.log(MSAL_LOG_LEVEL_TO_LOG_LEVEL[level], message);
      },
      piiLoggingEnabled: false,
    };
  }
}
