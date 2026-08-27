import { generateKeyPairSync } from 'crypto';

import { JwksClient } from 'jwks-rsa';

/**
 * `jwks-rsa` performs its JWK -> PEM conversion through `jose`, which publishes ESM
 * only. Jest runs CommonJS, so `jose` is down-levelled by the transform and
 * `transformIgnorePatterns` pair in `@microsoft/teams.config/jest.config`.
 *
 * That conversion sits inside a `try { ... } catch { continue; }` in jwks-rsa, so a
 * `jose` that loads but does not work yields *no signing keys* rather than an error,
 * and inbound token validation would fail silently at runtime. These tests therefore
 * assert that a real key round-trips through the public API, not merely that the
 * module imports.
 */
describe('jwks-rsa / jose interop under the CommonJS test runtime', () => {
  const { publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const jwk = publicKey.export({ format: 'jwk' }) as Record<string, unknown>;
  const expectedPem = publicKey.export({ format: 'pem', type: 'spki' }).toString().trim();

  // `fetcher` keeps this offline and deterministic; the JWK itself is a real RSA key.
  const client = new JwksClient({
    jwksUri: 'https://example.test/discovery/v2.0/keys',
    fetcher: async () => ({ keys: [{ ...jwk, use: 'sig', kid: 'test-kid' }] }),
  });

  it('resolves a signing key instead of silently returning none', async () => {
    const key = await client.getSigningKey('test-kid');

    expect(key).toBeDefined();
    expect(key.kid).toBe('test-kid');
  });

  it('returns the SPKI PEM of the exact key published in the JWKS', async () => {
    const key = await client.getSigningKey('test-kid');

    // `jose.exportSPKI` omits the trailing newline that Node's `KeyObject.export`
    // emits. Only that surrounding whitespace differs, and `jsonwebtoken.verify`
    // accepts either form, so compare trimmed.
    expect(key.getPublicKey().trim()).toBe(expectedPem);
  });

  it('reports unknown key ids as an error rather than an empty result', async () => {
    await expect(client.getSigningKey('missing-kid')).rejects.toThrow();
  });
});
