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

    it('should prefer payload.serviceurl over body.serviceUrl', async () => {
      const validator = new ServiceTokenValidator(mockClientId, mockTenantId);

      const payloadServiceUrl = 'https://payload.example.com';
      const bodyServiceUrl = 'https://body.example.com';

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
});
