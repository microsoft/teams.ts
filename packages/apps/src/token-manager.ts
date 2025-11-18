
import { AuthenticationResult, ConfidentialClientApplication, ManagedIdentityApplication, LogLevel as MSALLogLevel, NodeSystemOptions } from '@azure/msal-node';

import { ClientCredentials, Credentials, IToken, JsonWebToken, TokenCredentials, FederatedIdentityCredentials, UserManagedIdentityCredentials } from '@microsoft/teams.api';
import { ConsoleLogger, ILogger, LogLevel } from '@microsoft/teams.common';

const DEFAULT_BOT_TOKEN_SCOPE = 'https://api.botframework.com/.default';
const DEFAULT_GRAPH_TOKEN_SCOPE = 'https://graph.microsoft.com/.default';
const DEFAULT_TENANT_FOR_BOT_TOKEN = 'botframework.com';
const DEFAULT_TENANT_FOR_GRAPH_TOKEN = 'common';
const GET_DEFAULT_TOKEN_AUTHORITY = (tenantId: string) => `https://login.microsoftonline.com/${tenantId}`;

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
};

export class TokenManager {
  readonly credentials?: Credentials;
  private logger: ILogger;
  private _msalLogger: ILogger;
  private confidentialClientsByTenantId: Record<string, ConfidentialClientApplication> = {};
  private managedIdentityClient: ManagedIdentityApplication | null = null;

  constructor(options: TokenManagerOptions, logger: ILogger) {
    this.logger = logger.child('TokenManager') ?? new ConsoleLogger('TokenManager');
    this._msalLogger = this.logger.child('azure/msal-node', {
      // Msal logging is fairly noisy. So we keep it quiet unless the user
      // explicitly turns it on
      pattern: '-azure/msal-node'
    });
    this.credentials = this.initializeCredentials(options);
  }

  async getBotToken(): Promise<IToken | null> {
    return await this.getToken(DEFAULT_BOT_TOKEN_SCOPE, this.resolveTenantId(undefined, DEFAULT_TENANT_FOR_BOT_TOKEN));
  }

  async getGraphToken(tenantId?: string): Promise<IToken | null> {
    return await this.getToken(DEFAULT_GRAPH_TOKEN_SCOPE, this.resolveTenantId(tenantId, DEFAULT_TENANT_FOR_GRAPH_TOKEN));
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
    const token = await credentials.token(scope, tenantId);

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
    const managedIdentityClient = this.getManagedIdentityClient(credentials);
    const managedIdentityTokenRes = await managedIdentityClient.acquireToken({ resource: 'api://AzureADTokenExchange' });
    const confidentialClient = new ConfidentialClientApplication({
      auth: {
        clientId: credentials.clientId,
        clientAssertion: managedIdentityTokenRes.accessToken,
        authority: GET_DEFAULT_TOKEN_AUTHORITY(tenantId)
      },
      system: {
        loggerOptions: this.buildLoggerOptions()
      }
    });
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
        authority: GET_DEFAULT_TOKEN_AUTHORITY(tenantId)
      },
      system: {
        loggerOptions: this.buildLoggerOptions()
      }
    });
    this.confidentialClientsByTenantId[tenantId] = client;
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
