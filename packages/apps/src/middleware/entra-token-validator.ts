import jwt, { type JwtPayload } from 'jsonwebtoken';
import jwksClient, { JwksClient } from 'jwks-rsa';

import { ILogger } from '@microsoft/teams.common';

/**
 * Entra token validator parameters
 */
type EntraTokenValidatorParams = {
  /**
   *  App tenant ID. Used to find public keys to validate token signature, and to validate issuer for single-tenant apps.
   *  This can be 'common', 'organization', or 'consumers' for a multi-tenant app, or a specific tenant ID for a single-tenant app.
   */
  tenantId: string;
  /** App client ID. Used to validate token audience. */
  clientId: string;
  options?: {
    /**
     * For multi-tenant apps that only allows sign-in from specific tenants, this is the list of allowed tenant IDs.
     * If empty or not provided, any tenant is considered valid.
     * This is ignored for single-tenant apps.
     */
    allowedTenantIds?: string[];
  };
};

export const getJwksClient = (options: jwksClient.Options): JwksClient => jwksClient(options);

/**
 * And Entra token validator that can validate access tokens issued by Microsoft Entra for app specific use.
 */
export class EntraTokenValidator {
  readonly tenantId: string;
  readonly clientId: string;
  readonly validIssuerTenantIds: string[];
  private keyClient: JwksClient;

  constructor({ tenantId, clientId, options }: EntraTokenValidatorParams) {
    this.tenantId = tenantId;
    this.clientId = clientId;

    // single-tenant applications only allow tokens issued by this app's tenant
    // multi tenant applications allow tokens issued by any tenant, unless the
    // allowedTenantIds option is provided to limit the set of allowed issuers.
    const isMultiTenant = ['common', 'organizations', 'consumers'].some((val) => tenantId === val);
    this.validIssuerTenantIds = isMultiTenant ? options?.allowedTenantIds ?? [] : [this.tenantId];

    this.keyClient = getJwksClient({
      jwksUri: `https://login.microsoftonline.com/${tenantId}/discovery/v2.0/keys`,
    });
  }

  /**
   * Validates a JWT access token
   * @param {ILogger} logger The logger to use.
   * @param {string} rawAccessToken The access token as a string.
   * @param { string | undefined } requiredScope If provided, the token will only be considered valid if issued for this scope.
   * @returns {Promise<jwt.Jwt | null>} The validated token if the signature is valid and the claims are valid.
   */
  async validateAccessToken(
    logger: ILogger,
    rawAccessToken: string,
    requiredScope?: string
  ): Promise<jwt.Jwt | null> {
    if (!rawAccessToken) {
      logger.error('No token provided');
      return null;
    }

    const token = this.decodeToken(logger, rawAccessToken);
    if (!token) {
      logger.error('Failed to decode the access token');
      return null;
    }

    const publicKey = await this.getPublicKey(logger, token.header);
    if (!publicKey) {
      logger.error(`Failed to find public key for the key identifier "${token.header.kid}"`);
      return null;
    }

    const validatedToken = this.validateTokenSignature(logger, rawAccessToken, publicKey);
    if (!validatedToken) {
      logger.error('Failed to validate the token signature');
      return null;
    }

    if (!this.validateAccessTokenClaims(logger, validatedToken, requiredScope)) {
      logger.error('Failed to validate the access token claims');
      return null;
    }

    return validatedToken;
  }

  getTokenPayload(token: jwt.Jwt): JwtPayload | null {
    return token.payload instanceof Object ? token.payload : null;
  }

  /**
   * Validates the token claims: that it's valid for the intended purpose, it's not expired, it has the right audience & issuer,
   * it's issued for the requisite scope.
   * @param {ILogger} logger The logger to use.
   * @param {jwt.Jwt} token The token to validate.
   * @param { string | undefined } requiredScope If provided, the token will only be considered valid if issued for this scope.
   * @returns {boolean} True if the claims validation passed.
   */
  private validateAccessTokenClaims(
    logger: ILogger,
    token: jwt.Jwt,
    requiredScope?: string
  ): boolean {
    const payload = this.getTokenPayload(token);
    if (!payload) {
      logger.error('Invalid token payload.');
      return false;
    }

    // validate iat (issued at) and exp (expiration) fields.
    // these are expressed as number of seconds since Unix epoch.
    const now = Math.round(new Date().getTime() / 1000.0);
    const checkTimestamp = payload.iat && payload.iat <= now && payload.exp && payload.exp >= now;

    if (!checkTimestamp) {
      logger.error('The token is expired or not yet valid.');
      return false;
    }

    // validate audience
    const checkAudience = payload.aud === this.clientId || payload.aud === `api://${this.clientId}`;
    if (!checkAudience) {
      logger.error('The token is not issued for the expected audience.');
      return false;
    }

    const tokenIssuer = payload.iss;
    if (!tokenIssuer) {
      logger.error('Invalid token issuer.');
      return false;
    }

    // validate token issuer
    //  - if this is a single-tenant application, validate that the token is issued by the expected tenant
    //  - if this is a multi-tenant application that only allows sign-in from specific tenants, validate that
    //    the token is issued by one of those
    //  - if this is a multi-tenant that does not limit sign-in to specific tenants, any issuer is considered valid.
    const checkIssuer =
      !this.validIssuerTenantIds.length ||
      this.validIssuerTenantIds.some((tenantId) =>
        tokenIssuer.startsWith(`https://login.microsoftonline.com/${tenantId}/`)
      );
    if (!checkIssuer) {
      logger.error(`The token is issued by unexpected tenant: ${payload.iss}`);
      return false;
    }

    // validate that the token is issued for the required scope
    const checkRequiredScope = !requiredScope || payload.scp?.includes(requiredScope);
    if (!checkRequiredScope) {
      logger.error(`The token is not issued for the required scope: ${requiredScope}`);
      return false;
    }

    // all checks passed
    return true;
  }

  /**
   * Decodes an access token without verifying if the signature is valid.
   * @param {ILogger} logger The logger to use.
   * @param {string} rawAccessToken the raw access token.
   * @returns {jwt.JWT | null} A decoded token if the raw access token is well formed.
   */
  private decodeToken(logger: ILogger, rawAccessToken: string): jwt.Jwt | null {
    try {
      return jwt.decode(rawAccessToken, { complete: true });
    } catch (error) {
      logger.error(error);
      return null;
    }
  }

  /**
   * Gets the public key from the key identifier in a token header
   * @param {ILogger} logger The logger to use.
   * @param {jwt.JwtHeader} header the token header
   * @returns {Promise<string | undefined>} the public key corresponding to the header key identifier, if available
   */
  private async getPublicKey(
    logger: ILogger,
    header: Pick<jwt.JwtHeader, 'kid'>
  ): Promise<string | null> {
    try {
      const signingKey = await this.keyClient.getSigningKey(header.kid);
      return signingKey.getPublicKey() ?? null;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }

  /**
   * Decodes the access token and verifies it against the public key
   * @param {ILogger} logger The logger to use.
   * @param {string} rawAccessToken the raw access token.
   * @param {string} publicKey the public key to verify signature against.
   * @returns {Promise<jwt.JWT | null>} A decoded token if the raw token is well formed and the signature is valid.
   */
  private validateTokenSignature(
    logger: ILogger,
    rawAccessToken: string,
    publicKey: string
  ): jwt.Jwt | null {
    try {
      return jwt.verify(rawAccessToken, publicKey, { complete: true });
    } catch (error) {
      logger.error(error);
      return null;
    }
  }
}
