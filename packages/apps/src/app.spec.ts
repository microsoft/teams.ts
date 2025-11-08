import jwt from 'jsonwebtoken';

import { JsonWebToken } from '@microsoft/teams.api';

import { App } from './app';
import { HttpPlugin } from './plugins';
import { IPluginStartEvent } from './types';

class TestHttpPlugin extends HttpPlugin {
  async onStart(_event: IPluginStartEvent) {
    // No-op for tests
  }

  async onStop() {
    // No-op for tests
  }
}

class TestApp extends App {
  // Expose protected members for testing
  public async testGetBotToken() {
    return this.getBotToken();
  }

  public async testGetAppGraphToken(tenantId?: string) {
    return this.getAppGraphToken(tenantId);
  }

  public getCredentials() {
    return this.credentials;
  }
}

describe('App', () => {
  describe('token acquisition with MSAL', () => {
    let app: TestApp;
    const mockBotToken = jwt.sign(
      {
        exp: Math.floor((Date.now() + 3600000) / 1000),
        aud: 'https://api.botframework.com',
        iss: 'https://login.microsoftonline.com/test-tenant/v2.0',
      },
      'test-secret'
    );
    const mockGraphToken = jwt.sign(
      {
        exp: Math.floor((Date.now() + 3600000) / 1000),
        aud: 'https://graph.microsoft.com',
        iss: 'https://login.microsoftonline.com/test-tenant/v2.0',
      },
      'test-secret'
    );

    beforeEach(() => {
      app = new TestApp({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        plugins: [new TestHttpPlugin()],
      });
    });

    it('should acquire bot token via TokenManager', async () => {
      // Mock the MSAL acquireTokenByClientCredential method
      const mockAcquireToken = jest.fn().mockResolvedValue({
        accessToken: mockBotToken,
      });

      if (app.tokenManager) {
        // @ts-expect-error - accessing private method for testing
        jest.spyOn(app.tokenManager, 'getConfidentialClient').mockReturnValue({
          acquireTokenByClientCredential: mockAcquireToken,
        } as any);
      }

      const token = await app.testGetBotToken();

      expect(token).toBeInstanceOf(JsonWebToken);
      expect(token?.toString()).toBe(mockBotToken);
      expect(mockAcquireToken).toHaveBeenCalledWith({
        scopes: ['https://api.botframework.com/.default'],
      });
    });

    it('should acquire graph token via TokenManager', async () => {
      // Mock the MSAL acquireTokenByClientCredential method
      const mockAcquireToken = jest.fn().mockResolvedValue({
        accessToken: mockGraphToken,
      });

      if (app.tokenManager) {
        // @ts-expect-error - accessing private method for testing
        jest.spyOn(app.tokenManager, 'getConfidentialClient').mockReturnValue({
          acquireTokenByClientCredential: mockAcquireToken,
        } as any);
      }

      const token = await app.testGetAppGraphToken();

      expect(token).toBeInstanceOf(JsonWebToken);
      expect(token?.toString()).toBe(mockGraphToken);
      expect(mockAcquireToken).toHaveBeenCalledWith({
        scopes: ['https://graph.microsoft.com/.default'],
      });
    });

    it('should acquire graph token for specific tenant', async () => {
      const tenantId = 'specific-tenant-id';
      const mockAcquireToken = jest.fn().mockResolvedValue({
        accessToken: mockGraphToken,
      });

      if (app.tokenManager) {
        // @ts-expect-error - accessing private method for testing
        jest.spyOn(app.tokenManager, 'getConfidentialClient').mockReturnValue({
          acquireTokenByClientCredential: mockAcquireToken,
        } as any);
      }

      const token = await app.testGetAppGraphToken(tenantId);

      expect(token).toBeInstanceOf(JsonWebToken);
      expect(token?.toString()).toBe(mockGraphToken);
    });

    it('should return null when tokenManager is not initialized', async () => {
      const appWithoutCreds = new TestApp({
        plugins: [new TestHttpPlugin()],
      });

      const botToken = await appWithoutCreds.testGetBotToken();
      const graphToken = await appWithoutCreds.testGetAppGraphToken();

      expect(botToken).toBeNull();
      expect(graphToken).toBeNull();
    });

    it('should initialize tokenManager when credentials are provided', () => {
      expect(app.tokenManager).not.toBeNull();
      expect(app.tokenManager).toBeDefined();
    });

    it('should support TokenCredentials with token provider', async () => {
      const mockToken = jwt.sign(
        {
          exp: Math.floor((Date.now() + 3600000) / 1000),
          aud: 'https://api.botframework.com',
        },
        'test-secret'
      );

      const tokenProvider = jest.fn().mockResolvedValue(mockToken);

      const appWithTokenProvider = new TestApp({
        clientId: 'test-client-id',
        token: tokenProvider,
        plugins: [new TestHttpPlugin()],
      });

      expect(appWithTokenProvider.tokenManager).not.toBeNull();

      const token = await appWithTokenProvider.testGetBotToken();

      expect(token).toBeInstanceOf(JsonWebToken);
      expect(tokenProvider).toHaveBeenCalledWith(
        'https://api.botframework.com/.default',
        'botframework.com'
      );
    });

    it('should start app without prefetching tokens', async () => {
      const mockAcquireToken = jest.fn();

      if (app.tokenManager) {
        // @ts-expect-error - accessing private method for testing
        jest.spyOn(app.tokenManager, 'getConfidentialClient').mockReturnValue({
          acquireTokenByClientCredential: mockAcquireToken,
        } as any);
      }

      await app.start();

      // Tokens should not be acquired during start
      expect(mockAcquireToken).not.toHaveBeenCalled();
    });
  });

  describe('Credentials', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...originalEnv };
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    it('should create ClientCredentials with clientSecret from options or env', () => {
      // From options
      const appWithSecret = new TestApp({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        plugins: [new TestHttpPlugin()],
      });

      expect(appWithSecret.getCredentials()).toEqual({
        type: 'clientSecret',
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
      });

      // From environment variables
      process.env.CLIENT_ID = 'env-client-id';
      process.env.CLIENT_SECRET = 'env-client-secret';
      process.env.TENANT_ID = 'env-tenant-id';

      const appFromEnv = new TestApp({
        plugins: [new TestHttpPlugin()],
      });

      expect(appFromEnv.getCredentials()).toEqual({
        type: 'clientSecret',
        clientId: 'env-client-id',
        clientSecret: 'env-client-secret',
        tenantId: 'env-tenant-id',
      });
    });

    it('should create TokenCredentials with token provider', () => {
      const tokenProvider = jest.fn().mockResolvedValue('mock-token');
      const appWithToken = new TestApp({
        clientId: 'test-client-id',
        token: tokenProvider,
        tenantId: 'test-tenant-id',
        plugins: [new TestHttpPlugin()],
      });

      expect(appWithToken.getCredentials()).toEqual({
        type: 'token',
        clientId: 'test-client-id',
        token: tokenProvider,
        tenantId: 'test-tenant-id',
      });
    });

    it('should create UserManagedIdentity credentials with only clientId from options or env', () => {
      // From options
      const appWithUMI = new TestApp({
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
        plugins: [new TestHttpPlugin()],
      });

      expect(appWithUMI.getCredentials()).toEqual({
        type: 'userManagedIdentity',
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
      });

      // From environment variables
      process.env.CLIENT_ID = 'env-client-id';
      process.env.TENANT_ID = 'env-tenant-id';

      const appFromEnv = new TestApp({
        plugins: [new TestHttpPlugin()],
      });

      expect(appFromEnv.getCredentials()).toEqual({
        type: 'userManagedIdentity',
        clientId: 'env-client-id',
        tenantId: 'env-tenant-id',
      });
    });

    it('should create FederatedIdentityCredentials with managedIdentityClientId', () => {
      // System managed identity (managedIdentityClientId = 'system')
      const appWithSystemFIC = new TestApp({
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
        managedIdentityClientId: 'system',
        plugins: [new TestHttpPlugin()],
      });

      expect(appWithSystemFIC.getCredentials()).toEqual({
        type: 'federatedIdentityCredentials',
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
        managedIdentityClientId: 'system',
        managedIdentityType: 'system',
      });

      // User managed identity (managedIdentityClientId different from clientId)
      const appWithUserFIC = new TestApp({
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
        managedIdentityClientId: 'different-managed-identity-id',
        plugins: [new TestHttpPlugin()],
      });

      expect(appWithUserFIC.getCredentials()).toEqual({
        type: 'federatedIdentityCredentials',
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
        managedIdentityClientId: 'different-managed-identity-id',
        managedIdentityType: 'user',
      });

      // From environment variables - system managed identity
      process.env.CLIENT_ID = 'env-client-id';
      process.env.TENANT_ID = 'env-tenant-id';
      process.env.MANAGED_IDENTITY_CLIENT_ID = 'system';

      const appFromEnvSystem = new TestApp({
        plugins: [new TestHttpPlugin()],
      });

      expect(appFromEnvSystem.getCredentials()).toEqual({
        type: 'federatedIdentityCredentials',
        clientId: 'env-client-id',
        tenantId: 'env-tenant-id',
        managedIdentityClientId: 'system',
        managedIdentityType: 'system',
      });

      // From environment variables - user managed identity
      process.env.CLIENT_ID = 'env-client-id';
      process.env.TENANT_ID = 'env-tenant-id';
      process.env.MANAGED_IDENTITY_CLIENT_ID = 'env-managed-identity-id';

      const appFromEnvUser = new TestApp({
        plugins: [new TestHttpPlugin()],
      });

      expect(appFromEnvUser.getCredentials()).toEqual({
        type: 'federatedIdentityCredentials',
        clientId: 'env-client-id',
        tenantId: 'env-tenant-id',
        managedIdentityClientId: 'env-managed-identity-id',
        managedIdentityType: 'user',
      });
    });

    it('should prioritize clientSecret over token when both provided', () => {
      const tokenProvider = jest.fn().mockResolvedValue('mock-token');
      const appWithBoth = new TestApp({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        token: tokenProvider,
        tenantId: 'test-tenant-id',
        plugins: [new TestHttpPlugin()],
      });

      expect(appWithBoth.getCredentials()).toEqual({
        type: 'clientSecret',
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
      });
    });

    it('should merge options and environment variables', () => {
      // Options take precedence over env
      process.env.CLIENT_ID = 'env-client-id';
      process.env.CLIENT_SECRET = 'env-client-secret';
      process.env.TENANT_ID = 'env-tenant-id';

      const appWithOptions = new TestApp({
        clientId: 'options-client-id',
        clientSecret: 'options-client-secret',
        tenantId: 'options-tenant-id',
        plugins: [new TestHttpPlugin()],
      });

      expect(appWithOptions.getCredentials()).toEqual({
        type: 'clientSecret',
        clientId: 'options-client-id',
        clientSecret: 'options-client-secret',
        tenantId: 'options-tenant-id',
      });

      // Mix options and env
      process.env.CLIENT_SECRET = 'env-client-secret';
      process.env.TENANT_ID = 'env-tenant-id';

      const appMerged = new TestApp({
        clientId: 'options-client-id',
        plugins: [new TestHttpPlugin()],
      });

      expect(appMerged.getCredentials()).toEqual({
        type: 'clientSecret',
        clientId: 'options-client-id',
        clientSecret: 'env-client-secret',
        tenantId: 'env-tenant-id',
      });
    });
  });
});
