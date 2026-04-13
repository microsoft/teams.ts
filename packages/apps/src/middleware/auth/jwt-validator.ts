import jwt, { type JwtHeader, type JwtPayload, type SignCallback } from 'jsonwebtoken';
import jwksRsa, { JwksClient, SigningKey } from 'jwks-rsa';

import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { assertNever } from '../../utils/asserts';

const DEFAULTS = {
  clockTolerance: 300 // 5 minutes
};

export interface IJwtValidationOptions {
  /** Required: Application/Client ID for audience validation */
  clientId: string;

  // Additional audience values to accept beyond the defaults
  // (clientId, api://clientId, api://botid-clientId)
  audience?: string[];

  /**
   * This may be 'common', 'organizations', 'consumers' for multi-tenant apps,
   * or a specific tenant ID for single-tenant apps.
   */
  tenantId?: string;

  /**
   * The Azure AD login endpoint. Used for JWKS URI construction and issuer validation.
   * Defaults to "https://login.microsoftonline.com".
   */
  loginEndpoint?: string;

  /**
   * JWKS URI options for fetching public keys
   */
  jwksUriOptions: {
    type: 'tenantId'
  } | {
    type: 'uri'
    uri: string;
  };

  /** Optional: Validate required scope in token */
  validateScope?: { requiredScope: string };

  /** Optional: Validate service URL (Bot Framework specific) */
  validateServiceUrl?: { expectedServiceUrl: string };

  /** Optional: Custom issuer validation */
  validateIssuer?: {
    /** Allowed */
    allowedIssuer: string;
  } | {
    /** For multi-tenant apps, restrict to specific tenant IDs */
    allowedTenantIds?: string[];
  };

  /** Optional: Clock tolerance in seconds (default: 300) */
  clockTolerance?: number;
}

export class JwtValidator {
  public readonly options: IJwtValidationOptions;
  private readonly logger?: ILogger;
  private readonly jwksCache: Map<string, JwksClient> = new Map();

  constructor(options: IJwtValidationOptions, logger?: ILogger) {
    this.options = options;
    this.logger = logger?.child('jwt-validator') ?? new ConsoleLogger('jwt-validator');
  }

  /**
   * Validates a JWT token using the configured options
   */
  async validateAccessToken(
    rawToken: string,
    overrideOptions?: Pick<IJwtValidationOptions, 'validateServiceUrl' | 'validateScope'>
  ): Promise<JwtPayload | null> {
    if (!rawToken) {
      throw new Error('No token provided');
    }

    return new Promise((resolve) => {
      const verifyOptions: jwt.VerifyOptions = {
        audience: [
          this.options.clientId,
          `api://botid-${this.options.clientId}`,
          `api://${this.options.clientId}`,
          ...(this.options.audience ?? []),
        ],
        issuer: undefined,
        ignoreExpiration: false,
        algorithms: ['RS256'],
        clockTolerance: this.options.clockTolerance ?? DEFAULTS.clockTolerance
      };

      this.logger?.debug('Validating JWT token with options:', {
        audience: verifyOptions.audience,
        clockTolerance: verifyOptions.clockTolerance,
        algorithms: verifyOptions.algorithms
      });
      jwt.verify(rawToken, this.getSigningKey.bind(this), verifyOptions, (err, decoded) => {
        if (err) {
          this.logger?.error('JWT verification failed:', err);
          resolve(null);
          return;
        }

        if (!decoded || typeof decoded !== 'object') {
          this.logger?.error('Decoded token is not a valid object:', decoded);
          resolve(null);
          return;
        }
        this.logger?.debug('JWT verification succeeded');

        const payload = decoded;

        try {
          this.performCustomValidations(payload, overrideOptions);
          this.logger?.debug('Custom validations passed for token');
          resolve(payload);
        } catch (validationError) {
          this.logger?.error('Custom validation failed:', validationError);
          resolve(null);
        }
      });
    });
  }

  private getJwksClient() {
    switch (this.options.jwksUriOptions.type) {
      case 'tenantId':
        {
          const cachedClient = this.jwksCache.get(`${this.options.tenantId}`);
          if (cachedClient) {
            this.logger?.debug(`Using cached JWKS client for tenant ID: ${this.options.tenantId}`);
            return cachedClient;
          }
          const loginEndpoint = this.options.loginEndpoint ?? 'https://login.microsoftonline.com';
          this.jwksCache.set(`${this.options.tenantId}`, jwksRsa({
            jwksUri: `${loginEndpoint}/${this.options.tenantId}/discovery/v2.0/keys`,
          }));

          return this.jwksCache.get(`${this.options.tenantId}`)!;
        }

      case 'uri':
        {
          const cachedClient = this.jwksCache.get(this.options.jwksUriOptions.uri);
          if (cachedClient) {
            this.logger?.debug(`Using cached JWKS client for URI: ${this.options.jwksUriOptions.uri}`);
            return cachedClient;
          }
          this.jwksCache.set(this.options.jwksUriOptions.uri, jwksRsa({
            jwksUri: this.options.jwksUriOptions.uri,
          }));

          return this.jwksCache.get(this.options.jwksUriOptions.uri)!;
        }
      default:
        assertNever(this.options.jwksUriOptions, `Unknown JWKS URI options type: ${this.options.jwksUriOptions}`);
    }
  }

  private getSigningKey(header: JwtHeader, callback: SignCallback): void {
    const jwksClient = this.getJwksClient();
    jwksClient?.getSigningKey(header.kid, (err: Error | null, key: SigningKey | undefined): void => {
      if (err) {
        this.logger?.error('Failed to get signing key:', err);
        callback(err, undefined);
        return;
      }
      const signingKey = key?.getPublicKey();
      callback(null, signingKey);
    });
  }

  private validateIssuer(iss: string | undefined): void {
    const validateIssuer = this.options.validateIssuer;
    if (!validateIssuer) {
      return;
    }

    // Check for allowedIssuer (exact match validation)
    if ('allowedIssuer' in validateIssuer) {
      if (!validateIssuer.allowedIssuer) {
        return;
      }
      if (!iss) {
        throw new Error('Token missing issuer claim');
      }
      if (iss !== validateIssuer.allowedIssuer) {
        throw new Error(`Token issuer '${iss}' does not match allowed issuer '${validateIssuer.allowedIssuer}'`);
      }
    }

    // Check for allowedTenantIds (tenant-based validation)
    if ('allowedTenantIds' in validateIssuer) {
      if (!validateIssuer.allowedTenantIds?.length) {
        return;
      }

      if (!iss) {
        throw new Error('Token missing issuer claim');
      }

      if (!this.options.tenantId) {
        return;
      }

      const isMultiTenant = ['common', 'organizations', 'consumers'].includes(this.options.tenantId);
      const allowedTenantIds: string[] = [];
      if (isMultiTenant) {
        for (const tenantId of validateIssuer.allowedTenantIds) {
          if (!['common', 'organizations', 'consumers'].includes(tenantId)) {
            allowedTenantIds.push(tenantId);
          }
        }
      } else {
        // For single-tenant apps, only allow tokens issued by this app's tenant
        allowedTenantIds.push(this.options.tenantId);
      }

      if (allowedTenantIds.length === 0) {
        return;
      }

      const loginEndpoint = this.options.loginEndpoint ?? 'https://login.microsoftonline.com';
      if (!allowedTenantIds.some((tenantId) => iss.startsWith(`${loginEndpoint}/${tenantId}/`))) {
        throw new Error(`Token issuer '${iss}' not in allowed tenant IDs: ${allowedTenantIds.join(', ')}`);
      }
    }
  }

  private validateScope(scp: string | undefined, overrideValidateScope?: { requiredScope: string }): void {
    const validateScope = overrideValidateScope || this.options.validateScope;
    if (validateScope) {
      const scopes = scp ?? '';
      if (!scopes.includes(validateScope.requiredScope)) {
        throw new Error(`Token missing required scope: ${validateScope.requiredScope}`);
      }
    }
  }

  private validateServiceUrl(serviceUrl: string | undefined, overrideValidateServiceUrl?: { expectedServiceUrl: string }): void {
    const validateServiceUrl = overrideValidateServiceUrl || this.options.validateServiceUrl;
    if (validateServiceUrl) {
      if (!serviceUrl) {
        throw new Error('Token missing serviceurl claim');
      }

      const normalizedTokenUrl = serviceUrl.replace(/\/$/, '').toLowerCase();
      const normalizedExpectedUrl = validateServiceUrl.expectedServiceUrl.replace(/\/$/, '').toLowerCase();

      if (normalizedTokenUrl !== normalizedExpectedUrl) {
        throw new Error(`Service URL mismatch. Token: ${normalizedTokenUrl}, Expected: ${normalizedExpectedUrl}`);
      }
    }
  }

  private performCustomValidations(
    payload: JwtPayload,
    overrideOptions?: Pick<IJwtValidationOptions, 'validateServiceUrl' | 'validateScope'>
  ): void {
    this.validateIssuer(payload.iss);
    this.validateScope(payload.scp, overrideOptions?.validateScope);
    this.validateServiceUrl(payload.serviceurl, overrideOptions?.validateServiceUrl);
  }
}

// Factory functions for common scenarios
export const createEntraTokenValidator = (
  tenantId: string,
  clientId: string,
  options?: {
    allowedTenantIds?: string[];
    requiredScope?: string;
    applicationIdUri?: string;
    loginEndpoint?: string;
    logger?: ILogger
  },
) => {
  return new JwtValidator({
    clientId,
    tenantId,
    loginEndpoint: options?.loginEndpoint,
    audience: options?.applicationIdUri ? [options.applicationIdUri] : undefined,
    validateIssuer: {
      allowedTenantIds: options?.allowedTenantIds
    },
    validateScope: options?.requiredScope ? { requiredScope: options.requiredScope } : undefined,
    jwksUriOptions: {
      type: 'tenantId'
    },
  }, options?.logger);
};

