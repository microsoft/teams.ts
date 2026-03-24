import { HttpMethod, IHttpServerAdapter, HttpRouteHandler } from './adapter';
import { HttpServer } from './http-server';

class MockAdapter implements IHttpServerAdapter {
  routes: Array<{ method: HttpMethod; path: string; handler: HttpRouteHandler }> = [];
  started = false;
  stopped = false;

  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void {
    this.routes.push({ method, path, handler });
  }

  async start(_port: number): Promise<void> {
    this.started = true;
  }

  async stop(): Promise<void> {
    this.stopped = true;
  }

  /** Simulate a request to a registered route */
  async simulateRequest(path: string, body: unknown, headers: Record<string, string | string[]> = {}) {
    const route = this.routes.find(r => r.path === path);
    if (!route) throw new Error(`No route registered for ${path}`);
    return route.handler({ body, headers });
  }
}

const defaultOptions = { skipAuth: true, messagingEndpoint: '/api/messages' };

describe('HttpServer', () => {
  let adapter: MockAdapter;
  let server: HttpServer;

  beforeEach(() => {
    adapter = new MockAdapter();
    server = new HttpServer(adapter, defaultOptions);
  });

  describe('initialize', () => {
    it('should register POST /api/messages route', async () => {
      await server.initialize({ credentials: undefined });

      expect(adapter.routes).toHaveLength(1);
      expect(adapter.routes[0].method).toBe('POST');
      expect(adapter.routes[0].path).toBe('/api/messages');
    });

    it('should register route with custom messaging endpoint', async () => {
      const customServer = new HttpServer(adapter, { skipAuth: true, messagingEndpoint: '/bot/incoming' });
      await customServer.initialize({ credentials: undefined });

      expect(adapter.routes).toHaveLength(1);
      expect(adapter.routes[0].path).toBe('/bot/incoming');
      expect(customServer.messagingEndpoint).toBe('/bot/incoming');
    });

    it('should only initialize once', async () => {
      await server.initialize({ credentials: undefined });
      await server.initialize({ credentials: undefined });

      expect(adapter.routes).toHaveLength(1);
    });
  });

  describe('handleRequest', () => {
    beforeEach(async () => {
      await server.initialize({ credentials: undefined });
    });

    it('should process activity and return response', async () => {
      server.onRequest = jest.fn().mockResolvedValue({ status: 200, body: { text: 'ok' } });

      const result = await adapter.simulateRequest('/api/messages', {
        type: 'message',
        serviceUrl: 'https://smba.trafficmanager.net/teams',
      });

      expect(result.status).toBe(200);
      expect(result.body).toEqual({ text: 'ok' });
      expect(server.onRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          body: expect.objectContaining({ type: 'message' }),
          token: expect.objectContaining({ from: 'azure' }),
        })
      );
    });

    it('should create dummy token when auth is skipped', async () => {
      server.onRequest = jest.fn().mockResolvedValue({ status: 200 });

      await adapter.simulateRequest('/api/messages', {
        serviceUrl: 'https://test.botframework.com',
      });

      const event = (server.onRequest as jest.Mock).mock.calls[0][0];
      expect(event.token.appId).toBe('');
      expect(event.token.from).toBe('azure');
      expect(event.token.serviceUrl).toBe('https://test.botframework.com');
    });

    it('should return 500 when onRequest is not set', async () => {
      server.onRequest = undefined;

      const result = await adapter.simulateRequest('/api/messages', { type: 'message' });

      expect(result.status).toBe(500);
      expect(result.body).toEqual({ error: 'Internal server error' });
    });

    it('should return 500 when onRequest throws', async () => {
      server.onRequest = jest.fn().mockRejectedValue(new Error('processing failed'));

      const result = await adapter.simulateRequest('/api/messages', { type: 'message' });

      expect(result.status).toBe(500);
      expect(result.body).toEqual({ error: 'Internal server error' });
    });

    it('should default response status to 200', async () => {
      server.onRequest = jest.fn().mockResolvedValue({ body: 'ok' });

      const result = await adapter.simulateRequest('/api/messages', { type: 'message' });

      expect(result.status).toBe(200);
    });
  });

  describe('handleRequest with auth', () => {
    let authServer: HttpServer;

    beforeEach(async () => {
      authServer = new HttpServer(adapter, { ...defaultOptions, skipAuth: false });
      await authServer.initialize({
        credentials: { clientId: 'test-app', tenantId: 'test-tenant' } as any,
      });
    });

    it('should return 401 when authorization header is missing', async () => {
      const result = await adapter.simulateRequest('/api/messages', { type: 'message' }, {});

      expect(result.status).toBe(401);
      expect(result.body).toEqual({ error: 'Missing authorization header' });
    });
  });

  describe('start', () => {
    it('should delegate to adapter.start()', async () => {
      await server.start(3978);

      expect(adapter.started).toBe(true);
    });

    it('should parse string port to number', async () => {
      const startSpy = jest.spyOn(adapter, 'start');

      await server.start('4000');

      expect(startSpy).toHaveBeenCalledWith(4000);
    });

    it('should throw when adapter does not implement start', async () => {
      const noStartAdapter = { registerRoute: jest.fn() } as any;
      const noStartServer = new HttpServer(noStartAdapter, defaultOptions);

      await expect(noStartServer.start(3000)).rejects.toThrow('Adapter does not implement start()');
    });
  });

  describe('stop', () => {
    it('should delegate to adapter.stop()', async () => {
      await server.stop();

      expect(adapter.stopped).toBe(true);
    });

    it('should warn and skip when adapter does not implement stop', async () => {
      const noStopAdapter = { registerRoute: jest.fn() } as any;
      const noStopServer = new HttpServer(noStopAdapter, defaultOptions);

      // Should not throw
      await noStopServer.stop();
    });
  });

  describe('registerRoute', () => {
    it('should pass through to adapter', () => {
      const handler = jest.fn();

      server.registerRoute('POST', '/custom', handler);

      expect(adapter.routes).toContainEqual(
        expect.objectContaining({ method: 'POST', path: '/custom', handler })
      );
    });
  });

  describe('serveStatic', () => {
    it('should pass through to adapter when supported', () => {
      const serveStaticSpy = jest.fn();
      (adapter as any).serveStatic = serveStaticSpy;

      server.serveStatic('/static', '/dist');

      expect(serveStaticSpy).toHaveBeenCalledWith('/static', '/dist');
    });

    it('should no-op when adapter does not support serveStatic', () => {
      const minimalAdapter = { registerRoute: jest.fn() } as any;
      const minimalServer = new HttpServer(minimalAdapter, defaultOptions);

      // Should not throw
      minimalServer.serveStatic('/static', '/dist');
    });
  });

  describe('adapter', () => {
    it('should expose the underlying adapter', () => {
      expect(server.adapter).toBe(adapter);
    });
  });
});
