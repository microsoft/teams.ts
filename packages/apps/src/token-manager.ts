import { AuthenticationResult, ConfidentialClientApplication } from '@azure/msal-node';

import { ClientCredentials, Credentials, IToken, JsonWebToken, TokenCredentials } from '@microsoft/teams.api';
import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

export class TokenManager {
  private logger: ILogger;
  private confidentialClientsByTenantId: Record<string, ConfidentialClientApplication> = {};

  constructor(private credentials: Credentials | undefined, logger: ILogger) {
    this.logger = logger.child('TokenManager') ?? new ConsoleLogger('TokenManager');
  }

  async getBotToken(): Promise<IToken | null> {
    return await this.getToken('https://api.botframework.com/.default');
  }

  async getGraphToken(tenantId?: string): Promise<IToken | null> {
    return await this.getToken('https://graph.microsoft.com/.default', tenantId);
  }

  private async getToken(scope: string, tenantId?: string): Promise<IToken | null> {
    if (!this.credentials) {
      return null;
    }

    if ('clientSecret' in this.credentials) {
      return this.getTokenWithClientCredentials(this.credentials, scope, tenantId);
    } else if ('token' in this.credentials) {
      return this.getTokenWithTokenProvider(this.credentials, scope, tenantId);
    }

    this.logger.warn('getToken was called, but credentials did not match any of the available credential types');
    return null;
  }

  private async getTokenWithClientCredentials(credentials: ClientCredentials, scope: string, tenantId?: string): Promise<IToken | null> {
    const tenantIdParam = this.resolveTenantId(tenantId);
    const confidentialClient = this.getConfidentialClient(credentials, tenantIdParam);
    const result = await confidentialClient.acquireTokenByClientCredential({ scopes: [scope] });
    return this.handleTokenResponse(result);
  }

  private async getTokenWithTokenProvider(credentials: TokenCredentials, scope: string, tenantId?: string): Promise<IToken | null> {
    const tenantIdParam = this.resolveTenantId(tenantId);
    const token = await credentials.token(scope, tenantIdParam);

    return new JsonWebToken(token);
  }

  private resolveTenantId(tenantId?: string) {
    return tenantId || this.credentials?.tenantId || 'botframework.com';
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
        authority: `https://login.microsoftonline.com/${tenantId}`
      }
    });
    this.confidentialClientsByTenantId[tenantId] = client;
    return client;
  }

  private handleTokenResponse(result: AuthenticationResult | null) {
    if (!result) {
      throw new Error('Failed to get token');
    }

    return new JsonWebToken(result.accessToken);
  }
}
