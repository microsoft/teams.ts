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
 * Default allowed service URL domain patterns.
 * These cover the known domains used by the Bot Framework Channel Service
 * across public, government, sovereign, and regional clouds.
 */
const DEFAULT_ALLOWED_SERVICE_URL_DOMAINS = [
  // Public cloud
  '.botframework.com',
  // US Government
  '.botframework.azure.us',
  '.teams.microsoft.com',
  '.teams.microsoft.us',
  // China (21Vianet)
  '.botframework.azure.cn',
  '.teams.microsoftonline.cn',
];

/**
 * Validates that a service URL belongs to a known domain.
 * Returns true if the URL's hostname ends with one of the allowed domain suffixes,
 * or if the hostname is localhost (for local development).
 */
export function isAllowedServiceUrl(serviceUrl: string, additionalDomains?: string[]): boolean {
  try {
    const url = new URL(serviceUrl);
    const hostname = url.hostname.toLowerCase();

    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return true;
    }

    // trafficmanager.net is a shared Azure service; only allow smba-prefixed hostnames
    if (hostname.endsWith('.trafficmanager.net') || hostname === 'trafficmanager.net') {
      return hostname.startsWith('smba');
    }

    const allowed = [...DEFAULT_ALLOWED_SERVICE_URL_DOMAINS, ...(additionalDomains ?? [])];
    return allowed.some((domain) => domain === '*' || hostname.endsWith(domain.toLowerCase()));
  } catch {
    return false;
  }
}

/**
 * Service token validator for Bot Framework /api/messages requests
 * Validates Bot Framework service tokens
 */
export class ServiceTokenValidator {
  private jwtValidator: JwtValidator;
  private credentials?: Credentials;
  private additionalAllowedDomains?: string[];

  constructor(
    appId: string,
    tenantId?: string,
    serviceUrl?: string,
    logger?: ILogger,
    additionalAllowedDomains?: string[],
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
    this.additionalAllowedDomains = additionalAllowedDomains;
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

    // Validate serviceUrl against allowed domains
    if (serviceUrl && !isAllowedServiceUrl(serviceUrl, this.additionalAllowedDomains)) {
      throw new Error(`Service URL '${serviceUrl}' is not from an allowed domain`);
    }

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
