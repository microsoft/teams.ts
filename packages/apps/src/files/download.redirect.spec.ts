import * as http from 'node:http';
import type { AddressInfo } from 'node:net';

import { Client as HttpClient } from '@microsoft/teams.common';

/**
 * Graph's `/shares/.../content` answers with a 302 to ODSP storage, and the HTTP client follows it inside a single
 * call. Nothing in the SDK controls what happens to the `Authorization` header across that hop, so this pins the
 * behaviour we rely on: the bearer must not reach the storage host.
 *
 * Real servers rather than a mocked transport, because the stripping happens in the redirect follower, which sits
 * below the transport the other specs capture at.
 */
describe('redirects during a Graph fetch', () => {
  const servers: http.Server[] = [];

  const listen = (server: http.Server) => {
    servers.push(server);
    return new Promise<number>((resolve) =>
      server.listen(0, '127.0.0.1', () => resolve((server.address() as AddressInfo).port))
    );
  };

  afterEach(async () => {
    await Promise.all(servers.splice(0).map((s) => new Promise((r) => s.close(r))));
  });

  const BEARER = 'Bearer graph-secret';

  const fetchThroughRedirect = async (locationFor: (selfPort: number, storagePort: number) => string) => {
    const seen: Array<{ host: string; auth?: string }> = [];

    const storage = http.createServer((req, res) => {
      seen.push({ host: req.headers.host!, auth: req.headers.authorization });
      res.writeHead(200, { 'content-type': 'application/pdf' });
      res.end('bytes');
    });
    const storagePort = await listen(storage);

    let originPort = 0;
    const origin = http.createServer((req, res) => {
      seen.push({ host: req.headers.host!, auth: req.headers.authorization });
      if (req.url?.startsWith('/final')) {
        res.writeHead(200, { 'content-type': 'application/pdf' });
        return res.end('bytes');
      }
      res.writeHead(302, { Location: locationFor(originPort, storagePort) });
      res.end();
    });
    originPort = await listen(origin);

    const response = await new HttpClient().get<unknown>(`http://127.0.0.1:${originPort}/v1.0/shares/x/driveItem/content`, {
      responseType: 'stream',
      token: () => BEARER,
      headers: { Authorization: BEARER },
      validateStatus: () => true,
    });

    return { status: response.status, seen };
  };

  it('does not forward the bearer to the storage host it is redirected to', async () => {
    const { status, seen } = await fetchThroughRedirect((_, storagePort) => `http://127.0.0.1:${storagePort}/blob`);

    expect(status).toBe(200);
    expect(seen).toHaveLength(2);
    expect(seen[0].auth).toBe(BEARER);
    expect(seen[1].auth).toBeUndefined();
  });

  // Without this the assertion above would also pass if the header were dropped unconditionally, which would mean the
  // test proves nothing about cross-origin behaviour.
  it('still sends the bearer when the redirect stays on the same origin', async () => {
    const { status, seen } = await fetchThroughRedirect((originPort) => `http://127.0.0.1:${originPort}/final`);

    expect(status).toBe(200);
    expect(seen).toHaveLength(2);
    expect(seen[1].auth).toBe(BEARER);
  });
});
