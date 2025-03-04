export class Jwt {
  private _payload: Record<string, any>;

  constructor(payload: Record<string, any> = {}) {
    this._payload = payload;
  }

  async sign(secret: string) {
    const header = { typ: 'JWT', alg: 'HS256' };
    const parts = [];

    parts.push(encodeURIComponent(btoa(JSON.stringify(header))));
    parts.push(encodeURIComponent(btoa(JSON.stringify(this._payload))));

    const footer = await this._sign(parts.join('.'), secret);

    parts.push(footer);
    return parts.join('.');
  }

  private async _sign(value: string, secret: string) {
    const key = await window.crypto.subtle.importKey(
      'jwk',
      {
        kty: 'oct',
        k: secret,
        alg: 'HS256',
        ext: true,
      },
      {
        name: 'HMAC',
        hash: { name: 'SHA-256' },
      },
      true,
      ['sign', 'verify']
    );

    const encoded = new TextEncoder().encode(JSON.stringify(value));
    const token = await window.crypto.subtle.sign({ name: 'HMAC' }, key, encoded);
    return btoa(String.fromCharCode(...new Uint8Array(token)));
  }
}
