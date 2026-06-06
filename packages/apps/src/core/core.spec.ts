import { PUBLIC } from '@microsoft/teams.api';

import { HttpMethod, HttpRouteHandler, IHttpServerAdapter } from '../http/adapter';

import { Core } from './core';

class TestAdapter implements IHttpServerAdapter {
  registerRoute(_method: HttpMethod, _path: string, _handler: HttpRouteHandler): void { }
  serveStatic(_path: string, _directory: string): void { }
}

describe('Core', () => {
  it('returns a fresh authenticated bot HttpClient', async () => {
    const authorize = jest.fn().mockResolvedValue('bot-token');
    const core = new Core({
      authorize,
      httpServerAdapter: new TestAdapter(),
      cloud: PUBLIC,
    });

    const client = core.getAuthenticatedClient({ kind: 'bot' });
    expect(core.getAuthenticatedClient({ kind: 'bot' })).not.toBe(client);

    const spy = jest.spyOn((client as any).http, 'get').mockResolvedValueOnce({});
    await client.get('/v3/conversations');

    expect(authorize).toHaveBeenCalledWith({
      kind: 'bot',
      scope: PUBLIC.botScope,
      tenantId: PUBLIC.loginTenant,
    });
    expect(spy).toHaveBeenCalledWith('/v3/conversations', {
      headers: expect.objectContaining({
        Authorization: 'Bearer bot-token',
      }),
    });
  });

  it('returns app Graph clients scoped by resolved tenant', async () => {
    const authorize = jest.fn().mockResolvedValue('graph-token');
    const core = new Core({
      authorize,
      httpServerAdapter: new TestAdapter(),
      cloud: PUBLIC,
    });

    const commonClient = core.getAuthenticatedClient({ kind: 'appGraph' });
    const tenantClient = core.getAuthenticatedClient({ kind: 'appGraph', tenantId: 'tenant-a' });

    expect(tenantClient).not.toBe(commonClient);

    const spy = jest.spyOn((tenantClient as any).http, 'get').mockResolvedValueOnce({});
    await tenantClient.get('/me');

    expect(authorize).toHaveBeenCalledWith({
      kind: 'appGraph',
      scope: PUBLIC.graphScope,
      tenantId: 'tenant-a',
    });
    expect(spy).toHaveBeenCalledWith('/me', {
      headers: expect.objectContaining({
        Authorization: 'Bearer graph-token',
      }),
    });
  });
});
