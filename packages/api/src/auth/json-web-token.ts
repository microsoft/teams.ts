import { jwtDecode, JwtPayload } from 'jwt-decode';

import { CallerIds, CallerType } from './caller';
import { IToken } from './token';

export type JsonWebTokenPayload = JwtPayload & {
  readonly [key: string]: any;
};

export class JsonWebToken implements IToken {
  get audience() {
    return this._payload.aud;
  }

  get issuer() {
    return this._payload.iss;
  }

  get keyId(): string | undefined {
    return this._payload['kid'];
  }

  get appId(): string {
    return this._payload['appid'];
  }

  get appDisplayName(): string | undefined {
    return this._payload['app_displayname'];
  }

  get tenantId(): string | undefined {
    return this._payload['tid'];
  }

  get version(): string | undefined {
    return this._payload['version'];
  }

  get serviceUrl(): string {
    let v: string = this._payload['serviceurl'] || 'https://smba.trafficmanager.net/teams';

    if (v.endsWith('/')) {
      v = v.slice(0, v.length - 1);
    }

    return v;
  }

  get from(): CallerType {
    if (this.appId) {
      return 'bot';
    }

    return 'azure';
  }

  get fromId(): string {
    if (this.from === 'bot') {
      return `${CallerIds.bot}:${this.appId}`;
    }

    return CallerIds.azure;
  }

  get expiration(): number | undefined {
    if (this._payload.exp) {
      return this._payload.exp * 1000;
    }

    return undefined;
  }

  private readonly _value: string;
  private readonly _payload: JsonWebTokenPayload;

  /**
   * Typed accessor for an already-validated JWT payload. This constructor
   * performs no signature verification, no issuer/audience checks, and no
   * expiry enforcement. Constructing it from an untrusted token does NOT
   * establish trust in the contained claims.
   *
   * Signature verification happens at the HTTP trust boundary via
   * `JwtValidator.validateAccessToken` (packages/apps/src/middleware/auth/
   * jwt-validator.ts). Internal callers may also construct from tokens
   * sourced from trusted identity infrastructure (MSAL, Bot Framework API
   * responses).
   *
   * Callers must not construct this class from raw network input.
   */
  constructor(value: string) {
    this._value = value;
    this._payload = jwtDecode(value);
  }

  isExpired(bufferMs = 1000 * 60 * 5) {
    if (!this.expiration) return false;
    return this.expiration < Date.now() + bufferMs;
  }

  toString() {
    return this._value;
  }
}
