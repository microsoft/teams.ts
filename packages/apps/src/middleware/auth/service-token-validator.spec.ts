import { US_GOV, CHINA } from '@microsoft/teams.api';

import { JwtValidator } from './jwt-validator';
import { ServiceTokenValidator } from './service-token-validator';

// Mock JwtValidator
jest.mock('./jwt-validator');

describe('ServiceTokenValidator', () => {
  const mockClientId = 'test-client-id';
  const mockTenantId = 'test-tenant-id';
  const mockServiceUrl = 'https://smba.trafficmanager.net/amer/';

  let mockValidateAccessToken: jest.Mock;

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
    it('should extract token from Bearer prefix and convert payload to IToken', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

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
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

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
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

      mockValidateAccessToken.mockResolvedValue(null);

      const authHeader = 'Bearer invalid-token';
      const body = { serviceUrl: mockServiceUrl };

      await expect(validator.check(authHeader, body)).rejects.toThrow('Invalid token');
    });

    it('should pass serviceUrl validation option from request body', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

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
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

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
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

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

    it('should reject serviceUrl from non-allowed domain', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'https://evil.com/api'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'https://evil.com/api' };

      await expect(validator.check(authHeader, body)).rejects.toThrow(
        'Service URL is not from an allowed domain'
      );
    });

    it('should accept serviceUrl from cloud preset', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'https://smba.trafficmanager.net/amer/'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'https://smba.trafficmanager.net/amer/' };

      const result = await validator.check(authHeader, body);
      expect(result.serviceUrl).toBe('https://smba.trafficmanager.net/amer/');
    });

    it('should accept localhost serviceUrl', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'http://localhost:3978'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'http://localhost:3978' };

      const result = await validator.check(authHeader, body);
      expect(result.serviceUrl).toBe('http://localhost:3978');
    });

    it('should reject botframework.com by default (non-Teams channel)', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'https://webchat.botframework.com'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'https://webchat.botframework.com' };

      await expect(validator.check(authHeader, body)).rejects.toThrow(
        'is not from an allowed domain'
      );
    });

    it('should reject domain that contains allowed suffix as substring', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'https://botframework.com.evil.com'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'https://botframework.com.evil.com' };

      await expect(validator.check(authHeader, body)).rejects.toThrow(
        'is not from an allowed domain'
      );
    });

    it('should accept serviceUrl with additionalAllowedDomains', async () => {
      const validator = new ServiceTokenValidator(
        mockClientId, mockTenantId, undefined, undefined, ['api.custom-channel.com']
      );

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'https://api.custom-channel.com'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'https://api.custom-channel.com' };

      const result = await validator.check(authHeader, body);
      expect(result.serviceUrl).toBe('https://api.custom-channel.com');
    });

    it('should reject attacker-controlled trafficmanager subdomain', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'https://attacker.trafficmanager.net'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'https://attacker.trafficmanager.net' };

      await expect(validator.check(authHeader, body)).rejects.toThrow(
        'is not from an allowed domain'
      );
    });

    it('should accept smba.onyx.prod.teams.trafficmanager.net', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'https://smba.onyx.prod.teams.trafficmanager.net'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'https://smba.onyx.prod.teams.trafficmanager.net' };

      const result = await validator.check(authHeader, body);
      expect(result.serviceUrl).toBe('https://smba.onyx.prod.teams.trafficmanager.net');
    });

    it('should accept any domain when additionalAllowedDomains includes wildcard', async () => {
      const validator = new ServiceTokenValidator(
        mockClientId, mockTenantId, undefined, undefined, ['*']
      );

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'https://any-domain.com/api'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'https://any-domain.com/api' };

      const result = await validator.check(authHeader, body);
      expect(result.serviceUrl).toBe('https://any-domain.com/api');
    });

    it('should accept US Government serviceUrl with US_GOV cloud', async () => {
      const { US_GOV } = await import('@microsoft/teams.api');
      const validator = new ServiceTokenValidator(
        mockClientId, mockTenantId, undefined, undefined, undefined, US_GOV
      );

      const mockPayload = {
        appid: mockClientId,
        sub: 'bot-id',
        serviceurl: 'https://smba.infra.gov.teams.microsoft.us/'
      };

      mockValidateAccessToken.mockResolvedValue(mockPayload);

      const authHeader = 'Bearer test-token';
      const body = { serviceUrl: 'https://smba.infra.gov.teams.microsoft.us/' };

      const result = await validator.check(authHeader, body);
      expect(result.serviceUrl).toBe('https://smba.infra.gov.teams.microsoft.us/');
    });

    it('should prefer body.serviceUrl over payload.serviceurl', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

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
  });

  describe('sovereign cloud support', () => {
    it('should use public cloud defaults when no cloud provided', () => {
      new ServiceTokenValidator(mockClientId, mockTenantId);

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
      new ServiceTokenValidator(mockClientId, mockTenantId, undefined, undefined, undefined, US_GOV);

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
      new ServiceTokenValidator(mockClientId, mockTenantId, undefined, undefined, undefined, CHINA);

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
