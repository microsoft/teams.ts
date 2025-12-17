import { AuthenticationResult, ConfidentialClientApplication, ManagedIdentityApplication } from '@azure/msal-node';
import { type MockedObject } from 'jest-mock';

import { ConsoleLogger } from '@microsoft/teams.common';

import { TokenManager, TokenManagerOptions } from './token-manager';

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

  const mockOptions: TokenManagerOptions = {
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
    it('should create ConfidentialClientApplication with correct config for client secret auth', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-bot-token'));

      const tokenManager = new TokenManager(mockOptions, logger);
      const token = await tokenManager.getBotToken();

      expect(ConfidentialClientApplication).toHaveBeenCalledWith(
        expect.objectContaining({
          auth: {
            clientId: 'test-client-id',
            clientSecret: 'test-client-secret',
            authority: 'https://login.microsoftonline.com/test-tenant-id'
          }
        })
      );

      expect(mockAcquireTokenByClientCredential).toHaveBeenCalledWith({
        scopes: ['https://api.botframework.com/.default']
      });

      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-bot-token');
    });

    it('should use default bot framework tenant when options have no tenantId', async () => {
      const optionsWithoutTenant: TokenManagerOptions = {
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret'
      };

      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-bot-token'));

      const tokenManager = new TokenManager(optionsWithoutTenant, logger);
      await tokenManager.getBotToken();

      expect(ConfidentialClientApplication).toHaveBeenCalledWith(
        expect.objectContaining({
          auth: expect.objectContaining({
            authority: 'https://login.microsoftonline.com/botframework.com'
          })
        })
      );
    });

    it('should return null when no credentials are configured', async () => {
      const tokenManager = new TokenManager({}, logger);
      const token = await tokenManager.getBotToken();

      expect(token).toBeNull();
      expect(ConfidentialClientApplication).not.toHaveBeenCalled();
    });

    it('should throw error when MSAL returns null', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(null);

      const tokenManager = new TokenManager(mockOptions, logger);

      await expect(tokenManager.getBotToken()).rejects.toThrow('Failed to get token');
    });
  });

  describe('getGraphToken', () => {
    it('should acquire token with correct graph scope and tenant', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-graph-token'));

      const tokenManager = new TokenManager(mockOptions, logger);
      const token = await tokenManager.getGraphToken();

      expect(mockAcquireTokenByClientCredential).toHaveBeenCalledWith({
        scopes: ['https://graph.microsoft.com/.default']
      });

      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-graph-token');
    });

    it('should use provided tenant ID when specified', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-graph-token'));

      const tokenManager = new TokenManager(mockOptions, logger);
      await tokenManager.getGraphToken('custom-tenant-id');

      expect(ConfidentialClientApplication).toHaveBeenCalledWith(
        expect.objectContaining({
          auth: expect.objectContaining({
            authority: 'https://login.microsoftonline.com/custom-tenant-id'
          })
        })
      );
    });

    it('should use default common tenant when no tenant is specified', async () => {
      const optionsWithoutTenant: TokenManagerOptions = {
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret'
      };

      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-graph-token'));

      const tokenManager = new TokenManager(optionsWithoutTenant, logger);
      await tokenManager.getGraphToken();

      expect(ConfidentialClientApplication).toHaveBeenCalledWith(
        expect.objectContaining({
          auth: expect.objectContaining({
            authority: 'https://login.microsoftonline.com/common'
          })
        })
      );
    });
  });

  describe('ConfidentialClientApplication caching', () => {
    it('should cache and reuse ConfidentialClientApplication per tenant', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-token'));

      const tokenManager = new TokenManager(mockOptions, logger);

      await tokenManager.getBotToken();
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);

      await tokenManager.getBotToken();
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);

      await tokenManager.getGraphToken();
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);
    });

    it('should create separate ConfidentialClientApplication instances for different tenants', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(createMockAuthResult('mock-token'));

      const tokenManager = new TokenManager(mockOptions, logger);

      await tokenManager.getGraphToken('tenant-1');
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);

      await tokenManager.getGraphToken('tenant-2');
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(2);

      await tokenManager.getGraphToken('tenant-1');
      expect(ConfidentialClientApplication).toHaveBeenCalledTimes(2);
    });
  });

  describe('TokenCredentials provider', () => {
    it('should use token provider for bot token', async () => {
      const mockTokenProvider = jest.fn().mockResolvedValue('mock-provider-token');
      const tokenOptions: TokenManagerOptions = {
        clientId: 'test-client-id',
        token: mockTokenProvider,
        tenantId: 'test-tenant-id'
      };

      const tokenManager = new TokenManager(tokenOptions, logger);
      const token = await tokenManager.getBotToken();

      expect(mockTokenProvider).toHaveBeenCalledWith(
        'https://api.botframework.com/.default',
        'test-tenant-id'
      );
      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-provider-token');
      expect(ConfidentialClientApplication).not.toHaveBeenCalled();
    });

    it('should use token provider for graph token', async () => {
      const mockTokenProvider = jest.fn().mockResolvedValue('mock-graph-provider-token');
      const tokenOptions: TokenManagerOptions = {
        clientId: 'test-client-id',
        token: mockTokenProvider,
        tenantId: 'test-tenant-id'
      };

      const tokenManager = new TokenManager(tokenOptions, logger);
      const token = await tokenManager.getGraphToken('custom-tenant');

      expect(mockTokenProvider).toHaveBeenCalledWith(
        'https://graph.microsoft.com/.default',
        'custom-tenant'
      );
      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-graph-provider-token');
      expect(ConfidentialClientApplication).not.toHaveBeenCalled();
    });
  });

  describe('error handling', () => {
    it('should propagate MSAL errors', async () => {
      const msalError = new Error('MSAL authentication failed');
      mockAcquireTokenByClientCredential.mockRejectedValue(msalError);

      const tokenManager = new TokenManager(mockOptions, logger);

      await expect(tokenManager.getBotToken()).rejects.toThrow('MSAL authentication failed');
    });

    it('should propagate token provider errors', async () => {
      const providerError = new Error('Token provider failed');
      const mockTokenProvider = jest.fn().mockRejectedValue(providerError);
      const tokenOptions: TokenManagerOptions = {
        clientId: 'test-client-id',
        token: mockTokenProvider,
        tenantId: 'test-tenant-id'
      };

      const tokenManager = new TokenManager(tokenOptions, logger);

      await expect(tokenManager.getBotToken()).rejects.toThrow('Token provider failed');
    });
  });

  describe('UserManagedIdentityCredentials', () => {
    let mockManagedIdentityClient: MockedObject<ManagedIdentityApplication>;
    let mockAcquireToken: jest.Mock;

    const mockUMIOptions: TokenManagerOptions = {
      clientId: 'test-client-id',
      tenantId: 'test-tenant-id'
    };

    beforeEach(() => {
      mockAcquireToken = jest.fn();

      mockManagedIdentityClient = {
        acquireToken: mockAcquireToken
      } as unknown as MockedObject<ManagedIdentityApplication>;

      (ManagedIdentityApplication as jest.MockedClass<typeof ManagedIdentityApplication>).mockImplementation(() => mockManagedIdentityClient);
    });

    it('should create ManagedIdentityApplication with userAssignedClientId', async () => {
      mockAcquireToken.mockResolvedValue(createMockAuthResult('mock-umi-bot-token'));

      const tokenManager = new TokenManager(mockUMIOptions, logger);
      const token = await tokenManager.getBotToken();

      expect(ManagedIdentityApplication).toHaveBeenCalledWith(
        expect.objectContaining({
          managedIdentityIdParams: {
            userAssignedClientId: 'test-client-id'
          }
        })
      );

      expect(mockAcquireToken).toHaveBeenCalledWith({
        resource: 'https://api.botframework.com'
      });

      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-umi-bot-token');
    });

    it('should acquire graph token via ManagedIdentityApplication', async () => {
      mockAcquireToken.mockResolvedValue(createMockAuthResult('mock-umi-graph-token'));

      const tokenManager = new TokenManager(mockUMIOptions, logger);
      const token = await tokenManager.getGraphToken();

      expect(mockAcquireToken).toHaveBeenCalledWith({
        resource: 'https://graph.microsoft.com'
      });

      expect(token).not.toBeNull();
      expect(token?.toString()).toBe('mock-umi-graph-token');
    });

    it('should cache and reuse ManagedIdentityApplication instance', async () => {
      mockAcquireToken.mockResolvedValue(createMockAuthResult('mock-token'));

      const tokenManager = new TokenManager(mockUMIOptions, logger);

      await tokenManager.getBotToken();
      expect(ManagedIdentityApplication).toHaveBeenCalledTimes(1);

      await tokenManager.getGraphToken();
      expect(ManagedIdentityApplication).toHaveBeenCalledTimes(1);
    });
  });

  describe('FederatedIdentityCredentials', () => {
    let mockManagedIdentityClient: MockedObject<ManagedIdentityApplication>;
    let mockManagedIdentityAcquireToken: jest.Mock;
    let mockConfidentialClient: MockedObject<ConfidentialClientApplication>;
    let mockConfidentialAcquireToken: jest.Mock;

    beforeEach(() => {
      mockManagedIdentityAcquireToken = jest.fn();
      mockManagedIdentityClient = {
        acquireToken: mockManagedIdentityAcquireToken
      } as unknown as MockedObject<ManagedIdentityApplication>;

      mockConfidentialAcquireToken = jest.fn();
      mockConfidentialClient = {
        acquireTokenByClientCredential: mockConfidentialAcquireToken
      } as unknown as MockedObject<ConfidentialClientApplication>;

      (ManagedIdentityApplication as jest.MockedClass<typeof ManagedIdentityApplication>).mockImplementation(() => mockManagedIdentityClient);
      (ConfidentialClientApplication as jest.MockedClass<typeof ConfidentialClientApplication>).mockImplementation(() => mockConfidentialClient);
    });

    describe('System Managed Identity', () => {
      const mockSystemFICOptions: TokenManagerOptions = {
        clientId: 'test-client-id',
        managedIdentityClientId: 'system',
        tenantId: 'test-tenant-id'
      };

      it('should create system ManagedIdentityApplication without params', async () => {
        mockManagedIdentityAcquireToken.mockResolvedValue(createMockAuthResult('mock-mi-token'));
        mockConfidentialAcquireToken.mockResolvedValue(createMockAuthResult('mock-fic-bot-token'));

        const tokenManager = new TokenManager(mockSystemFICOptions, logger);
        const token = await tokenManager.getBotToken();

        expect(ManagedIdentityApplication).toHaveBeenCalledWith(
          expect.objectContaining({
            managedIdentityIdParams: undefined
          })
        );

        expect(mockManagedIdentityAcquireToken).toHaveBeenCalledWith({
          resource: 'api://AzureADTokenExchange'
        });

        expect(ConfidentialClientApplication).toHaveBeenCalledWith(
          expect.objectContaining({
            auth: expect.objectContaining({
              clientId: 'test-client-id',
              clientAssertion: 'mock-mi-token',
              authority: 'https://login.microsoftonline.com/test-tenant-id'
            })
          })
        );

        expect(mockConfidentialAcquireToken).toHaveBeenCalledWith({
          scopes: ['https://api.botframework.com/.default']
        });

        expect(token).not.toBeNull();
        expect(token?.toString()).toBe('mock-fic-bot-token');
      });
    });

    describe('User Managed Identity', () => {
      const mockUserFICOptions: TokenManagerOptions = {
        clientId: 'test-client-id',
        managedIdentityClientId: 'managed-identity-client-id',
        tenantId: 'test-tenant-id'
      };

      it('should create user ManagedIdentityApplication with userAssignedClientId', async () => {
        mockManagedIdentityAcquireToken.mockResolvedValue(createMockAuthResult('mock-umi-token'));
        mockConfidentialAcquireToken.mockResolvedValue(createMockAuthResult('mock-fic-bot-token'));

        const tokenManager = new TokenManager(mockUserFICOptions, logger);
        const token = await tokenManager.getBotToken();

        expect(ManagedIdentityApplication).toHaveBeenCalledWith(
          expect.objectContaining({
            managedIdentityIdParams: {
              userAssignedClientId: 'managed-identity-client-id'
            }
          })
        );

        expect(mockManagedIdentityAcquireToken).toHaveBeenCalledWith({
          resource: 'api://AzureADTokenExchange'
        });

        expect(ConfidentialClientApplication).toHaveBeenCalledWith(
          expect.objectContaining({
            auth: expect.objectContaining({
              clientId: 'test-client-id',
              clientAssertion: 'mock-umi-token',
              authority: 'https://login.microsoftonline.com/test-tenant-id'
            })
          })
        );

        expect(mockConfidentialAcquireToken).toHaveBeenCalledWith({
          scopes: ['https://api.botframework.com/.default']
        });

        expect(token).not.toBeNull();
        expect(token?.toString()).toBe('mock-fic-bot-token');
      });

      it('should cache and reuse ManagedIdentityApplication instance', async () => {
        mockManagedIdentityAcquireToken.mockResolvedValue(createMockAuthResult('mock-mi-token'));
        mockConfidentialAcquireToken.mockResolvedValue(createMockAuthResult('mock-token'));

        const tokenManager = new TokenManager(mockUserFICOptions, logger);

        await tokenManager.getBotToken();
        expect(ManagedIdentityApplication).toHaveBeenCalledTimes(1);

        await tokenManager.getGraphToken();
        expect(ManagedIdentityApplication).toHaveBeenCalledTimes(1);
      });
    });
  });
});
