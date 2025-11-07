import { AuthenticationResult, ConfidentialClientApplication, ManagedIdentityApplication } from '@azure/msal-node';

import { ClientCredentials, Credentials, IToken, JsonWebToken, TokenCredentials , FederatedIdentityCredentials, UserManagedIdentityCredentials } from '@microsoft/teams.api';
import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

const DEFAULT_BOT_TOKEN_SCOPE = 'https://api.botframework.com/.default';
const DEFAULT_GRAPH_TOKEN_SCOPE = 'https://graph.microsoft.com/.default';
const DEFAULT_TENANT_FOR_BOT_TOKEN = 'botframework.com';
const DEFAULT_TENANT_FOR_GRAPH_TOKEN = 'common';
const GET_DEFAULT_TOKEN_AUTHORITY = (tenantId: string) => `https://login.microsoftonline.com/${tenantId}`;

export class TokenManager {
  private logger: ILogger;
  private confidentialClientsByTenantId: Record<string, ConfidentialClientApplication> = {};
  private managedIdentityClient: ManagedIdentityApplication | null = null;

  constructor(private credentials: Credentials | undefined, logger: ILogger) {
    this.logger = logger.child('TokenManager') ?? new ConsoleLogger('TokenManager');
  }

  async getBotToken(): Promise<IToken | null> {
    return await this.getToken(DEFAULT_BOT_TOKEN_SCOPE, this.resolveTenantId(undefined, DEFAULT_TENANT_FOR_BOT_TOKEN));
  }

  async getGraphToken(tenantId?: string): Promise<IToken | null> {
    return await this.getToken(DEFAULT_GRAPH_TOKEN_SCOPE, this.resolveTenantId(tenantId, DEFAULT_TENANT_FOR_GRAPH_TOKEN));
  }

  private async getToken(scope: string, tenantId: string): Promise<IToken | null> {
    if (!this.credentials) {
      return null;
    }

    switch (this.credentials.type) {
      case 'clientSecret':
        return this.getTokenWithClientCredentials(this.credentials, scope, tenantId);
      case 'token':
        return this.getTokenWithTokenProvider(this.credentials, scope, tenantId);
      case 'userManagedIdentity':
        return this.getTokenWithManagedIdentity(this.credentials, scope);
      case 'federatedIdentityCredentials':
        return this.getTokenWithFederatedCredentials(this.credentials, scope, tenantId);
      default:
        this.logger.warn('getToken was called, but credentials did not match any of the available credential types');
        return null;
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
    const managedIdentityTokeRes = await managedIdentityClient.acquireToken({ resource: 'api://AzureADTokenExchange' });
    const confidentialClient = new ConfidentialClientApplication({
      auth: {
        clientId: credentials.clientId,
        clientAssertion: managedIdentityTokeRes.accessToken,
        authority: GET_DEFAULT_TOKEN_AUTHORITY(tenantId)
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
      }
    });
    this.confidentialClientsByTenantId[tenantId] = client;
    return client;
  }

  private getManagedIdentityClient(credentials: UserManagedIdentityCredentials | FederatedIdentityCredentials): ManagedIdentityApplication {
    if (this.managedIdentityClient) {
      return this.managedIdentityClient;
    }

    if (credentials.type === 'userManagedIdentity' || credentials.managedIdentityType === 'user') {
      let clientId: string;
      if (credentials.type === 'userManagedIdentity') {
        clientId = credentials.clientId;
      } else {
        clientId = credentials.managedIdentityClientId;
      }
      this.managedIdentityClient = new ManagedIdentityApplication({
        managedIdentityIdParams: {
          userAssignedClientId: clientId
        }
      });
    } else {
      this.managedIdentityClient = new ManagedIdentityApplication(
        /* no options automatically indicates system assigned managed identity */
      );
    }

    return this.managedIdentityClient;
  }

  private handleTokenResponse(result: AuthenticationResult | null) {
    if (!result) {
      throw new Error('Failed to get token');
    }

    return new JsonWebToken(result.accessToken);
  }
}
