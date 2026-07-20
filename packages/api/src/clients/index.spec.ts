import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { AuthProvider } from './auth';
import { ApiOutboundTelemetryMiddleware } from './api-outbound-middleware';

import { Client } from './index';

class TestHttpClient extends HttpClient {
  get instance() {
    return this.http;
  }

  override clone(options?: HttpClientOptions): HttpClient {
    const clone = new TestHttpClient(options);
    clone.instance.defaults.adapter = this.instance.defaults.adapter;
    return clone;
  }
}

function mockAdapter(client: TestHttpClient) {
  client.instance.defaults.adapter = async (config) => ({ data: {}, status: 200, statusText: 'OK', headers: {}, config });
}

describe('Api Client auth provider', () => {
  it('registers API outbound middleware without mutating interceptors', () => {
    const http = new TestHttpClient();
    const authProvider: AuthProvider = { token: async () => 'token' };

    const api = new Client('https://service.example.com', http, { authProvider });

    expect(api.http).toBe(http);
    expect(http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
    expect(http.interceptors).toHaveLength(0);
  });

  it('does not double-register API outbound middleware', () => {
    const http = new TestHttpClient();
    http.use(new ApiOutboundTelemetryMiddleware());

    new Client('https://service.example.com', http);
    new Client('https://service.example.com', http);

    expect(http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('does not expose a settable http client', () => {
    const descriptor = Object.getOwnPropertyDescriptor(Client.prototype, 'http');

    expect(descriptor?.get).toBeDefined();
    expect(descriptor?.set).toBeUndefined();
  });

  it('rejects an auth provider with an HTTP client token', () => {
    const http = new TestHttpClient({ token: 'caller-token' });
    const authProvider: AuthProvider = { token: async () => 'token' };

    expect(() => new Client('https://service.example.com', http, { authProvider }))
      .toThrow('Cannot use both an auth provider and an HTTP client token.');
  });

  it('rejects an auth provider with an HTTP client options token', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };

    expect(() => new Client(
      'https://service.example.com',
      { token: 'caller-token' },
      { authProvider }
    )).toThrow('Cannot use both an auth provider and an HTTP client token.');
  });

  it('creates an agentic identity scoped clone', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider });

    const scoped = api.fromAgenticIdentity({ agenticIdentity });

    expect(scoped.serviceUrl).toBe(api.serviceUrl);
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('keeps forAgenticIdentity as an agentic identity convenience alias', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider });

    const scoped = api.forAgenticIdentity(agenticIdentity);

    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('creates a service url scoped clone', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider, agenticIdentity });

    const scoped = api.fromServiceUrl({ serviceUrl: 'https://another.service.example.com/' });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.conversations.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('creates a clone scoped to service url and agentic identity', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticIdentity,
    });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.conversations.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('preserves the default agentic identity when clone receives an undefined identity', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider, agenticIdentity });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticIdentity: undefined,
    });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('clears the default agentic identity when clone receives a null identity', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider, agenticIdentity });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticIdentity: null,
    });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('uses the scoped agentic identity when acquiring middleware auth tokens', async () => {
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'token';
      }
    };
    const http = new TestHttpClient();
    mockAdapter(http);
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', http, { authProvider });

    const scoped = api.fromAgenticIdentity({ agenticIdentity });
    await scoped.http.get('/test');

    expect(calls).toEqual([{ agenticIdentity }]);
  });

  it('preserves and clears scoped agentic identity for middleware auth', async () => {
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'token';
      }
    };
    const http = new TestHttpClient();
    mockAdapter(http);
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user' };
    const api = new Client('https://service.example.com', http, { authProvider, agenticIdentity });

    await api.clone({ agenticIdentity: undefined }).http.get('/preserve');
    await api.clone({ agenticIdentity: null }).http.get('/clear');

    expect(calls).toEqual([
      { agenticIdentity },
      { agenticIdentity: undefined },
    ]);
  });
});
