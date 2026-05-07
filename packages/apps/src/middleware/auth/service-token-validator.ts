import { CloudEnvironment, Credentials, IToken, PUBLIC } from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { JwtValidator } from './jwt-validator';

/**
 * Derives the JWKS keys URI from an OpenID metadata URL.
 * e.g. "https://login.botframework.com/v1/.well-known/openidconfiguration"
 *   -> "https://login.botframework.com/v1/.well-known/keys"
 */
function openIdMetadataToKeysUri(openIdMetadataUrl: string): string {
  return openIdMetadataUrl.replace(/\/openidconfiguration$/, '/keys');
}

/**
 * Service token validator for Bot Framework /api/messages requests
 * Validates Bot Framework service tokens
 */
export class ServiceTokenValidator {
  private jwtValidator: JwtValidator;
  private credentials?: Credentials;

  constructor(
    appId: string,
    tenantId?: string,
    serviceUrl?: string,
    logger?: ILogger,
    cloud?: CloudEnvironment
  ) {
    const env = cloud ?? PUBLIC;
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

    // Validate token using JWT validator
    const payload = await this.jwtValidator.validateAccessToken(token, {
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
}
