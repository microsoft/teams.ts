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
 * Validates that a service URL hostname is allowed.
 * Checks against the cloud environment's allowed service URLs,
 * plus any additional domains provided by the caller.
 * Localhost is always allowed for local development.
 */
export function isAllowedServiceUrl(
  serviceUrl: string,
  cloud: CloudEnvironment,
  additionalDomains?: string[]
): boolean {
  try {
    const url = new URL(serviceUrl);
    const hostname = url.hostname.toLowerCase();

    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return true;
    }

    if (url.protocol !== 'https:') {
      return false;
    }

    const allowed = [...cloud.allowedServiceUrls, ...(additionalDomains ?? [])].map((d) => d.toLowerCase());
    if (allowed.includes('*')) {
      return true;
    }

    return allowed.some((domain) => hostname === domain);
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
  private cloud: CloudEnvironment;

  /**
   * @param additionalAllowedDomains Additional service URL hostnames accepted beyond the cloud preset.
   *   Entries must be bare hostnames matched exactly (case-insensitive); wildcard patterns
   *   like `'*.example.com'`, URL suffixes, or full URLs are NOT supported.
   *   Pass `['*']` as the sole wildcard to accept any hostname.
   */
  constructor(
    appId: string,
    tenantId?: string,
    serviceUrl?: string,
    logger?: ILogger,
    additionalAllowedDomains?: string[],
    cloud?: CloudEnvironment
  ) {
    const env = cloud ?? PUBLIC;
    this.cloud = env;
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
    // Defensive copy so post-construction mutation of the caller's array
    // does not change validator behavior at runtime.
    this.additionalAllowedDomains = additionalAllowedDomains?.slice();
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
    if (serviceUrl && !isAllowedServiceUrl(serviceUrl, this.cloud, this.additionalAllowedDomains)) {
      throw new Error('Service URL is not from an allowed domain');
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
