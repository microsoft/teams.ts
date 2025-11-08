import { AuthenticationResult, ConfidentialClientApplication, ManagedIdentityApplication } from '@azure/msal-node';
import { type MockedObject } from 'jest-mock';

import { ClientCredentials, TokenCredentials, UserManagedIdentityCredentials } from '@microsoft/teams.api';
import { ConsoleLogger } from '@microsoft/teams.common';

import { TokenManager } from './token-manager';

jest.mock('@azure/msal-node');
jest.mock('@microsoft/teams.api', () => {
  const actual = jest.requireActual('@microsoft/teams.api');
  return {
    ...actual,
    JsonWebToken: jest.fn().mockImplementation((value: string) => ({
      toString: () => value,
      appId: 'mock-app-id',
      serviceUrl: 'https://smba.trafficmanager.net/teams',
      from: 'bot' as const,
      fromId: '28:mock-app-id',
      isExpired: () => false
    }))
  };
});

const createMockAuthResult = (accessToken: string): AuthenticationResult => ({
  accessToken,
  account: null,
  authority: '',
  uniqueId: '',
  tenantId: '',
  scopes: [],
  idToken: '',
  idTokenClaims: {},
  fromCache: false,
  correlationId: '',
  expiresOn: null,
  extExpiresOn: undefined,
  familyId: '',
  tokenType: '',
  state: '',
  cloudGraphHostName: '',
  msGraphHost: '',
  code: '',
  fromNativeBroker: false
});

describe('TokenManager', () => {
  let mockConfidentialClient: MockedObject<ConfidentialClientApplication>;
  let mockAcquireTokenByClientCredential: jest.Mock;
  let logger: ConsoleLogger;

  const mockClientCredentials: ClientCredentials = {
    type: 'clientSecret',
    clientId: 'test-client-id',
    clientSecret: 'test-client-secret',
    tenantId: 'test-tenant-id'
  };

  beforeEach(() => {
    jest.clearAllMocks();

    logger = new ConsoleLogger('TokenManager');

    // Mock the acquireTokenByClientCredential method
    mockAcquireTokenByClientCredential = jest.fn();

    // Mock the ConfidentialClientApplication instance
    mockConfidentialClient = {
      acquireTokenByClientCredential: mockAcquireTokenByClientCredential
    } as unknown as MockedObject<ConfidentialClientApplication>;

    // Mock the ConfidentialClientApplication constructor
    (ConfidentialClientApplication as jest.MockedClass<typeof ConfidentialClientApplication>).mockImplementation(() => mockConfidentialClient);
  });

  describe('getBotToken', () => {
    it('should acquire token with correct bot framework scope and tenant', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-bot-token'));

      const tokenManager = new TokenManager(mockClientCredentials, logger);
      const token = await tokenManager.getBotToken();

      expect(ConfidentialClientApplication).toHaveBeenCalledWith({
        auth: {
          clientId: 'test-client-id',
          clientSecret: 'test-client-secret',
          authority: 'https://login.microsoftonline.com/test-tenant-id'
        }
      });

      expect(mockAcquireTokenByClientCredential).toHaveBeenCalledWith({
        scopes: ['https://api.botframework.com/.default']
      });

      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-bot-token');
    });

    it('should use default bot framework tenant when credentials have no tenantId', async () => {
      const credentialsWithoutTenant: ClientCredentials = {
        type: 'clientSecret',
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret'
      };

      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-bot-token'));

      const tokenManager = new TokenManager(credentialsWithoutTenant, logger);
      await tokenManager.getBotToken();

      expect(ConfidentialClientApplication).toHaveBeenCalledWith({
        auth: {
          clientId: 'test-client-id',
          clientSecret: 'test-client-secret',
          authority: 'https://login.microsoftonline.com/botframework.com'
        }
      });
    });

    it('should return null when no credentials are provided', async () => {
      const tokenManager = new TokenManager(undefined, logger);
      const token = await tokenManager.getBotToken();

      expect(token).toBeNull();
      expect(ConfidentialClientApplication).not.toHaveBeenCalled();
    });

    it('should throw error when MSAL returns null', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(null);

      const tokenManager = new TokenManager(mockClientCredentials, logger);

      await expect(tokenManager.getBotToken()).rejects.toThrow('Failed to get token');
    });
  });

  describe('getGraphToken', () => {
    it('should acquire token with correct graph scope and tenant', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-graph-token'));

      const tokenManager = new TokenManager(mockClientCredentials, logger);
      const token = await tokenManager.getGraphToken();

      expect(ConfidentialClientApplication).toHaveBeenCalledWith({
        auth: {
          clientId: 'test-client-id',
          clientSecret: 'test-client-secret',
          authority: 'https://login.microsoftonline.com/test-tenant-id'
        }
      });

      expect(mockAcquireTokenByClientCredential).toHaveBeenCalledWith({
        scopes: ['https://graph.microsoft.com/.default']
      });

      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-graph-token');
    });

    it('should use provided tenant ID when specified', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-graph-token'));

      const tokenManager = new TokenManager(mockClientCredentials, logger);
      await tokenManager.getGraphToken('custom-tenant-id');

      expect(ConfidentialClientApplication).toHaveBeenCalledWith({
        auth: {
          clientId: 'test-client-id',
          clientSecret: 'test-client-secret',
          authority: 'https://login.microsoftonline.com/custom-tenant-id'
        }
      });
    });

    it('should use default common tenant when no tenant is specified', async () => {
      const credentialsWithoutTenant: ClientCredentials = {
        type: 'clientSecret',
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret'
      };

      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-graph-token'));

      const tokenManager = new TokenManager(credentialsWithoutTenant, logger);
      await tokenManager.getGraphToken();

      expect(ConfidentialClientApplication).toHaveBeenCalledWith({
        auth: {
          clientId: 'test-client-id',
          clientSecret: 'test-client-secret',
          authority: 'https://login.microsoftonline.com/common'
        }
      });
    });
  });

  describe('ConfidentialClientApplication caching', () => {
    it('should cache and reuse ConfidentialClientApplication per tenant', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-token'));

      const tokenManager = new TokenManager(mockClientCredentials, logger);

      // First call - should create new client
      await tokenManager.getBotToken();
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);

      // Second call with same tenant - should reuse cached client
      await tokenManager.getBotToken();
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);

      // Third call - should reuse cached client
      await tokenManager.getGraphToken();
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);
    });

    it('should create separate ConfidentialClientApplication instances for different tenants', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-token'));

      const tokenManager = new TokenManager(mockClientCredentials, logger);

      // Call with first tenant
      await tokenManager.getGraphToken('tenant-1');
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);
      expect(ConfidentialClientApplication).toHaveBeenLastCalledWith({
        auth: {
          clientId: 'test-client-id',
          clientSecret: 'test-client-secret',
          authority: 'https://login.microsoftonline.com/tenant-1'
        }
      });

      // Call with second tenant - should create new client
      await tokenManager.getGraphToken('tenant-2');
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(2);
      expect(ConfidentialClientApplication).toHaveBeenLastCalledWith({
        auth: {
          clientId: 'test-client-id',
          clientSecret: 'test-client-secret',
          authority: 'https://login.microsoftonline.com/tenant-2'
        }
      });

      // Call with first tenant again - should reuse cached client
      await tokenManager.getGraphToken('tenant-1');
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(2);
    });
  });

  describe('TokenCredentials provider', () => {
    it('should use token provider for bot token when TokenCredentials provided', async () => {
      const mockTokenProvider = jest.fn().mockResolvedValue('mock-provider-token');
      const tokenCredentials: TokenCredentials = {
        type: 'token',
        clientId: 'test-client-id',
        token: mockTokenProvider,
        tenantId: 'test-tenant-id'
      };

      const tokenManager = new TokenManager(tokenCredentials, logger);
      const token = await tokenManager.getBotToken();

      expect(mockTokenProvider).toHaveBeenCalledWith(
        'https://api.botframework.com/.default',
        'test-tenant-id'
      );
      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-provider-token');

      // MSAL should not be called
      expect(ConfidentialClientApplication).not.toHaveBeenCalled();
    });

    it('should use token provider for graph token when TokenCredentials provided', async () => {
      const mockTokenProvider = jest.fn().mockResolvedValue('mock-graph-provider-token');
      const tokenCredentials: TokenCredentials = {
        type: 'token',
        clientId: 'test-client-id',
        token: mockTokenProvider,
        tenantId: 'test-tenant-id'
      };

      const tokenManager = new TokenManager(tokenCredentials, logger);
      const token = await tokenManager.getGraphToken('custom-tenant');

      expect(mockTokenProvider).toHaveBeenCalledWith(
        'https://graph.microsoft.com/.default',
        'custom-tenant'
      );
      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-graph-provider-token');

      // MSAL should not be called
      expect(ConfidentialClientApplication).not.toHaveBeenCalled();
    });

    it('should use default tenant for token provider when no tenant specified', async () => {
      const mockTokenProvider = jest.fn().mockResolvedValue('mock-token');
      const tokenCredentials: TokenCredentials = {
        type: 'token',
        clientId: 'test-client-id',
        token: mockTokenProvider
      };

      const tokenManager = new TokenManager(tokenCredentials, logger);
      await tokenManager.getGraphToken();

      expect(mockTokenProvider).toHaveBeenCalledWith(
        'https://graph.microsoft.com/.default',
        'common'
      );
    });
  });

  describe('tenant ID resolution', () => {
    it('should prioritize explicit tenant ID over credentials tenant ID', async () => {
      const mockTokenProvider = jest.fn().mockResolvedValue('mock-token');
      const tokenCredentials: TokenCredentials = {
        type: 'token',
        clientId: 'test-client-id',
        token: mockTokenProvider,
        tenantId: 'credentials-tenant'
      };

      const tokenManager = new TokenManager(tokenCredentials, logger);
      await tokenManager.getGraphToken('explicit-tenant');

      expect(mockTokenProvider).toHaveBeenCalledWith(
        'https://graph.microsoft.com/.default',
        'explicit-tenant'
      );
    });

    it('should use credentials tenant ID when explicit tenant not provided', async () => {
      const mockTokenProvider = jest.fn().mockResolvedValue('mock-token');
      const tokenCredentials: TokenCredentials = {
        type: 'token',
        clientId: 'test-client-id',
        token: mockTokenProvider,
        tenantId: 'credentials-tenant'
      };

      const tokenManager = new TokenManager(tokenCredentials, logger);
      await tokenManager.getGraphToken();

      expect(mockTokenProvider).toHaveBeenCalledWith(
        'https://graph.microsoft.com/.default',
        'credentials-tenant'
      );
    });

    it('should use default tenant when neither explicit nor credentials tenant provided', async () => {
      const mockTokenProvider = jest.fn().mockResolvedValue('mock-token');
      const tokenCredentials: TokenCredentials = {
        type: 'token',
        clientId: 'test-client-id',
        token: mockTokenProvider
      };

      const tokenManager = new TokenManager(tokenCredentials, logger);
      await tokenManager.getBotToken();

      expect(mockTokenProvider).toHaveBeenCalledWith(
        'https://api.botframework.com/.default',
        'botframework.com'
      );
    });
  });

  describe('error handling', () => {
    it('should propagate MSAL errors', async () => {
      const msalError = new Error('MSAL authentication failed');
      mockAcquireTokenByClientCredential.mockRejectedValue(msalError);

      const tokenManager = new TokenManager(mockClientCredentials, logger);

      await expect(tokenManager.getBotToken()).rejects.toThrow('MSAL authentication failed');
    });

    it('should throw when MSAL returns null result', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(null);

      const tokenManager = new TokenManager(mockClientCredentials, logger);

      await expect(tokenManager.getGraphToken()).rejects.toThrow('Failed to get token');
    });

    it('should propagate token provider errors', async () => {
      const providerError = new Error('Token provider failed');
      const mockTokenProvider = jest.fn().mockRejectedValue(providerError);
      const tokenCredentials: TokenCredentials = {
        type: 'token',
        clientId: 'test-client-id',
        token: mockTokenProvider,
        tenantId: 'test-tenant-id'
      };

      const tokenManager = new TokenManager(tokenCredentials, logger);

      await expect(tokenManager.getBotToken()).rejects.toThrow('Token provider failed');
    });
  });

  describe('UserManagedIdentityCredentials', () => {
    let mockManagedIdentityClient: MockedObject<ManagedIdentityApplication>;
    let mockAcquireToken: jest.Mock;

    const mockUMICredentials: UserManagedIdentityCredentials = {
      type: 'userManagedIdentity',
      clientId: 'test-client-id',
      tenantId: 'test-tenant-id'
    };

    beforeEach(() => {
      // Mock the acquireToken method
      mockAcquireToken = jest.fn();

      // Mock the ManagedIdentityApplication instance
      mockManagedIdentityClient = {
        acquireToken: mockAcquireToken
      } as unknown as MockedObject<ManagedIdentityApplication>;

      // Mock the ManagedIdentityApplication constructor
      (ManagedIdentityApplication as jest.MockedClass<typeof ManagedIdentityApplication>).mockImplementation(() => mockManagedIdentityClient);
    });

    it('should acquire bot token via ManagedIdentityApplication', async () => {
      mockAcquireToken.mockResolvedValue(createMockAuthResult('mock-umi-bot-token'));

      const tokenManager = new TokenManager(mockUMICredentials, logger);
      const token = await tokenManager.getBotToken();

      expect(ManagedIdentityApplication).toHaveBeenCalledWith({
        managedIdentityIdParams: {
          userAssignedClientId: 'test-client-id'
        }
      });

      expect(mockAcquireToken).toHaveBeenCalledWith({
        resource: 'https://api.botframework.com'
      });

      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-umi-bot-token');
    });

    it('should acquire graph token via ManagedIdentityApplication', async () => {
      mockAcquireToken.mockResolvedValue(createMockAuthResult('mock-umi-graph-token'));

      const tokenManager = new TokenManager(mockUMICredentials, logger);
      const token = await tokenManager.getGraphToken();

      expect(ManagedIdentityApplication).toHaveBeenCalledWith({
        managedIdentityIdParams: {
          userAssignedClientId: 'test-client-id'
        }
      });

      expect(mockAcquireToken).toHaveBeenCalledWith({
        resource: 'https://graph.microsoft.com'
      });

      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-umi-graph-token');
    });

    it('should strip /.default suffix from scope when acquiring token', async () => {
      mockAcquireToken.mockResolvedValue(createMockAuthResult('mock-token'));

      const tokenManager = new TokenManager(mockUMICredentials, logger);
      await tokenManager.getBotToken();

      // Verify that /.default was stripped from the scope
      expect(mockAcquireToken).toHaveBeenCalledWith({
        resource: 'https://api.botframework.com'
      });
    });

    it('should cache and reuse ManagedIdentityApplication instance', async () => {
      mockAcquireToken.mockResolvedValue(createMockAuthResult('mock-token'));

      const tokenManager = new TokenManager(mockUMICredentials, logger);

      // First call - should create new client
      await tokenManager.getBotToken();
      expect(ManagedIdentityApplication).toHaveBeenCalledTimes(1);

      // Second call - should reuse cached client
      await tokenManager.getGraphToken();
      expect(ManagedIdentityApplication).toHaveBeenCalledTimes(1);
    });

    it('should throw error when MSAL returns null', async () => {
      mockAcquireToken.mockResolvedValue(null);

      const tokenManager = new TokenManager(mockUMICredentials, logger);

      await expect(tokenManager.getBotToken()).rejects.toThrow('Failed to get token');
    });

    it('should propagate MSAL errors', async () => {
      const msalError = new Error('Managed identity authentication failed');
      mockAcquireToken.mockRejectedValue(msalError);

      const tokenManager = new TokenManager(mockUMICredentials, logger);

      await expect(tokenManager.getGraphToken()).rejects.toThrow('Managed identity authentication failed');
    });
  });
});
