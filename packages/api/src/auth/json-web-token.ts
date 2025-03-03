import { jwtDecode, JwtPayload } from 'jwt-decode';

import { CallerIds, CallerType } from './caller';
import { Token } from './token';

export interface JsonWebTokenPayload extends JwtPayload {
  readonly [key: string]: any;
}

export class JsonWebToken implements Token {
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

  private readonly _value: string;
  private readonly _payload: JsonWebTokenPayload;

  constructor(value: string) {
    this._value = value;
    this._payload = jwtDecode(value);
  }

  toString() {
    return this._value;
  }
}
