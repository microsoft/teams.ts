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
  fromPlatformBroker: false
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

        const clientAssertion = (ConfidentialClientApplication as jest.MockedClass<typeof ConfidentialClientApplication>).mock.calls[0][0].auth.clientAssertion;
        expect(clientAssertion).toEqual(expect.any(Function));
        await expect((clientAssertion as () => Promise<string>)()).resolves.toBe('mock-mi-token');

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
              clientAssertion: expect.any(Function),
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

        const clientAssertion = (ConfidentialClientApplication as jest.MockedClass<typeof ConfidentialClientApplication>).mock.calls[0][0].auth.clientAssertion;
        expect(clientAssertion).toEqual(expect.any(Function));
        await expect((clientAssertion as () => Promise<string>)()).resolves.toBe('mock-umi-token');

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
              clientAssertion: expect.any(Function),
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
        const clientAssertion = (ConfidentialClientApplication as jest.MockedClass<typeof ConfidentialClientApplication>).mock.calls[0][0].auth.clientAssertion;
        await (clientAssertion as () => Promise<string>)();
        expect(ManagedIdentityApplication).toHaveBeenCalledTimes(1);

        await (clientAssertion as () => Promise<string>)();
        expect(ManagedIdentityApplication).toHaveBeenCalledTimes(1);
      });

      it('should cache and reuse ConfidentialClientApplication per tenant', async () => {
        mockConfidentialAcquireToken.mockResolvedValue(createMockAuthResult('mock-token'));

        const tokenManager = new TokenManager(mockUserFICOptions, logger);

        await tokenManager.getBotToken();
        expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);

        await tokenManager.getGraphToken();
        expect(ConfidentialClientApplication).toHaveBeenCalledTimes(1);

        await tokenManager.getGraphToken('other-tenant-id');
        expect(ConfidentialClientApplication).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('agentic token helpers', () => {
    const mockAgenticUser = {
      agenticAppId: 'agentic-app-id',
      agenticUserId: 'agentic-user-id',
      tenantId: 'agentic-identity-tenant-id',
    };
    const mockAgenticApp = {
      agenticAppId: 'agentic-app-id',
      tenantId: 'agentic-identity-tenant-id',
    };

    it('should return null when no credentials are configured', async () => {
      const tokenManager = new TokenManager({}, logger);
      const token = await tokenManager.getAgenticUserToken(
        'some-scope',
        mockAgenticUser.agenticAppId,
        mockAgenticUser.agenticUserId,
        mockAgenticUser.tenantId
      );
      expect(token).toBeNull();
    });

    it('should throw when tenantId cannot be resolved', async () => {
      const tokenManager = new TokenManager({ clientId: 'id', clientSecret: 'secret' }, logger);
      await expect(
        tokenManager.getAgenticUserToken('scope', 'app', 'user')
      ).rejects.toThrow('tenantId is required to get an AgenticUser token');
    });

    it('should throw when agenticAppId is missing at runtime', async () => {
      const tokenManager = new TokenManager(mockOptions, logger);

      await expect(
        tokenManager.getAgenticUserToken('scope', undefined as unknown as string, 'user', 'tenant')
      ).rejects.toThrow('agenticAppId is required to get an AgenticUser token');
    });

    it('should throw when agenticUserId is missing at runtime', async () => {
      const tokenManager = new TokenManager(mockOptions, logger);

      await expect(
        tokenManager.getAgenticUserToken('scope', 'app', undefined as unknown as string, 'tenant')
      ).rejects.toThrow('agenticUserId is required to get an AgenticUser token');
    });

    it('should throw when the token provider is a bare function', async () => {
      // A plain (scope, tenantId) => string cannot express "act as this identity",
      // so it must throw rather than return an app-only token.
      const mockTokenProvider = jest.fn().mockResolvedValue('mock-app-only-token');
      const tokenManager = new TokenManager({
        clientId: 'test-client-id',
        token: mockTokenProvider,
        tenantId: 'test-tenant-id'
      }, logger);

      await expect(
        tokenManager.getAgenticUserToken(
          'target-scope',
          mockAgenticUser.agenticAppId,
          mockAgenticUser.agenticUserId,
          mockAgenticUser.tenantId
        )
      ).rejects.toThrow('getAgenticUserToken');
      expect(mockTokenProvider).not.toHaveBeenCalled();
    });

    it('should throw when the token provider omits the required Agentic User helper', async () => {
      const getAppToken = jest.fn().mockResolvedValue('mock-app-only-token');
      const tokenManager = new TokenManager({
        clientId: 'test-client-id',
        token: { getAppToken },
        tenantId: 'test-tenant-id'
      }, logger);

      await expect(
        tokenManager.getAgenticUserToken(
          'target-scope',
          mockAgenticUser.agenticAppId,
          mockAgenticUser.agenticUserId,
          mockAgenticUser.tenantId
        )
      ).rejects.toThrow('getAgenticUserToken');
      expect(getAppToken).not.toHaveBeenCalled();
    });

    it('should use token provider when it implements getAgenticUserToken', async () => {
      const getAgenticUserToken = jest.fn().mockResolvedValue('mock-agentic-user-provider-token');
      const tokenManager = new TokenManager({
        clientId: 'test-client-id',
        token: { getAppToken: jest.fn(), getAgenticUserToken },
        tenantId: 'test-tenant-id'
      }, logger);

      const token = await tokenManager.getAgenticUserToken(
        'target-scope',
        mockAgenticUser.agenticAppId,
        mockAgenticUser.agenticUserId,
        mockAgenticUser.tenantId
      );

      expect(getAgenticUserToken).toHaveBeenCalledWith(
        'target-scope',
        'agentic-app-id',
        'agentic-user-id',
        'agentic-identity-tenant-id'
      );
      expect(token?.toString()).toBe('mock-agentic-user-provider-token');
    });

    it('should throw when credentials are not ClientCredentials or TokenCredentials', async () => {
      const tokenManager = new TokenManager({
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
      }, logger);

      await expect(
        tokenManager.getAgenticUserToken(
          'scope',
          mockAgenticUser.agenticAppId,
          mockAgenticUser.agenticUserId,
          mockAgenticUser.tenantId
        )
      ).rejects.toThrow('AgenticUser tokens require ClientCredentials');
    });

    describe('user-backed token exchange with ClientCredentials', () => {
      let mockAcquireByUserFederated: jest.Mock;

      beforeEach(() => {
        mockAcquireByUserFederated = jest.fn();
        (ConfidentialClientApplication as jest.MockedClass<typeof ConfidentialClientApplication>).mockImplementation(() => ({
          acquireTokenByClientCredential: mockAcquireTokenByClientCredential,
          acquireTokenByUserFederatedIdentityCredential: mockAcquireByUserFederated,
        } as unknown as ConfidentialClientApplication));
      });

      it('should perform 3-step exchange and return final token', async () => {
        // Call order: step 2 (t2Client.acquireTokenByClientCredential), then t1ForStep3 (base client.acquireTokenByClientCredential)
        mockAcquireTokenByClientCredential
          .mockResolvedValueOnce(createMockAuthResult('t2-token'))  // step 2
          .mockResolvedValueOnce(createMockAuthResult('t1-for-step3'));  // t1ForStep3

        mockAcquireByUserFederated.mockResolvedValue(createMockAuthResult('t3-final-token'));

        const tokenManager = new TokenManager(mockOptions, logger);
        const token = await tokenManager.getAgenticUserToken(
          'target-scope',
          mockAgenticUser.agenticAppId,
          mockAgenticUser.agenticUserId,
          mockAgenticUser.tenantId
        );

        expect(token?.toString()).toBe('t3-final-token');
        // Verify step 3 call
        expect(mockAcquireByUserFederated).toHaveBeenCalledWith({
          scopes: ['target-scope'],
          assertion: 't2-token',
          userObjectId: 'agentic-user-id',
          clientAssertion: 't1-for-step3',
        });
      });

      it('should throw when step 1 returns null', async () => {
        mockAcquireTokenByClientCredential.mockResolvedValue(null);

        const tokenManager = new TokenManager(mockOptions, logger);

        await expect(
          tokenManager.getAgenticUserToken(
            'scope',
            mockAgenticUser.agenticAppId,
            mockAgenticUser.agenticUserId,
            mockAgenticUser.tenantId
          )
        ).rejects.toThrow('Agent token exchange step');
      });

      it('should throw when step 2 returns null', async () => {
        mockAcquireTokenByClientCredential.mockResolvedValueOnce(null);

        const tokenManager = new TokenManager(mockOptions, logger);

        await expect(
          tokenManager.getAgenticUserToken(
            'scope',
            mockAgenticUser.agenticAppId,
            mockAgenticUser.agenticUserId,
            mockAgenticUser.tenantId
          )
        ).rejects.toThrow('Agent token exchange step 2 failed');
      });

      it('should throw when step 3 returns null', async () => {
        mockAcquireTokenByClientCredential
          .mockResolvedValueOnce(createMockAuthResult('t2-token'))
          .mockResolvedValueOnce(createMockAuthResult('t1-for-step3'));

        mockAcquireByUserFederated.mockResolvedValue(null);

        const tokenManager = new TokenManager(mockOptions, logger);

        await expect(
          tokenManager.getAgenticUserToken(
            'scope',
            mockAgenticUser.agenticAppId,
            mockAgenticUser.agenticUserId,
            mockAgenticUser.tenantId
          )
        ).rejects.toThrow('Agent token exchange step 3 failed');
      });

      it('should use the provided tenantId over credentials.tenantId', async () => {
        mockAcquireTokenByClientCredential
          .mockResolvedValueOnce(createMockAuthResult('t2'))
          .mockResolvedValueOnce(createMockAuthResult('t1-step3'));
        mockAcquireByUserFederated.mockResolvedValue(createMockAuthResult('t3'));

        const tokenManager = new TokenManager(mockOptions, logger);
        await tokenManager.getAgenticUserToken(
          'scope',
          mockAgenticUser.agenticAppId,
          mockAgenticUser.agenticUserId,
          mockAgenticUser.tenantId
        );

        // The first ConfidentialClientApplication is the base client for T1 — uses the helper tenantId.
        expect(ConfidentialClientApplication).toHaveBeenCalledWith(
          expect.objectContaining({
            auth: expect.objectContaining({
              authority: 'https://login.microsoftonline.com/agentic-identity-tenant-id'
            })
          })
        );
      });

      it('should cache agent identity client and use fresh T1 assertion each call', async () => {
        mockAcquireTokenByClientCredential
          .mockResolvedValueOnce(createMockAuthResult('t2-first'))
          .mockResolvedValueOnce(createMockAuthResult('t1-first-step3'))
          .mockResolvedValueOnce(createMockAuthResult('t2-second'))
          .mockResolvedValueOnce(createMockAuthResult('t1-second-step3'));
        mockAcquireByUserFederated
          .mockResolvedValueOnce(createMockAuthResult('t3-first'))
          .mockResolvedValueOnce(createMockAuthResult('t3-second'));

        const tokenManager = new TokenManager(mockOptions, logger);

        await tokenManager.getAgenticUserToken(
          'scope',
          mockAgenticUser.agenticAppId,
          mockAgenticUser.agenticUserId,
          mockAgenticUser.tenantId
        );
        const clientCountAfterFirst = (ConfidentialClientApplication as jest.Mock).mock.calls.length;

        await tokenManager.getAgenticUserToken(
          'scope',
          mockAgenticUser.agenticAppId,
          mockAgenticUser.agenticUserId,
          mockAgenticUser.tenantId
        );
        const clientCountAfterSecond = (ConfidentialClientApplication as jest.Mock).mock.calls.length;

        // Agentic App client should be cached (same key) — no new client for the second call (base client is also cached).
        expect(clientCountAfterSecond).toBe(clientCountAfterFirst);
      });
    });

    it('should mint an Agentic App token without performing the user leg', async () => {
      const mockAcquireByUserFederated = jest.fn();
      (ConfidentialClientApplication as jest.MockedClass<typeof ConfidentialClientApplication>).mockImplementation(() => ({
        acquireTokenByClientCredential: mockAcquireTokenByClientCredential,
        acquireTokenByUserFederatedIdentityCredential: mockAcquireByUserFederated,
      } as unknown as ConfidentialClientApplication));

      mockAcquireTokenByClientCredential.mockResolvedValueOnce(createMockAuthResult('agentic-app-token'));

      const tokenManager = new TokenManager(mockOptions, logger);
      const token = await tokenManager.getAgenticAppToken(
        'target-scope',
        mockAgenticApp.agenticAppId,
        mockAgenticApp.tenantId
      );

      expect(token?.toString()).toBe('agentic-app-token');
      // The app-backed ladder omits the user leg entirely.
      expect(mockAcquireByUserFederated).not.toHaveBeenCalled();
      expect(mockAcquireTokenByClientCredential).toHaveBeenCalledWith({ scopes: ['target-scope'] });
      // Acts as the agentic app, in the requested tenant.
      expect(ConfidentialClientApplication).toHaveBeenCalledWith(
        expect.objectContaining({
          auth: expect.objectContaining({
            clientId: 'agentic-app-id',
            authority: 'https://login.microsoftonline.com/agentic-identity-tenant-id',
          })
        })
      );
    });

    it('should use token provider when it implements getAgenticAppToken', async () => {
      const getAgenticAppToken = jest.fn().mockResolvedValue('mock-agentic-app-provider-token');
      const tokenManager = new TokenManager({
        clientId: 'test-client-id',
        token: { getAppToken: jest.fn(), getAgenticAppToken },
        tenantId: 'test-tenant-id'
      }, logger);

      const token = await tokenManager.getAgenticAppToken(
        'target-scope',
        mockAgenticApp.agenticAppId,
        mockAgenticApp.tenantId
      );

      expect(getAgenticAppToken).toHaveBeenCalledWith(
        'target-scope',
        'agentic-app-id',
        'agentic-identity-tenant-id'
      );
      expect(token?.toString()).toBe('mock-agentic-app-provider-token');
    });

    it('should fall back to the credentials tenantId', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValueOnce(createMockAuthResult('agentic-app-token'));

      const tokenManager = new TokenManager(mockOptions, logger);
      await tokenManager.getAgenticAppToken('target-scope', 'agentic-app-id');

      expect(ConfidentialClientApplication).toHaveBeenCalledWith(
        expect.objectContaining({
          auth: expect.objectContaining({
            authority: `https://login.microsoftonline.com/${mockOptions.tenantId}`
          })
        })
      );
    });

    it('should throw when the app-backed token leg returns null', async () => {
      mockAcquireTokenByClientCredential.mockResolvedValue(null);

      const tokenManager = new TokenManager(mockOptions, logger);

      await expect(
        tokenManager.getAgenticAppToken(
          'scope',
          mockAgenticApp.agenticAppId,
          mockAgenticApp.tenantId
        )
      ).rejects.toThrow('Agent token exchange step 2 failed');
    });

    it('should return null when a token provider yields no token', async () => {
      const tokenManager = new TokenManager({
        clientId: 'test-client-id',
        token: { getAppToken: jest.fn(), getAgenticAppToken: jest.fn().mockResolvedValue(null) },
        tenantId: 'test-tenant-id'
      }, logger);

      expect(
        await tokenManager.getAgenticAppToken(
          'scope',
          mockAgenticApp.agenticAppId,
          mockAgenticApp.tenantId
        )
      ).toBeNull();
    });
  });
});
