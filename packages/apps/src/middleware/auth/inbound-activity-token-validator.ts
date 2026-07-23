import { JwtPayload } from 'jsonwebtoken';

import { CloudEnvironment, Credentials, IToken, PUBLIC } from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { JwtValidator, decodeJwtPayload } from './jwt-validator';

const MAX_ENTRA_VALIDATOR_CACHE_SIZE = 100;
const ENTRA_V1_ISSUER_PREFIX = 'https://sts.windows.net/';

/**
 * Derives the JWKS keys URI from an OpenID metadata URL.
 * e.g. "https://login.botframework.com/v1/.well-known/openidconfiguration"
 *   -> "https://login.botframework.com/v1/.well-known/keys"
 */
function openIdMetadataToKeysUri(openIdMetadataUrl: string): string {
  return openIdMetadataUrl.replace(/\/openidconfiguration$/, '/keys');
}

/**
 * Validator for inbound Teams activities.
 *
 * Classic bot activities use Bot Framework connector tokens. Agentic User activities
 * use Entra tokens whose audience is the AgenticBlueprint ID.
 */
export class InboundActivityTokenValidator {
  private jwtValidator: JwtValidator;
  private entraValidatorsByTenantId = new Map<string, JwtValidator>();
  private credentials?: Credentials;
  private appId: string;
  private cloud: CloudEnvironment;
  private logger?: ILogger;

  constructor(
    appId: string,
    tenantId?: string,
    serviceUrl?: string,
    logger?: ILogger,
    cloud?: CloudEnvironment
  ) {
    const env = cloud ?? PUBLIC;
    this.appId = appId;
    this.cloud = env;
    this.logger = logger;
    this.jwtValidator = new JwtValidator({
      clientId: appId,
      tenantId,
      loginEndpoint: env.loginEndpoint,
      validateIssuer: { allowedIssuer: env.tokenIssuer },
      validateServiceUrl: serviceUrl ? { expectedServiceUrl: serviceUrl } : undefined,
      jwksUriOptions: {
        type: 'uri',
        uri: openIdMetadataToKeysUri(env.openIdMetadataUrl),
      },
    }, logger);

    this.credentials = { clientId: appId, tenantId };
  }

  async check(authHeader: string, body: any): Promise<IToken> {
    // Extract token from "Bearer <token>" format
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.substring(7)
      : authHeader;

    if (!token) {
      throw new Error('No token provided');
    }

    const unverifiedPayload = this.decodePayload(token);
    const isEntraToken = this.isEntraIssuer(unverifiedPayload?.iss);
    const payload = isEntraToken
      ? await this.validateEntraToken(token, unverifiedPayload)
      : await this.jwtValidator.validateAccessToken(token, {
        validateServiceUrl: body.serviceUrl ? { expectedServiceUrl: body.serviceUrl } : undefined
      });

    if (!payload) {
      throw new Error('Invalid token');
    }

    const serviceUrl = body.serviceUrl || payload.serviceurl as string || '';

    // Convert JWT payload to IToken
    return {
      appId: payload.appid as string || this.credentials?.clientId || '',
      from: 'azure',
      fromId: payload.sub as string || '',
      serviceUrl,
      isExpired: () => false, // Already validated by JWT validator
    };
  }

  private decodePayload(rawToken: string): JwtPayload | null {
    return decodeJwtPayload(rawToken);
  }

  private isEntraIssuer(issuer: unknown): issuer is string {
    return typeof issuer === 'string' && (
      issuer.startsWith(this.cloud.loginEndpoint) || issuer.startsWith(ENTRA_V1_ISSUER_PREFIX)
    );
  }

  private async validateEntraToken(rawToken: string, unverifiedPayload: JwtPayload | null) {
    const tenantId = unverifiedPayload?.tid;
    if (!tenantId || typeof tenantId !== 'string') {
      throw new Error('Entra inbound token is missing tid');
    }

    const validator = this.getEntraValidator(tenantId);
    // Agentic User inbound Entra tokens currently do not include serviceurl.
    // Revisit service URL validation when the platform defines a signed claim.
    return await validator.validateAccessToken(rawToken);
  }

  private getEntraValidator(tenantId: string) {
    const cachedValidator = this.entraValidatorsByTenantId.get(tenantId);
    if (cachedValidator) {
      return cachedValidator;
    }

    const validator = new JwtValidator({
      clientId: this.appId,
      tenantId,
      loginEndpoint: this.cloud.loginEndpoint,
      validateIssuer: { allowedTenantIds: [tenantId] },
      jwksUriOptions: { type: 'tenantId' },
    }, this.logger);
    this.entraValidatorsByTenantId.set(tenantId, validator);
    if (this.entraValidatorsByTenantId.size > MAX_ENTRA_VALIDATOR_CACHE_SIZE) {
      const oldestTenantId = this.entraValidatorsByTenantId.keys().next().value;
      if (oldestTenantId) {
        this.entraValidatorsByTenantId.delete(oldestTenantId);
      }
    }
    return validator;
  }
}
