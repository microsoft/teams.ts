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

      expect((client as any).interceptors.size).toEqual(1);
    });

    it('should add/remove interceptor', () => {
      const client = new HttpClient();
      const id = client.use({
        request: ({ config }) => config,
        response: ({ res }) => res,
      });

      expect((client as any).interceptors.size).toEqual(1);
      client.eject(id);
      expect((client as any).interceptors.size).toEqual(0);
    });

    it('should do nothing when interceptor not found', () => {
      const client = new HttpClient();
      client.use({
        request: ({ config }) => config,
        response: ({ res }) => res,
      });

      expect((client as any).interceptors.size).toEqual(1);
      client.eject(1000);
      expect((client as any).interceptors.size).toEqual(1);
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

      expect((client as any).interceptors.size).toEqual(2);
      client.clear();
      expect((client as any).interceptors.size).toEqual(0);
    });
  });
});
