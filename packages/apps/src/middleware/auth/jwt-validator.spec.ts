import crypto from 'crypto';

import jwt from 'jsonwebtoken';

import { JwtValidator, createEntraTokenValidator } from './jwt-validator';

// Generate test RSA key pair
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

// No need to mock jsonwebtoken anymore since we're using real tokens

jest.mock('jwks-rsa', () => {
  return jest.fn(() => ({
    getSigningKey: jest.fn()
  }));
});

const mockDate = new Date('2025-01-15T12:00:00Z');
const mockClientId = 'test-client-id';
const mockTenantId = 'test-tenant-id';
const mockLogger = {
  error: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  trace: jest.fn(),
  log: jest.fn(),
  child: jest.fn().mockReturnThis(),
};

const mockTokenPayload = {
  iat: Math.floor(mockDate.getTime() / 1000 - 300), // 5 minutes ago
  exp: Math.floor(mockDate.getTime() / 1000 + 300), // 5 minutes from now
  aud: mockClientId,
  iss: `https://login.microsoftonline.com/${mockTenantId}/v2.0`,
  scp: 'User.Read',
  serviceurl: 'https://example.com/api',
};

const createTestToken = (payload = mockTokenPayload) => {
  return jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    keyid: 'test-kid',
    header: {
      kid: 'test-kid',
      alg: 'RS256',
      typ: 'JWT'
    }
  });
};

// Mock jwks-rsa
const mockGetSigningKey = jest.fn();
jest.mock('jwks-rsa', () => {
  return jest.fn(() => ({
    getSigningKey: mockGetSigningKey
  }));
});

describe('JwtValidator', () => {
  let validToken: string;

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(mockDate);
    
    // Create a valid token for testing
    validToken = createTestToken();

    // Mock successful key retrieval to return our test public key
    mockGetSigningKey.mockImplementation((_kid, callback) => {
      callback(null, {
        getPublicKey: () => publicKey,
        publicKey: publicKey
      });
    });

    // Clear all mocks
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  describe('validateAccessToken', () => {
    describe('basic validation', () => {
      it('should throw error for empty token', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        await expect(validator.validateAccessToken('')).rejects.toThrow('No token provided');
      });

      it('should return null for invalid JWT', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        }, mockLogger);

        const result = await validator.validateAccessToken('invalid-token');

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith('JWT verification failed:', expect.any(Error));
      });

      it('should return payload for valid token', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should handle JWKS key retrieval errors', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        }, mockLogger);

        mockGetSigningKey.mockImplementation((_kid, callback) => {
          callback(new Error('Key not found'), null);
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith('JWT verification failed:', expect.any(Error));
      });
    });

    describe('audience validation', () => {
      it('should accept clientId audience by default', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it.each([
        ['clientId', mockClientId],
        ['api://botid-{clientId}', `api://botid-${mockClientId}`],
        ['api://{clientId}', `api://${mockClientId}`],
      ])('should accept %s audience', async (_label, aud) => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        const token = createTestToken({ ...mockTokenPayload, aud });
        const result = await validator.validateAccessToken(token);

        expect(result).not.toBeNull();
      });

      it('should accept custom audience values', async () => {
        const customAudience = 'api://my-custom-app.contoso.com/test-client-id';
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          audience: [customAudience],
          jwksUriOptions: { type: 'tenantId' }
        });

        const token = createTestToken({ ...mockTokenPayload, aud: customAudience });
        const result = await validator.validateAccessToken(token);

        expect(result).not.toBeNull();
      });

      it('should reject unrecognized audience', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        }, mockLogger);

        const token = createTestToken({ ...mockTokenPayload, aud: 'api://wrong-client-id' });
        const result = await validator.validateAccessToken(token);

        expect(result).toBeNull();
      });
    });

    describe('issuer validation', () => {
      it('should skip issuer validation when not configured', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should validate specific allowed issuer', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer: { allowedIssuer: 'https://trusted-issuer.com' }
        }, mockLogger);

        const invalidIssuerToken = createTestToken({
          ...mockTokenPayload,
          iss: 'https://invalid-issuer.com'
        });
        
        const result = await validator.validateAccessToken(invalidIssuerToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith(
          'Custom validation failed:',
          expect.objectContaining({
            message: expect.stringContaining('does not match allowed issuer')
          })
        );
      });

      it('should accept valid specific issuer', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer: { allowedIssuer: `https://login.microsoftonline.com/${mockTenantId}/v2.0` }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should validate tenant-based issuer for single-tenant apps', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer: { allowedTenantIds: ['different-tenant'] }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload)); // Single-tenant ignores allowedTenantIds
      });

      it('should accept v1 sts issuer for single-tenant apps', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer: { allowedTenantIds: ['different-tenant'] }
        });

        const token = createTestToken({
          ...mockTokenPayload,
          iss: `https://sts.windows.net/${mockTenantId}/`
        });
        const result = await validator.validateAccessToken(token);

        expect(result).toEqual(expect.objectContaining({
          ...mockTokenPayload,
          iss: `https://sts.windows.net/${mockTenantId}/`
        }));
      });

      it('should validate tenant-based issuer for multi-tenant apps', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: 'common',
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer: { allowedTenantIds: [mockTenantId] }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should accept v1 sts issuer for multi-tenant apps', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: 'common',
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer: { allowedTenantIds: [mockTenantId] }
        });

        const token = createTestToken({
          ...mockTokenPayload,
          iss: `https://sts.windows.net/${mockTenantId}/`
        });
        const result = await validator.validateAccessToken(token);

        expect(result).toEqual(expect.objectContaining({
          ...mockTokenPayload,
          iss: `https://sts.windows.net/${mockTenantId}/`
        }));
      });

      it('should reject invalid tenant issuer for multi-tenant apps', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: 'common',
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer: { allowedTenantIds: ['different-tenant'] }
        }, mockLogger);

        const result = await validator.validateAccessToken(validToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith(
          'Custom validation failed:',
          expect.objectContaining({
            message: expect.stringContaining('not in allowed tenant IDs')
          })
        );
      });

      it.each([
        ['empty object', {} as any],
        ['allowedTenantIds: undefined', { allowedTenantIds: undefined }],
        ['allowedTenantIds: []', { allowedTenantIds: [] }],
      ])('should skip validation when validateIssuer is %s', async (_label, validateIssuer) => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: 'common',
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should throw when allowedTenantIds is configured but tenantId is missing', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          // tenantId intentionally omitted
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer: { allowedTenantIds: [mockTenantId] }
        }, mockLogger);

        const result = await validator.validateAccessToken(validToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith(
          'Custom validation failed:',
          expect.objectContaining({
            message: 'Tenant ID is required when allowedTenantIds is configured'
          })
        );
      });

      it('should reject token with missing issuer', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateIssuer: { allowedIssuer: 'https://trusted-issuer.com' }
        }, mockLogger);

        const noIssuerToken = createTestToken({
          ...mockTokenPayload,
          iss: undefined as any
        });
        
        const result = await validator.validateAccessToken(noIssuerToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith(
          'Custom validation failed:',
          expect.objectContaining({
            message: 'Token missing issuer claim'
          })
        );
      });
    });

    describe('scope validation', () => {
      it('should skip scope validation when not configured', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should validate required scope', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateScope: { requiredScope: 'User.Read' }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should reject token with substring-matching scope', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateScope: { requiredScope: 'User.Read' }
        }, mockLogger);

        const substringToken = createTestToken({
          ...mockTokenPayload,
          scp: 'User.ReadBasic.All'
        });

        const result = await validator.validateAccessToken(substringToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith(
          'Custom validation failed:',
          expect.objectContaining({
            message: 'Token missing required scope: User.Read'
          })
        );
      });

      it('should accept exact scope among multiple scopes', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateScope: { requiredScope: 'User.Read' }
        });

        const multiScopeToken = createTestToken({
          ...mockTokenPayload,
          scp: 'Mail.Read User.Read Files.ReadWrite'
        });

        const result = await validator.validateAccessToken(multiScopeToken);

        expect(result).toEqual(expect.objectContaining({
          ...mockTokenPayload,
          scp: 'Mail.Read User.Read Files.ReadWrite'
        }));
      });

      it('should reject token with missing scope', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateScope: { requiredScope: 'Admin.ReadWrite' }
        }, mockLogger);

        const result = await validator.validateAccessToken(validToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith(
          'Custom validation failed:',
          expect.objectContaining({
            message: 'Token missing required scope: Admin.ReadWrite'
          })
        );
      });

      it('should handle undefined scope in token', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateScope: { requiredScope: 'User.Read' }
        }, mockLogger);

        const noScopeToken = createTestToken({
          ...mockTokenPayload,
          scp: undefined as any
        });
        
        const result = await validator.validateAccessToken(noScopeToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith(
          'Custom validation failed:',
          expect.objectContaining({
            message: 'Token missing required scope: User.Read'
          })
        );
      });
    });

    describe('service URL validation', () => {
      it('should skip service URL validation when not configured', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should validate matching service URL', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateServiceUrl: { expectedServiceUrl: 'https://example.com/api' }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should normalize service URLs (remove trailing slash)', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateServiceUrl: { expectedServiceUrl: 'https://example.com/api/' }
        });

        const result = await validator.validateAccessToken(validToken);

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should reject token with missing service URL', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateServiceUrl: { expectedServiceUrl: 'https://example.com/api' }
        }, mockLogger);

        const noServiceUrlToken = createTestToken({
          ...mockTokenPayload,
          serviceurl: undefined as any
        });
        
        const result = await validator.validateAccessToken(noServiceUrlToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith(
          'Custom validation failed:',
          expect.objectContaining({
            message: 'Token missing serviceurl claim'
          })
        );
      });

      it('should reject token with mismatched service URL', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateServiceUrl: { expectedServiceUrl: 'https://different.com/api' }
        }, mockLogger);

        const result = await validator.validateAccessToken(validToken);

        expect(result).toBeNull();
        expect(mockLogger.error).toHaveBeenCalledWith(
          'Custom validation failed:',
          expect.objectContaining({
            message: expect.stringContaining('Service URL mismatch')
          })
        );
      });
    });

    describe('override options', () => {
      it('should override scope validation per request', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateScope: { requiredScope: 'User.Read' }
        });

        const result = await validator.validateAccessToken('valid-token', {
          validateScope: { requiredScope: 'Admin.ReadWrite' }
        });

        expect(result).toBeNull(); // Should fail because token has 'User.Read' not 'Admin.ReadWrite'
      });

      it('should override service URL validation per request', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          validateServiceUrl: { expectedServiceUrl: 'https://example.com/api' }
        });

        const result = await validator.validateAccessToken('valid-token', {
          validateServiceUrl: { expectedServiceUrl: 'https://different.com/api' }
        });

        expect(result).toBeNull(); // Should fail because URLs don't match
      });

      it('should add validation when not configured in constructor', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        const result = await validator.validateAccessToken(validToken, {
          validateScope: { requiredScope: 'User.Read' }
        });

        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });
    });

    describe('JWKS URI options', () => {
      it('should use tenant-based JWKS URI', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        await validator.validateAccessToken('valid-token');

        // Should create JWKS client with tenant-specific URI
        expect(validator.options.jwksUriOptions).toEqual({ type: 'tenantId' });
      });

      it('should use custom JWKS URI', async () => {
        const customUri = 'https://custom-issuer.com/.well-known/jwks.json';
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'uri', uri: customUri }
        });

        await validator.validateAccessToken('valid-token');

        expect(validator.options.jwksUriOptions).toEqual({ type: 'uri', uri: customUri });
      });
    });

    describe('clock tolerance', () => {
      it('should use default clock tolerance', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' }
        });

        const result = await validator.validateAccessToken(validToken);
        
        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });

      it('should use custom clock tolerance', async () => {
        const validator = new JwtValidator({
          clientId: mockClientId,
          tenantId: mockTenantId,
          jwksUriOptions: { type: 'tenantId' },
          clockTolerance: 600 // 10 minutes
        });

        const result = await validator.validateAccessToken(validToken);
        
        expect(result).toEqual(expect.objectContaining(mockTokenPayload));
      });
    });
  });

  describe('factory functions', () => {
    describe('createEntraTokenValidator', () => {
      it('should create validator with minimal options', () => {
        const validator = createEntraTokenValidator(mockTenantId, mockClientId);

        expect(validator).toBeInstanceOf(JwtValidator);
        expect(validator.options.clientId).toBe(mockClientId);
        expect(validator.options.tenantId).toBe(mockTenantId);
        expect(validator.options.jwksUriOptions).toEqual({ type: 'tenantId' });
      });

      it('should create validator with all options', () => {
        const validator = createEntraTokenValidator(mockTenantId, mockClientId, {
          allowedTenantIds: ['tenant1', 'tenant2'],
          requiredScope: 'User.Read',
          logger: mockLogger
        });

        expect(validator).toBeInstanceOf(JwtValidator);
        expect(validator.options.validateIssuer).toEqual({
          allowedTenantIds: ['tenant1', 'tenant2']
        });
        expect(validator.options.validateScope).toEqual({
          requiredScope: 'User.Read'
        });
      });

      it('should create validator without scope when not provided', () => {
        const validator = createEntraTokenValidator(mockTenantId, mockClientId, {
          allowedTenantIds: ['tenant1']
        });

        expect(validator.options.validateScope).toBeUndefined();
      });

      it('should pass applicationIdUri as audience', () => {
        const validator = createEntraTokenValidator(mockTenantId, mockClientId, {
          applicationIdUri: 'api://my-app.contoso.com/test-client-id'
        });

        expect(validator.options.audience).toEqual(['api://my-app.contoso.com/test-client-id']);
      });

      it('should not set audience when no audience options are provided', () => {
        const validator = createEntraTokenValidator(mockTenantId, mockClientId);

        expect(validator.options.audience).toBeUndefined();
      });
    });

  });

  describe('error handling and logging', () => {
    it('should log JWT verification errors', async () => {
      const validator = new JwtValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
        jwksUriOptions: { type: 'tenantId' }
      }, mockLogger);

      const result = await validator.validateAccessToken('expired-token');

      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledWith(
        'JWT verification failed:',
        expect.any(Error)
      );
    });

    it('should log custom validation errors', async () => {
      const validator = new JwtValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
        jwksUriOptions: { type: 'tenantId' },
        validateScope: { requiredScope: 'Admin.ReadWrite' }
      }, mockLogger);

      const invalidScopeToken = createTestToken({
        ...mockTokenPayload,
        scp: 'User.Read' // Token has User.Read but validator expects Admin.ReadWrite
      });
      
      const result = await validator.validateAccessToken(invalidScopeToken);

      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledWith(
        'Custom validation failed:',
        expect.any(Error)
      );
    });

    it('should log JWKS key retrieval errors', async () => {
      const validator = new JwtValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
        jwksUriOptions: { type: 'tenantId' }
      }, mockLogger);

      mockGetSigningKey.mockImplementation((_kid, callback) => {
        callback(new Error('Network error'), null);
      });

      const result = await validator.validateAccessToken(validToken);

      expect(result).toBeNull();
      expect(mockLogger.error).toHaveBeenCalledWith(
        'JWT verification failed:',
        expect.any(Error)
      );
    });
  });

  describe('loginEndpoint support', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const jwksRsa = require('jwks-rsa');

    beforeEach(() => {
      jwksRsa.mockClear();
      mockGetSigningKey.mockImplementation((_kid: string, callback: (...args: unknown[]) => void) => {
        callback(null, {
          getPublicKey: () => publicKey,
          publicKey: publicKey
        });
      });
    });

    it('should use default login endpoint for JWKS URI when loginEndpoint not specified', async () => {
      const validator = new JwtValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
        jwksUriOptions: { type: 'tenantId' }
      }, mockLogger as any);

      await validator.validateAccessToken(validToken);

      expect(jwksRsa).toHaveBeenCalledWith({
        jwksUri: `https://login.microsoftonline.com/${mockTenantId}/discovery/v2.0/keys`
      });
    });

    it('should use custom loginEndpoint for JWKS URI construction', async () => {
      const validator = new JwtValidator({
        clientId: mockClientId,
        tenantId: mockTenantId,
        loginEndpoint: 'https://login.microsoftonline.us',
        jwksUriOptions: { type: 'tenantId' }
      }, mockLogger as any);

      await validator.validateAccessToken(validToken);

      expect(jwksRsa).toHaveBeenCalledWith({
        jwksUri: `https://login.microsoftonline.us/${mockTenantId}/discovery/v2.0/keys`
      });
    });

    it('should use loginEndpoint for issuer prefix validation with allowedTenantIds', async () => {
      const govTenantId = 'gov-tenant-123';
      const govIssuer = `https://login.microsoftonline.us/${govTenantId}/v2.0`;

      const token = createTestToken({
        ...mockTokenPayload,
        aud: mockClientId,
        iss: govIssuer,
      });

      const validator = new JwtValidator({
        clientId: mockClientId,
        tenantId: govTenantId,
        loginEndpoint: 'https://login.microsoftonline.us',
        validateIssuer: { allowedTenantIds: [govTenantId] },
        jwksUriOptions: { type: 'tenantId' }
      }, mockLogger as any);

      const result = await validator.validateAccessToken(token);
      expect(result).not.toBeNull();
      expect(result?.iss).toBe(govIssuer);
    });

    it('should reject issuer from wrong cloud with loginEndpoint set', async () => {
      const govTenantId = 'gov-tenant-123';
      // Token issued by public cloud
      const publicIssuer = `https://login.microsoftonline.com/${govTenantId}/v2.0`;

      const token = createTestToken({
        ...mockTokenPayload,
        aud: mockClientId,
        iss: publicIssuer,
      });

      const validator = new JwtValidator({
        clientId: mockClientId,
        tenantId: govTenantId,
        loginEndpoint: 'https://login.microsoftonline.us',
        validateIssuer: { allowedTenantIds: [govTenantId] },
        jwksUriOptions: { type: 'tenantId' }
      }, mockLogger as any);

      const result = await validator.validateAccessToken(token);
      // Should be null because issuer from public cloud doesn't match gov loginEndpoint
      expect(result).toBeNull();
    });
  });

  // Modeled on the public Microsoft Entra access token samples documented at
  // https://learn.microsoft.com/en-us/entra/identity-platform/access-tokens
  describe('Microsoft Entra docs sample tokens', () => {
    // From the v2 sample token in the docs
    const v2TenantId = '72f988bf-86f1-41af-91ab-2d7cd011db47';
    const v2ClientId = '6e74172b-be56-4843-9ff4-e66a39bb12e3';
    const v2Payload = {
      iat: Math.floor(mockDate.getTime() / 1000 - 300),
      nbf: Math.floor(mockDate.getTime() / 1000 - 300),
      exp: Math.floor(mockDate.getTime() / 1000 + 300),
      aud: v2ClientId,
      iss: `https://login.microsoftonline.com/${v2TenantId}/v2.0`,
      azp: v2ClientId,
      scp: 'access_as_user',
      tid: v2TenantId,
      ver: '2.0',
    };

    // From the v1 sample token in the docs
    const v1TenantId = 'fa15d692-e9c7-4460-a743-29f2956fd429';
    const v1ClientId = 'ef1da9d4-ff77-4c3e-a005-840c3f830745';
    const v1Payload = {
      iat: Math.floor(mockDate.getTime() / 1000 - 300),
      nbf: Math.floor(mockDate.getTime() / 1000 - 300),
      exp: Math.floor(mockDate.getTime() / 1000 + 300),
      aud: v1ClientId,
      iss: `https://sts.windows.net/${v1TenantId}/`,
      appid: '75dbe77f-10a3-4e59-85fd-8c127544f17c',
      scp: 'user_impersonation',
      tid: v1TenantId,
      ver: '1.0',
    };

    it('passes the v2.0 docs sample (login.microsoftonline.com/.../v2.0)', async () => {
      const validator = new JwtValidator({
        clientId: v2ClientId,
        tenantId: v2TenantId,
        jwksUriOptions: { type: 'tenantId' },
        validateIssuer: { allowedTenantIds: [v2TenantId] },
        validateScope: { requiredScope: 'access_as_user' },
      }, mockLogger as any);

      const result = await validator.validateAccessToken(createTestToken(v2Payload as any));

      expect(result).toEqual(expect.objectContaining(v2Payload));
    });

    it('passes the v1.0 docs sample (sts.windows.net/.../) — single-tenant', async () => {
      const validator = new JwtValidator({
        clientId: v1ClientId,
        tenantId: v1TenantId,
        jwksUriOptions: { type: 'tenantId' },
        validateIssuer: { allowedTenantIds: [v1TenantId] },
        validateScope: { requiredScope: 'user_impersonation' },
      }, mockLogger as any);

      const result = await validator.validateAccessToken(createTestToken(v1Payload as any));

      expect(result).toEqual(expect.objectContaining(v1Payload));
    });

    it('passes the v1.0 docs sample (sts.windows.net/.../) — multi-tenant', async () => {
      const validator = new JwtValidator({
        clientId: v1ClientId,
        tenantId: 'common',
        jwksUriOptions: { type: 'tenantId' },
        validateIssuer: { allowedTenantIds: [v1TenantId] },
        validateScope: { requiredScope: 'user_impersonation' },
      }, mockLogger as any);

      const result = await validator.validateAccessToken(createTestToken(v1Payload as any));

      expect(result).toEqual(expect.objectContaining(v1Payload));
    });
  });

});