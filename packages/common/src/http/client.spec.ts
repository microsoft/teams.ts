import { Client } from './client';

class HttpClient extends Client {
  get instance() {
    return this.http;
  }
}

describe('Client', () => {
  it('should get', async () => {
    const client = new HttpClient();
    const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

    await client.get('/test');
    expect(spy).toHaveBeenCalledWith('/test', {});
  });

  it('should post', async () => {
    const client = new HttpClient();
    const spy = jest.spyOn(client.instance, 'post').mockResolvedValueOnce({});

    await client.post('/test', {});
    expect(spy).toHaveBeenCalledWith('/test', {}, {});
  });

  it('should put', async () => {
    const client = new HttpClient();
    const spy = jest.spyOn(client.instance, 'put').mockResolvedValueOnce({});

    await client.put('/test', {});
    expect(spy).toHaveBeenCalledWith('/test', {}, {});
  });

  it('should patch', async () => {
    const client = new HttpClient();
    const spy = jest.spyOn(client.instance, 'patch').mockResolvedValueOnce({});

    await client.patch('/test', {});
    expect(spy).toHaveBeenCalledWith('/test', {}, {});
  });

  it('should delete', async () => {
    const client = new HttpClient();
    const spy = jest.spyOn(client.instance, 'delete').mockResolvedValueOnce({});

    await client.delete('/test');
    expect(spy).toHaveBeenCalledWith('/test', {});
  });

  it('should make request', async () => {
    const client = new HttpClient();
    const spy = jest.spyOn(client.instance, 'request').mockResolvedValueOnce({});

    await client.request({ method: 'get', url: '/test' });
    expect(spy).toHaveBeenCalledWith({ method: 'get', url: '/test' });
  });

  it('should clone', async () => {
    const a = new HttpClient({ headers: { 'X-Test-A': 'a' } });
    const b = a.clone({ headers: { 'X-Test-B': 'b' } });
    const spy = jest.spyOn((b as any).http, 'get').mockResolvedValueOnce({});

    await b.get('/test', { headers: { 'X-Test-B': 'b' } });
    expect(spy).toHaveBeenCalledWith('/test', {
      headers: {
        'X-Test-A': 'a',
        'X-Test-B': 'b',
      },
    });
  });

  it('should merge User-Agent headers when cloning', async () => {
    const a = new HttpClient({ headers: { 'User-Agent': 'parent/1.0' } });
    const b = a.clone({ headers: { 'User-Agent': 'child/1.0' } });
    const spy = jest.spyOn((b as any).http, 'get').mockResolvedValueOnce({});

    await b.get('/test');
    expect(spy).toHaveBeenCalledWith('/test', {
      headers: {
        'User-Agent': 'child/1.0 parent/1.0',
      },
    });
  });

  it('should preserve parent User-Agent when clone has none', async () => {
    const a = new HttpClient({ headers: { 'User-Agent': 'parent/1.0' } });
    const b = a.clone();
    const spy = jest.spyOn((b as any).http, 'get').mockResolvedValueOnce({});

    await b.get('/test');
    expect(spy).toHaveBeenCalledWith('/test', {
      headers: {
        'User-Agent': 'parent/1.0',
      },
    });
  });

  it('should use child User-Agent when parent has none', async () => {
    const a = new HttpClient();
    const b = a.clone({ headers: { 'User-Agent': 'child/1.0' } });
    const spy = jest.spyOn((b as any).http, 'get').mockResolvedValueOnce({});

    await b.get('/test');
    expect(spy).toHaveBeenCalledWith('/test', {
      headers: {
        'User-Agent': 'child/1.0',
      },
    });
  });

  it('should merge User-Agent headers case-insensitively', async () => {
    const a = new HttpClient({ headers: { 'user-agent': 'parent/1.0' } });
    const b = a.clone({ headers: { 'User-Agent': 'child/1.0' } });
    const spy = jest.spyOn((b as any).http, 'get').mockResolvedValueOnce({});

    await b.get('/test');
    expect(spy).toHaveBeenCalledWith('/test', {
      headers: {
        'User-Agent': 'child/1.0 parent/1.0',
      },
    });
  });

  it('should merge User-Agent across three levels of cloning', async () => {
    const a = new HttpClient({ headers: { 'User-Agent': 'grandparent/1.0' } });
    const b = a.clone({ headers: { 'User-Agent': 'parent/1.0' } });
    const c = b.clone({ headers: { 'User-Agent': 'child/1.0' } });
    const spy = jest.spyOn((c as any).http, 'get').mockResolvedValueOnce({});

    await c.get('/test');
    expect(spy).toHaveBeenCalledWith('/test', {
      headers: {
        'User-Agent': 'child/1.0 parent/1.0 grandparent/1.0',
      },
    });
  });

  describe('headers', () => {
    it('should add custom request headers', async () => {
      const client = new HttpClient();
      const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

      await client.get('/test', { headers: { 'X-Test': 'a test' } });
      expect(spy).toHaveBeenCalledWith('/test', { headers: { 'X-Test': 'a test' } });
    });

    it('should add default headers', async () => {
      const client = new HttpClient({ headers: { 'X-Test': 'a test' } });
      const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

      await client.get('/test');
      expect(spy).toHaveBeenCalledWith('/test', { headers: { 'X-Test': 'a test' } });
    });

    it('should add custom request headers and default headers', async () => {
      const client = new HttpClient({ headers: { 'X-Test-A': 'a' } });
      const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

      await client.get('/test', { headers: { 'X-Test-B': 'b' } });
      expect(spy).toHaveBeenCalledWith('/test', {
        headers: {
          'X-Test-A': 'a',
          'X-Test-B': 'b',
        },
      });
    });

    it('should let custom request headers override default headers', async () => {
      const client = new HttpClient({ headers: { 'X-Test': 'default' } });
      const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

      await client.get('/test', { headers: { 'X-Test': 'request' } });

      expect(spy).toHaveBeenCalledWith('/test', {
        headers: { 'X-Test': 'request' },
      });
    });

    describe('token', () => {
      class Token {
        constructor(private readonly value: string) {}

        toString() {
          return this.value;
        }
      }

      it('should add default token', async () => {
        const client = new HttpClient({ token: 'test' });
        const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

        await client.get('/test');
        expect(spy).toHaveBeenCalledWith('/test', {
          headers: { Authorization: 'Bearer test' },
        });
      });

      it('should add custom request token', async () => {
        const client = new HttpClient();
        const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

        await client.get('/test', { token: 'test' });
        expect(spy).toHaveBeenCalledWith('/test', {
          headers: { Authorization: 'Bearer test' },
        });
      });

      it('should add custom request token overriding default token', async () => {
        const client = new HttpClient({ token: 'a' });
        const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

        await client.get('/test', { token: 'b' });
        expect(spy).toHaveBeenCalledWith('/test', {
          headers: { Authorization: 'Bearer b' },
        });
      });

      it('should add functional token', async () => {
        const client = new HttpClient();
        const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

        await client.get('/test', { token: () => 'test' });
        expect(spy).toHaveBeenCalledWith('/test', {
          headers: { Authorization: 'Bearer test' },
        });
      });

      it('should add object token', async () => {
        const client = new HttpClient();
        const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

        await client.get('/test', { token: new Token('test') });
        expect(spy).toHaveBeenCalledWith('/test', {
          headers: { Authorization: 'Bearer test' },
        });
      });

      it('should not send Authorization when a request token resolves to nothing', async () => {
        const client = new HttpClient({ token: 'default' });
        const spy = jest.spyOn(client.instance, 'get').mockResolvedValueOnce({});

        await client.get('/test', { token: () => undefined });

        const [, config] = spy.mock.calls[0];
        expect(config?.headers?.Authorization).toBeUndefined();
      });
    });
  });

  describe('interceptors', () => {
    it('should register default interceptors', () => {
      const client = new HttpClient({
        interceptors: [
          {
            request: ({ config }) => {
              return config;
            },
          },
        ],
      });

      expect((client as any)._interceptors.size).toEqual(1);
      expect(client.interceptors).toHaveLength(1);
    });

    it('should add/remove interceptor', () => {
      const client = new HttpClient();
      const id = client.use({
        request: ({ config }) => config,
        response: ({ res }) => res,
      });

      expect((client as any)._interceptors.size).toEqual(1);
      client.eject(id);
      expect((client as any)._interceptors.size).toEqual(0);
    });

    it('should do nothing when interceptor not found', () => {
      const client = new HttpClient();
      client.use({
        request: ({ config }) => config,
        response: ({ res }) => res,
      });

      expect((client as any)._interceptors.size).toEqual(1);
      client.eject(1000);
      expect((client as any)._interceptors.size).toEqual(1);
    });

    it('should clear', () => {
      const client = new HttpClient();
      client.use({
        request: ({ config }) => config,
        response: ({ res }) => res,
      });

      client.use({
        request: ({ config }) => config,
        response: ({ res }) => res,
      });

      expect((client as any)._interceptors.size).toEqual(2);
      client.clear();
      expect((client as any)._interceptors.size).toEqual(0);
    });

    it('should preserve request extensions for interceptors', async () => {
      const client = new HttpClient();
      const seen: unknown[] = [];
      let adapterExtensions: unknown;
      client.use({
        request: ({ config }) => {
          seen.push(config.extensions);
          return config;
        }
      });
      client.instance.defaults.adapter = async (config) => {
        adapterExtensions = (config as any).extensions;
        return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
      };

      await client.post('/test', {}, {
        extensions: {
          agenticIdentity: {
            agenticAppBlueprintId: 'agentic-blueprint',
            agenticAppId: 'agent-app',
            agenticUserId: 'agentic-user'
          }
        }
      });

      expect(seen).toEqual([
        {
          agenticIdentity: {
            agenticAppBlueprintId: 'agentic-blueprint',
            agenticAppId: 'agent-app',
            agenticUserId: 'agentic-user'
          }
        }
      ]);
      expect(adapterExtensions).toEqual({
        agenticIdentity: {
          agenticAppBlueprintId: 'agentic-blueprint',
          agenticAppId: 'agent-app',
          agenticUserId: 'agentic-user'
        }
      });
    });
  });

  describe('middleware', () => {
    it('should register middleware with use and expose it for inspection', () => {
      const client = new HttpClient();
      const middleware = {
        invoke: ({ config }: any, next: any) => next()
      };

      const id = client.use(middleware);

      expect(id).toBeGreaterThan(0);
      expect(client.middlewares).toEqual([middleware]);
    });

    it('should run middleware in insertion order with first registered outermost', async () => {
      const client = new HttpClient();
      const order: string[] = [];
      client.instance.defaults.adapter = async (config) => {
        order.push('transport');
        return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
      };
      client.use({
        invoke: async (_context, next) => {
          order.push('a:before');
          const res = await next();
          order.push('a:after');
          return res;
        }
      });
      client.use({
        invoke: async (_context, next) => {
          order.push('b:before');
          const res = await next();
          order.push('b:after');
          return res;
        }
      });

      await client.get('/test');

      expect(order).toEqual(['a:before', 'b:before', 'transport', 'b:after', 'a:after']);
    });

    it('should allow middleware to mutate request config before transport', async () => {
      const client = new HttpClient();
      let seenConfig: any;
      client.instance.defaults.adapter = async (config) => {
        seenConfig = config;
        return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
      };
      client.use({
        invoke: async (context, next) => {
          context.config.headers = {
            ...context.config.headers,
            'X-Middleware': 'true',
          };
          return next();
        }
      });

      await client.get('/test');

      expect(seenConfig.headers['X-Middleware']).toBe('true');
    });

    it('should propagate middleware response values', async () => {
      const client = new HttpClient();
      client.instance.defaults.adapter = async (config) =>
        ({ data: { ok: true }, status: 200, statusText: 'OK', headers: {}, config });
      client.use({
        invoke: async (_context, next) => {
          const res = await next();
          res.data = { wrapped: res.data };
          return res;
        }
      });

      const res = await client.get('/test');

      expect(res.data).toEqual({ wrapped: { ok: true } });
    });

    it('should propagate middleware and transport errors', async () => {
      const client = new HttpClient();
      const error = new Error('failed');
      const order: string[] = [];
      client.instance.defaults.adapter = async () => {
        throw error;
      };
      client.use({
        invoke: async (_context, next) => {
          try {
            return await next();
          } catch (err) {
            order.push('caught');
            throw err;
          }
        }
      });

      await expect(client.get('/test')).rejects.toThrow(error);

      expect(order).toEqual(['caught']);
    });

    it('should preserve middleware exactly once when cloning', async () => {
      const calls: string[] = [];
      const middleware = {
        invoke: async (_context: any, next: any) => {
          calls.push('middleware');
          return next();
        }
      };
      const a = new HttpClient({ middlewares: [middleware] });
      const b = a.clone();
      (b as any).http.defaults.adapter = async (config: any) =>
        ({ data: {}, status: 200, statusText: 'OK', headers: {}, config });

      await b.get('/test');

      expect(b.middlewares).toEqual([middleware]);
      expect(calls).toEqual(['middleware']);
    });

    it('should keep existing interceptors compatible at the terminal transport layer', async () => {
      const client = new HttpClient();
      const order: string[] = [];
      client.use({
        invoke: async (_context, next) => {
          order.push('middleware');
          return next();
        }
      });
      client.use({
        request: ({ config }) => {
          order.push('interceptor');
          config.headers ??= {};
          config.headers['X-Interceptor'] = 'true';
          return config;
        }
      });
      let seenConfig: any;
      client.instance.defaults.adapter = async (config) => {
        seenConfig = config;
        return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
      };

      await client.get('/test');

      expect(order).toEqual(['middleware', 'interceptor']);
      expect(seenConfig.headers['X-Interceptor']).toBe('true');
    });

    it('should not copy request extensions into headers, query params, or body', async () => {
      const client = new HttpClient();
      let seenConfig: any;
      client.instance.defaults.adapter = async (config) => {
        seenConfig = config;
        return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
      };

      await client.post('/test', { text: 'hello' }, {
        params: { q: 'search' },
        extensions: { secret: 'metadata' },
      });

      expect(seenConfig.extensions).toEqual({ secret: 'metadata' });
      expect(seenConfig.headers?.extensions).toBeUndefined();
      expect(seenConfig.params).toEqual({ q: 'search' });
      expect(seenConfig.params.extensions).toBeUndefined();
      expect(JSON.parse(seenConfig.data)).toEqual({ text: 'hello' });
      expect(JSON.parse(seenConfig.data).extensions).toBeUndefined();
    });

    it('should skip token resolution when Authorization is already set', async () => {
      const token = jest.fn(() => 'token');
      const client = new HttpClient({ token });
      client.instance.defaults.adapter = async (config) =>
        ({ data: {}, status: 200, statusText: 'OK', headers: {}, config });

      await client.get('/test', { headers: { Authorization: 'Bearer caller-token' } });

      expect(token).not.toHaveBeenCalled();
    });

    it('should preserve request Authorization when default Authorization is set', async () => {
      const token = jest.fn(() => 'token');
      const client = new HttpClient({
        token,
        headers: { Authorization: 'Bearer default-token' },
      });
      let seenConfig: any;
      client.instance.defaults.adapter = async (config) => {
        seenConfig = config;
        return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
      };

      await client.get('/test', { headers: { Authorization: 'Bearer caller-token' } });

      expect(token).not.toHaveBeenCalled();
      expect(seenConfig.headers.Authorization).toBe('Bearer caller-token');
    });
  });
});
