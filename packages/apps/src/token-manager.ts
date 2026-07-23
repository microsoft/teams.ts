
import { AuthenticationResult, ConfidentialClientApplication, ManagedIdentityApplication, LogLevel as MSALLogLevel, NodeSystemOptions } from '@azure/msal-node';

import { AgentUser, ClientCredentials, CloudEnvironment, Credentials, IToken, JsonWebToken, PUBLIC, TokenCredentials, FederatedIdentityCredentials, UserManagedIdentityCredentials } from '@microsoft/teams.api';
import { ConsoleLogger, ILogger, LogLevel } from '@microsoft/teams.common';

const DEFAULT_TENANT_FOR_GRAPH_TOKEN = 'common';
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
  readonly token?: TokenCredentials['token'];
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
  private agentIdentityClientsByTenantAndAppId: Record<string, ConfidentialClientApplication> = {};
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
   * Acquires an Agent User-scoped token for the supplied Agent User identity.
   */
  async getAgentUserToken(
    scope: string,
    agentUser: AgentUser
  ): Promise<IToken | null> {
    if (!this.credentials) {
      return null;
    }

    const tenantId = agentUser.tenantId ?? this.credentials.tenantId;
    if (!tenantId) {
      throw new Error('tenantId is required to get an Agent User token');
    }

    if (isTokenCredentials(this.credentials)) {
      return this.getTokenWithTokenProvider(this.credentials, scope, tenantId, agentUser);
    }

    if (!isClientCredentials(this.credentials)) {
      throw new Error('Agent User tokens require ClientCredentials');
    }

    const t1Assertion = async () => {
      const confidentialClient = this.getConfidentialClient(this.credentials as ClientCredentials, tenantId);
      const t1Result = await confidentialClient.acquireTokenByClientCredential({
        scopes: [TOKEN_EXCHANGE_SCOPE],
        fmiPath: agentUser.agentAppInstanceId,
      });
      return this.getAccessTokenOrThrow(t1Result, 'Agent token exchange step 1 failed');
    };

    const t2Client = this.getAgentIdentityClient(tenantId, agentUser.agentAppInstanceId, t1Assertion);
    const t2Result = await t2Client.acquireTokenByClientCredential({ scopes: [TOKEN_EXCHANGE_SCOPE] });
    const t2 = this.getAccessTokenOrThrow(t2Result, 'Agent token exchange step 2 failed');

    const t1ForStep3 = await t1Assertion();
    const t3Result = await t2Client.acquireTokenByUserFederatedIdentityCredential({
      scopes: [scope],
      assertion: t2,
      userObjectId: agentUser.agentUserId,
      clientAssertion: t1ForStep3,
    });
    const t3 = this.getAccessTokenOrThrow(t3Result, 'Agent token exchange step 3 failed');
    return new JsonWebToken(t3);
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

  private async getTokenWithTokenProvider(credentials: TokenCredentials, scope: string, tenantId: string, agentUser?: AgentUser): Promise<IToken | null> {
    const token = await credentials.token(scope, tenantId, agentUser ? { agentUser } : undefined);
    return new JsonWebToken(token);
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

  private getAgentIdentityClient(tenantId: string, agentAppInstanceId: string, clientAssertion: () => Promise<string>) {
    const cacheKey = `${tenantId}:${agentAppInstanceId}`;
    const cachedClient = this.agentIdentityClientsByTenantAndAppId[cacheKey];
    if (cachedClient) {
      return cachedClient;
    }

    const client = new ConfidentialClientApplication({
      auth: {
        clientId: agentAppInstanceId,
        clientAssertion,
        authority: `${this.cloud.loginEndpoint}/${tenantId}`
      },
      system: {
        loggerOptions: this.buildLoggerOptions()
      }
    });
    this.agentIdentityClientsByTenantAndAppId[cacheKey] = client;
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
