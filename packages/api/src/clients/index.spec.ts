import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import { ApiOutboundTelemetryMiddleware } from './api-outbound-middleware';
import { AuthProvider } from './auth';

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
  const requests: any[] = [];
  client.instance.defaults.adapter = async (config) => {
    requests.push(config);
    return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
  };
  return requests;
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

  it('exposes a settable http client and prepares it for auth and telemetry', async () => {
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'token';
      },
    };
    const api = new Client('https://service.example.com', undefined, { authProvider });
    const http = new TestHttpClient();
    mockAdapter(http);

    const descriptor = Object.getOwnPropertyDescriptor(Client.prototype, 'http');

    expect(descriptor?.get).toBeDefined();
    expect(descriptor?.set).toBeDefined();

    api.http = http;
    await api.http.get('/test');

    expect(api.http).toBe(http);
    expect(api.bots.http).toBe(http);
    expect(api.users.http).toBe(http);
    expect(api.conversations.http).toBe(http);
    expect(api.teams.http).toBe(http);
    expect(api.meetings.http).toBe(http);
    expect(api.reactions.http).toBe(http);
    expect(http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
    expect(calls).toEqual([{ agenticUser: undefined }]);
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

  it('creates an agentic user scoped clone', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider });

    const scoped = api.fromAgenticUser({ agenticUser });

    expect(scoped.serviceUrl).toBe(api.serviceUrl);
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('keeps forAgenticUser as an agentic user convenience alias', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider });

    const scoped = api.forAgenticUser(agenticUser);

    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('creates a service url scoped clone', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider, agenticUser });

    const scoped = api.fromServiceUrl({ serviceUrl: 'https://another.service.example.com/' });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.conversations.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('creates a clone scoped to service url and agentic user', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticUser,
    });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.conversations.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('preserves the default agentic user when clone receives an undefined identity', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider, agenticUser });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticUser: undefined,
    });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('clears the default agentic user when clone receives a null identity', () => {
    const authProvider: AuthProvider = { token: async () => 'token' };
    const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { authProvider, agenticUser });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticUser: null,
    });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('uses the scoped agentic user when acquiring middleware auth tokens', async () => {
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'token';
      }
    };
    const http = new TestHttpClient();
    mockAdapter(http);
    const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', http, { authProvider });

    const scoped = api.fromAgenticUser({ agenticUser });
    await scoped.http.get('/test');

    expect(calls).toEqual([{ agenticUser }]);
  });

  it('uses a scoped clone for serviceUrl and agentic user', async () => {
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'token';
      },
    };
    const http = new TestHttpClient();
    const requests = mockAdapter(http);
    const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', http, { authProvider });
    const scoped = api.clone({
      serviceUrl: 'https://override.service.example.com/',
      agenticUser,
    });

    await scoped.conversations.createActivity(
      'conversation-id',
      { type: 'message', text: 'hi' }
    );

    expect(requests[0].url).toBe('https://override.service.example.com/v3/conversations/conversation-id/activities');
    expect(calls).toEqual([{ agenticUser }]);
  });

  it('preserves and clears scoped agentic user for middleware auth', async () => {
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'token';
      }
    };
    const http = new TestHttpClient();
    mockAdapter(http);
    const agenticUser = { agentAppInstanceId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', http, { authProvider, agenticUser });

    await api.clone({ agenticUser: undefined }).http.get('/preserve');
    await api.clone({ agenticUser: null }).http.get('/clear');

    expect(calls).toEqual([
      { agenticUser },
      { agenticUser: undefined },
    ]);
  });
});
