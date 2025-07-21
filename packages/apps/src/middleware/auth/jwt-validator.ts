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

  /**
   * This may be 'common', 'organizations', 'consumers' for multi-tenant apps,
   * or a specific tenant ID for single-tenant apps.
   */
  tenantId?: string;

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
          `api://${this.options.clientId}`,
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
          this.jwksCache.set(`${this.options.tenantId}`, jwksRsa({
            jwksUri: `https://login.microsoftonline.com/${this.options.tenantId}/discovery/v2.0/keys`,
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
    if (!this.options.validateIssuer) {
      return; // No issuer validation configured
    }
    if (!iss) {
      throw new Error('Token missing issuer claim');
    }

    if ('allowedIssuer' in this.options.validateIssuer) {
      // Validate against a specific allowed issuer
      if (iss !== this.options.validateIssuer.allowedIssuer) {
        throw new Error(`Token issuer '${iss}' does not match allowed issuer '${this.options.validateIssuer.allowedIssuer}'`);
      }
      return;
    }

    if (!this.options.tenantId) {
      return;
    }

    const isMultiTenant = ['common', 'organizations', 'consumers'].includes(this.options.tenantId);
    const allowedTenantIds = [];
    if (isMultiTenant) {
      if (this.options.validateIssuer.allowedTenantIds) {
        // find which tenant ids are not 'common', 'organizations', or 'consumers'
        for (const tenantId of this.options.validateIssuer.allowedTenantIds) {
          if (!['common', 'organizations', 'consumers'].includes(tenantId)) {
            allowedTenantIds.push(tenantId);
          }
        }
      }
    } else {
      // For single-tenant apps, only allow tokens issued by this app's tenant
      // (ignore allowedTenantIds option for single-tenant apps)
      allowedTenantIds.push(this.options.tenantId);
    }

    if (allowedTenantIds.length === 0) {
      return; // No allowed tenant IDs configured, so no validation needed
    } else {
      // Validate against allowed tenant IDs
      if (!allowedTenantIds.some((tenantId) => iss.startsWith(`https://login.microsoftonline.com/${tenantId}/`))) {
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
    logger?: ILogger
  },
) => {
  return new JwtValidator({
    clientId,
    tenantId,
    validateIssuer: {
      allowedTenantIds: options?.allowedTenantIds
    },
    validateScope: options?.requiredScope ? { requiredScope: options.requiredScope } : undefined,
    jwksUriOptions: {
      type: 'tenantId'
    },
  }, options?.logger);
};

export const createServiceTokenValidator = (
  appId: string,
  tenantId?: string,
  serviceUrl?: string,
  logger?: ILogger
) => {
  return new JwtValidator({
    clientId: appId,
    tenantId,
    validateIssuer: { allowedIssuer: 'https://api.botframework.com' },
    validateServiceUrl: serviceUrl ? { expectedServiceUrl: serviceUrl } : undefined,
    jwksUriOptions: {
      type: 'uri',
      uri: 'https://login.botframework.com/v1/.well-known/keys'
    },
  }, logger);
};