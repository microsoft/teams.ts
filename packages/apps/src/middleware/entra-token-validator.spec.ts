import jwt from 'jsonwebtoken';

import * as EntraTokenValidatorComponent from './entra-token-validator';
const { EntraTokenValidator, getJwksClient } = EntraTokenValidatorComponent;

const mockDate = new Date('2025-10-01T00:00:00Z');
const mockClientId = 'mock-client-id';
const mockTenantId = 'mock-tenant-id';
const mockLogger = {
  error: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  log: jest.fn(),
  child: jest.fn().mockReturnThis(),
};
const mockToken = {
  header: {
    kid: 'mock-kid',
    alg: 'RS256',
    typ: 'JWT',
  },
  signature: 'john hancock',
  payload: {
    iat: Math.floor(mockDate.getTime() / 1000 - 60),
    exp: Math.floor(mockDate.getTime() / 1000 + 60),
    scp: 'access_as_user',
    aud: `api://${mockClientId}`,
    iss: `https://login.microsoftonline.com/${mockTenantId}/v2.0`,
  },
};

jest.mock('jsonwebtoken', () => {
  return { ...jest.requireActual('jsonwebtoken'), decode: jest.fn(), verify: jest.fn() };
});

describe('getJwksClient', () => {
  it('should return a JWKS client with the correct URI', () => {
    const jwksClient = getJwksClient({
      jwksUri: 'https://login.microsoftonline.com/mock-tenant-id/discovery/v2.0/keys',
    });
    expect(jwksClient).toBeDefined();
    expect(jwksClient).toHaveProperty('getSigningKey', expect.any(Function));
    expect(jwksClient).toHaveProperty('options', {
      cache: true,
      jwksUri: 'https://login.microsoftonline.com/mock-tenant-id/discovery/v2.0/keys',
      rateLimit: false,
      timeout: 30000,
    });
  });
});

describe('EntraTokenValidator', () => {
  let getJwksClientSpy: jest.SpyInstance;
  const mockGetPublicKey = jest.fn();
  const mockDecodeToken = jwt.decode as jest.Mock;
  const mockVerifyToken = jwt.verify as jest.Mock;

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(mockDate);
    getJwksClientSpy = jest
      .spyOn(EntraTokenValidatorComponent, 'getJwksClient')
      .mockImplementation(() => {
        return {
          getSigningKey: jest.fn().mockResolvedValue({
            getPublicKey: mockGetPublicKey.mockReturnValue('mockedPublicKey'),
          }),
          getSigningKeys: jest.fn(),
          getKeys: jest.fn(),
        };
      });

    mockDecodeToken.mockImplementation(() => mockToken);
    mockVerifyToken.mockImplementation(() => mockToken);
    mockGetPublicKey.mockImplementation(
      jest.fn().mockResolvedValue(() => {
        return {
          publicKey: 'mock-public-key',
          rsaPublicKey: 'mock-rsa-public-key',
        };
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  describe('constructor', () => {
    it('can create an EntraTokenValidator without options', () => {
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });
      expect(getJwksClientSpy).toHaveBeenCalledTimes(1);
      expect(getJwksClientSpy).toHaveBeenCalledWith({
        jwksUri: 'https://login.microsoftonline.com/mock-tenant-id/discovery/v2.0/keys',
      });
      expect(entraTokenValidator.clientId).toEqual(mockClientId);
      expect(entraTokenValidator.tenantId).toEqual(mockTenantId);
      expect(entraTokenValidator.validIssuerTenantIds).toEqual([mockTenantId]);
    });

    it.each`
      allowedTenantIds          | description
      ${undefined}              | ${'no allowed tenantIds'}
      ${[]}                     | ${'empty list of allowed tenantIds'}
      ${['tenant1', 'tenant2']} | ${'two allowed tenantIds'}
    `(
      'can create an EntraTokenValidator for a single tenant app with options.allowedTenantIds set to $description',
      ({ allowedTenantIds }) => {
        const entraTokenValidator = new EntraTokenValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          options: { allowedTenantIds },
        });
        expect(getJwksClientSpy).toHaveBeenCalledTimes(1);
        expect(getJwksClientSpy).toHaveBeenCalledWith({
          jwksUri: 'https://login.microsoftonline.com/mock-tenant-id/discovery/v2.0/keys',
        });
        expect(entraTokenValidator.clientId).toEqual(mockClientId);
        expect(entraTokenValidator.tenantId).toEqual(mockTenantId);
        expect(entraTokenValidator.validIssuerTenantIds).toEqual([mockTenantId]);
      }
    );

    it.each`
      tenantId           | allowedTenantIds          | validIssuerTenantIds      | description
      ${'common'}        | ${undefined}              | ${[]}                     | ${'no allowed tenantIds'}
      ${'common'}        | ${[]}                     | ${[]}                     | ${'empty list of allowed tenantIds'}
      ${'common'}        | ${['tenant1', 'tenant2']} | ${['tenant1', 'tenant2']} | ${'two allowed tenantIds'}
      ${'organizations'} | ${['tenant1', 'tenant2']} | ${['tenant1', 'tenant2']} | ${'two allowed tenantIds'}
      ${'consumers'}     | ${['tenant1', 'tenant2']} | ${['tenant1', 'tenant2']} | ${'two allowed tenantIds'}
    `(
      'can create an EntraTokenValidator for tenantId "$tenantId" with $description',
      ({ tenantId, allowedTenantIds, validIssuerTenantIds }) => {
        const entraTokenValidator = new EntraTokenValidator({
          clientId: mockClientId,
          tenantId,
          options: { allowedTenantIds },
        });
        expect(getJwksClientSpy).toHaveBeenCalledTimes(1);
        expect(getJwksClientSpy).toHaveBeenCalledWith({
          jwksUri: `https://login.microsoftonline.com/${tenantId}/discovery/v2.0/keys`,
        });
        expect(entraTokenValidator.clientId).toEqual(mockClientId);
        expect(entraTokenValidator.tenantId).toEqual(tenantId);
        expect(entraTokenValidator.validIssuerTenantIds).toEqual(validIssuerTenantIds);
      }
    );
  });

  describe('getTokenPayload', () => {
    it('should return the token payload', () => {
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });
      const tokenPayload = entraTokenValidator.getTokenPayload(mockToken);
      expect(tokenPayload).toEqual(mockToken.payload);
    });

    it('returns null when token payload is not an object', () => {
      const token = {
        ...mockToken,
        payload: 'not-an-object',
      };
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const tokenPayload = entraTokenValidator.getTokenPayload(token);
      expect(tokenPayload).toBeNull();
      expect(mockLogger.error).not.toHaveBeenCalled();
    });
  });

  describe('validateAccessToken', () => {
    it('should return null if no token is provided', async () => {
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });
      const result = await entraTokenValidator.validateAccessToken(mockLogger, '');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(1);
      expect(mockLogger.error).toHaveBeenCalledWith('No token provided');
    });

    it('should catch and log exception if the token cannot be decoded', async () => {
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const exception = new Error('Invalid token exception');
      mockDecodeToken.mockImplementation(() => {
        throw exception;
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'invalid-token');
      expect(result).toBeNull();
      expect(mockDecodeToken).toHaveBeenCalledWith('invalid-token', { complete: true });
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith(exception);
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to decode the access token');
    });

    it('should return null if public key can not be found', async () => {
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });
      mockGetPublicKey.mockReturnValue(null);
      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(1);
      expect(mockLogger.error).toHaveBeenCalledWith(
        'Failed to find public key for the key identifier "mock-kid"'
      );
    });

    it('should return null if public key can not be fetched', async () => {
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const exception = new Error('Public key fetch error');
      mockGetPublicKey.mockImplementation(() => {
        throw exception;
      });
      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith(exception);
      expect(mockLogger.error).toHaveBeenCalledWith(
        'Failed to find public key for the key identifier "mock-kid"'
      );
    });

    it('should return null if token signature can not be verified', async () => {
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const exception = new Error('Token signature verification error');
      mockVerifyToken.mockImplementation(() => {
        throw exception;
      });
      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith(exception);
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the token signature');
    });
  });

  describe('validateAccessTokenClaims', () => {
    it.each`
      tokenScp             | requiredScope        | description
      ${undefined}         | ${undefined}         | ${'no scope is present or required'}
      ${'access_as_user'}  | ${undefined}         | ${'no scope is required'}
      ${'access_as_santa'} | ${'access_as_santa'} | ${'the requested scope is present'}
    `('returns a token when $description', async ({ tokenScp, requiredScope }) => {
      const token = {
        ...mockToken,
        payload: { ...mockToken.payload, scp: tokenScp },
      };
      mockVerifyToken.mockImplementation(() => token);

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(
        mockLogger,
        'bearer-token',
        requiredScope
      );
      expect(result).toEqual(token);
      expect(mockLogger.error).not.toHaveBeenCalled();
    });

    it.each`
      audience
      ${mockClientId}
      ${`api://${mockClientId}`}
    `('returns a token when audience is $audience', async ({ audience }) => {
      const token = {
        ...mockToken,
        payload: { ...mockToken.payload, aud: audience },
      };
      mockVerifyToken.mockImplementation(() => token);

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toEqual(token);
      expect(mockLogger.error).not.toHaveBeenCalled();
    });

    it.each`
      tenantId        | allowedTenantIds                      | description
      ${'common'}     | ${undefined}                          | ${'allowedTenantIds is undefined'}
      ${mockTenantId} | ${['unrelated-tenant']}               | ${'allowedTenantIds is set to some unrelated tenant'}
      ${'common'}     | ${['unrelated-tenant', mockTenantId]} | ${'allowedTenantIds includes the token issuer'}
    `(
      'returns a token when tenantId is $tenantId and $description',
      async ({ tenantId, allowedTenantIds }) => {
        const token = {
          ...mockToken,
          payload: {
            ...mockToken.payload,
            iss: `https://login.microsoftonline.com/${mockTenantId}/`,
          },
        };
        mockVerifyToken.mockImplementation(() => token);

        const entraTokenValidator = new EntraTokenValidator({
          clientId: mockClientId,
          tenantId,
          options: { allowedTenantIds },
        });

        const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
        expect(result).toEqual(token);
        expect(mockLogger.error).not.toHaveBeenCalled();
      }
    );

    it('should return null if token payload is missing', async () => {
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      mockVerifyToken.mockImplementation(() => ({
        ...mockToken,
        payload: undefined,
      }));

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith('Invalid token payload.');
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });

    it('should return null if token issued-at value is missing', async () => {
      mockVerifyToken.mockImplementation(() => ({
        ...mockToken,
        payload: { ...mockToken.payload, iat: undefined },
      }));

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith('The token is expired or not yet valid.');
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });

    it('should return null if token issued-at value is in the future', async () => {
      mockVerifyToken.mockImplementation(() => ({
        ...mockToken,
        payload: { ...mockToken.payload, iat: mockDate.getTime() / 1000 + 1 },
      }));

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith('The token is expired or not yet valid.');
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });

    it('should return null if token expires-at value is missing', async () => {
      mockVerifyToken.mockImplementation(() => ({
        ...mockToken,
        payload: { ...mockToken.payload, exp: undefined },
      }));

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith('The token is expired or not yet valid.');
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });

    it('should return null if token expires-at value is in the past', async () => {
      mockVerifyToken.mockImplementation(() => ({
        ...mockToken,
        payload: { ...mockToken.payload, exp: mockDate.getTime() / 1000 - 1 },
      }));

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith('The token is expired or not yet valid.');
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });

    it('should return null if audience is missing', async () => {
      mockVerifyToken.mockImplementation(() => ({
        ...mockToken,
        payload: { ...mockToken.payload, aud: undefined },
      }));

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith(
        'The token is not issued for the expected audience.'
      );
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });

    it('should return null if audience is unexpected', async () => {
      mockVerifyToken.mockImplementation(() => ({
        ...mockToken,
        payload: { ...mockToken.payload, aud: 'api://wrong-client-id' },
      }));

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith(
        'The token is not issued for the expected audience.'
      );
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });

    it('should return null if issuer is missing', async () => {
      mockVerifyToken.mockImplementation(() => ({
        ...mockToken,
        payload: { ...mockToken.payload, iss: undefined },
      }));

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith('Invalid token issuer.');
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });

    it('should return null if issuer is unexpected', async () => {
      mockVerifyToken.mockImplementation(() => ({
        ...mockToken,
        payload: {
          ...mockToken.payload,
          iss: 'https://login.microsoftonline.com/some-other-tenant/v2.0',
        },
      }));

      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(mockLogger, 'bearer-token');
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith(
        'The token is issued by unexpected tenant: https://login.microsoftonline.com/some-other-tenant/v2.0'
      );
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });

    it('should return null if token is issued for the wrong scope', async () => {
      const entraTokenValidator = new EntraTokenValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
      });

      const result = await entraTokenValidator.validateAccessToken(
        mockLogger,
        'bearer-token',
        'access_as_santa_claus'
      );
      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledTimes(2);
      expect(mockLogger.error).toHaveBeenCalledWith(
        'The token is not issued for the required scope: access_as_santa_claus'
      );
      expect(mockLogger.error).toHaveBeenCalledWith('Failed to validate the access token claims');
    });
  });
});
