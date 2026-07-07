import { US_GOV, CHINA } from '@microsoft/teams.api';

import { InboundActivityTokenValidator } from './inbound-activity-token-validator';
import { JwtValidator } from './jwt-validator';

// Mock JwtValidator — real one fetches JWKS keys from remote endpoints.
jest.mock('./jwt-validator', () => {
  const actual = jest.requireActual('./jwt-validator');
  return {
    ...actual,
    JwtValidator: jest.fn(),
  };
});

describe('InboundActivityTokenValidator', () => {
  const mockClientId = 'test-client-id';
  const mockTenantId = 'test-tenant-id';
  const mockServiceUrl = 'https://smba.trafficmanager.net/amer/';

  let mockValidateAccessToken: jest.Mock;

  const createUnverifiedToken = (payload: Record<string, any>) => {
    return [
      Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url'),
      Buffer.from(JSON.stringify(payload)).toString('base64url'),
      'signature'
    ].join('.');
  };

  beforeEach(() => {
    mockValidateAccessToken = jest.fn();
    (JwtValidator as jest.Mock).mockImplementation(() => ({
      validateAccessToken: mockValidateAccessToken
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('check', () => {
    it('should throw when token is empty', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);
      await expect(validator.check('Bearer ', {})).rejects.toThrow('No token provided');
      await expect(validator.check('', {})).rejects.toThrow('No token provided');
    });

    it('should extract token from Bearer prefix and convert payload to IToken', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: mockServiceUrl
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: mockServiceUrl };

      const result = await validator.check(authHeader, body);

      expect(mockValidateAccessToken).toHaveBeenCalledWith('test-token', {
        validateServiceUrl: { expectedServiceUrl: mockServiceUrl }
      });

      expect(result).toEqual({
        appId: mockClientId,
        from: 'azure',
        fromId: 'bot-id',
        serviceUrl: mockServiceUrl,
        isExpired: expect.any(Function)
      });
      expect(result.isExpired()).toBe(false);
    });

    it('should handle token without Bearer prefix', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: mockServiceUrl
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const token = 'test-token';
      const body = { serviceUrl: mockServiceUrl };

      await validator.check(token, body);

      expect(mockValidateAccessToken).toHaveBeenCalledWith('test-token', {
        validateServiceUrl: { expectedServiceUrl: mockServiceUrl }
      });
    });

    it('should throw error when payload is null', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);

      mockValidateAccessToken.mockResolvedValue(null);

      const authHeader = 'Bearer invalid-token';
      const body = { serviceUrl: mockServiceUrl };

      await expect(validator.check(authHeader, body)).rejects.toThrow('Invalid token');
    });

    it('should pass serviceUrl validation option from request body', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: mockServiceUrl
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: mockServiceUrl };

      await validator.check(authHeader, body);

      expect(mockValidateAccessToken).toHaveBeenCalledWith('test-token', {
        validateServiceUrl: { expectedServiceUrl: mockServiceUrl }
      });
    });

    it('should not pass serviceUrl validation when body.serviceUrl is missing', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: mockServiceUrl
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = {};

      await validator.check(authHeader, body);

      expect(mockValidateAccessToken).toHaveBeenCalledWith('test-token', {
        validateServiceUrl: undefined
      });
    });

    it('should use credentials for fallback appId when payload.appid is missing', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        // appid missing
        sub: 'bot-id',
        serviceurl: mockServiceUrl
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: mockServiceUrl };

      const result = await validator.check(authHeader, body);

      expect(result.appId).toBe(mockClientId);
    });

    it('should prefer body.serviceUrl over payload.serviceurl', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);

      const payloadServiceUrl = 'https://smba.trafficmanager.net/emea/';
      const bodyServiceUrl = 'https://smba.trafficmanager.net/amer/';

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: payloadServiceUrl
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: bodyServiceUrl };

      const result = await validator.check(authHeader, body);

      expect(result.serviceUrl).toBe(bodyServiceUrl);
    });

    it('should use service validator for Bot Framework tokens', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);
      mockValidateAccessToken.mockResolvedValue({
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: mockServiceUrl,
      });

      const token = createUnverifiedToken({ iss: 'https://api.botframework.com' });
      await validator.check(`Bearer ${token}`, { serviceUrl: mockServiceUrl });

      expect(mockValidateAccessToken).toHaveBeenCalledWith(token, {
        validateServiceUrl: { expectedServiceUrl: mockServiceUrl }
      });
    });

    it('should use Entra validator for v2 issuer tokens without serviceUrl validation', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);
      mockValidateAccessToken.mockResolvedValue({
        appid: mockClientId,
        sub: 'agent-id',
      });

      const token = createUnverifiedToken({
        iss: `https://login.microsoftonline.com/${mockTenantId}/v2.0`,
        tid: mockTenantId,
      });
      await validator.check(`Bearer ${token}`, { serviceUrl: mockServiceUrl });

      expect(JwtValidator).toHaveBeenLastCalledWith(expect.objectContaining({
        clientId: mockClientId,
        tenantId: mockTenantId,
        loginEndpoint: 'https://login.microsoftonline.com',
        validateIssuer: { allowedTenantIds: [mockTenantId] },
        jwksUriOptions: { type: 'tenantId' },
      }), undefined);
      expect(mockValidateAccessToken).toHaveBeenLastCalledWith(token);
    });

    it('should use Entra validator for v1 sts issuer tokens', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);
      mockValidateAccessToken.mockResolvedValue({ appid: mockClientId, sub: 'agent-id' });

      const token = createUnverifiedToken({
        iss: `https://sts.windows.net/${mockTenantId}/`,
        tid: mockTenantId,
      });
      await validator.check(`Bearer ${token}`, { serviceUrl: mockServiceUrl });

      expect(mockValidateAccessToken).toHaveBeenLastCalledWith(token);
    });

    it('should reject Entra tokens missing tid', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);
      const token = createUnverifiedToken({
        iss: `https://login.microsoftonline.com/${mockTenantId}/v2.0`,
      });

      await expect(validator.check(`Bearer ${token}`, { serviceUrl: mockServiceUrl }))
        .rejects.toThrow('Entra inbound token is missing tid');
    });

    it('should cache Entra validators by tenant', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);
      mockValidateAccessToken.mockResolvedValue({ appid: mockClientId, sub: 'agent-id' });
      const token = createUnverifiedToken({
        iss: `https://login.microsoftonline.com/${mockTenantId}/v2.0`,
        tid: mockTenantId,
      });

      await validator.check(`Bearer ${token}`, { serviceUrl: mockServiceUrl });
      await validator.check(`Bearer ${token}`, { serviceUrl: mockServiceUrl });

      // Only one Entra validator created despite two calls (plus the BotFramework one in constructor)
      const cache = (validator as any).entraValidatorsByTenantId as Map<string, any>;
      expect(cache.size).toBe(1);
    });

    it('should bound Entra validator cache size', async () => {
      const validator = new InboundActivityTokenValidator(mockClientId, mockTenantId);
      mockValidateAccessToken.mockResolvedValue({ appid: mockClientId, sub: 'agent-id' });

      for (let i = 0; i < 101; i++) {
        const tenantId = `tenant-${i}`;
        const token = createUnverifiedToken({
          iss: `https://login.microsoftonline.com/${tenantId}/v2.0`,
          tid: tenantId,
        });
        await validator.check(`Bearer ${token}`, { serviceUrl: mockServiceUrl });
      }

      const cache = (validator as any).entraValidatorsByTenantId as Map<string, JwtValidator>;
      expect(cache.size).toBe(100);
      expect(cache.has('tenant-0')).toBe(false);
      expect(cache.has('tenant-100')).toBe(true);
    });
  });

  describe('sovereign cloud support', () => {
    it('should use public cloud defaults when no cloud provided', () => {
      new InboundActivityTokenValidator(mockClientId, mockTenantId);

      expect(JwtValidator).toHaveBeenCalledWith(
        expect.objectContaining({
          validateIssuer: { allowedIssuer: 'https://api.botframework.com' },
          jwksUriOptions: {
            type: 'uri',
            uri: 'https://login.botframework.com/v1/.well-known/keys',
          },
        }),
        undefined
      );
    });

    it('should use US_GOV cloud issuer and JWKS URI', () => {
      new InboundActivityTokenValidator(mockClientId, mockTenantId, undefined, undefined, US_GOV);

      expect(JwtValidator).toHaveBeenCalledWith(
        expect.objectContaining({
          loginEndpoint: 'https://login.microsoftonline.us',
          validateIssuer: { allowedIssuer: 'https://api.botframework.us' },
          jwksUriOptions: {
            type: 'uri',
            uri: 'https://login.botframework.azure.us/v1/.well-known/keys',
          },
        }),
        undefined
      );
    });

    it('should use CHINA cloud issuer and JWKS URI', () => {
      new InboundActivityTokenValidator(mockClientId, mockTenantId, undefined, undefined, CHINA);

      expect(JwtValidator).toHaveBeenCalledWith(
        expect.objectContaining({
          loginEndpoint: 'https://login.partner.microsoftonline.cn',
          validateIssuer: { allowedIssuer: 'https://api.botframework.azure.cn' },
          jwksUriOptions: {
            type: 'uri',
            uri: 'https://login.botframework.azure.cn/v1/.well-known/keys',
          },
        }),
        undefined
      );
    });
  });
});
