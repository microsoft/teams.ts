import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions
} from '@microsoft/teams.common';

import type { ITokenProvider } from '../auth/credentials';

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
  const requests: any[] = [];
  client.instance.defaults.adapter = async (config) => {
    requests.push(config);
    return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
  };
  return requests;
}

/**
 * Records which capability the client reached for, so a test can tell an
 * app-only acquisition from the specific agentic token helpers.
 */
function recordingProvider(calls: unknown[]): ITokenProvider {
  return {
    getAppToken: async () => {
      calls.push({ flow: 'app' });
      return 'token';
    },
    getAgenticUserToken: async (_scope, agenticAppId, agenticUserId, tenantId) => {
      calls.push({ flow: 'agenticUser', agenticAppId, agenticUserId, tenantId });
      return 'token';
    },
    getAgenticAppToken: async (_scope, agenticAppId, tenantId) => {
      calls.push({ flow: 'agenticApp', agenticAppId, tenantId });
      return 'token';
    },
  };
}

describe('Api Client token provider', () => {
  it('registers API outbound middleware without mutating interceptors', () => {
    const http = new TestHttpClient();
    const tokenProvider: ITokenProvider = { getAppToken: async () => 'token' };

    const api = new Client('https://service.example.com', http, { tokenProvider });

    expect(api.http).toBe(http);
    expect(http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
    expect(http.interceptors).toHaveLength(0);
  });

  it('always supplies an explicit scope to the token provider', async () => {
    // `getAppToken` declares `scope` as required. Making it optional would be
    // unsafe: TS method bivariance lets a consumer implement `(scope: string)`
    // against an optional-scope interface, then receive `undefined` from a no-arg call.
    const scopes: unknown[] = [];
    const tokenProvider: ITokenProvider = {
      getAppToken: async (scope) => {
        scopes.push(scope);
        return 'token';
      },
    };
    const http = new TestHttpClient();
    mockAdapter(http);
    const api = new Client('https://service.example.com', http, { tokenProvider });

    await api.http.get('/test');

    expect(scopes).toEqual(['https://api.botframework.com/.default']);
    expect(scopes.every((scope) => typeof scope === 'string' && scope.length > 0)).toBe(true);
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
    const tokenProvider = recordingProvider(calls);
    const api = new Client('https://service.example.com', undefined, { tokenProvider });
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
    expect(calls).toEqual([{ flow: 'app' }]);
  });

  it('rejects a token provider with an HTTP client token', () => {
    const http = new TestHttpClient({ token: 'caller-token' });
    const tokenProvider: ITokenProvider = { getAppToken: async () => 'token' };

    expect(() => new Client('https://service.example.com', http, { tokenProvider }))
      .toThrow('Cannot use both a token provider and an HTTP client token.');
  });

  it('rejects a token provider with an HTTP client options token', () => {
    const tokenProvider: ITokenProvider = { getAppToken: async () => 'token' };

    expect(() => new Client(
      'https://service.example.com',
      { token: 'caller-token' },
      { tokenProvider }
    )).toThrow('Cannot use both a token provider and an HTTP client token.');
  });

  it('creates an agentic identity scoped clone', () => {
    const tokenProvider: ITokenProvider = { getAppToken: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { tokenProvider });

    const scoped = api.fromAgenticIdentity({ agenticIdentity });

    expect(scoped.serviceUrl).toBe(api.serviceUrl);
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('keeps forAgenticIdentity as the canonical agentic identity helper', () => {
    const tokenProvider: ITokenProvider = { getAppToken: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { tokenProvider });

    const scoped = api.forAgenticIdentity(agenticIdentity);

    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('creates a service url scoped clone', () => {
    const tokenProvider: ITokenProvider = { getAppToken: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { tokenProvider, agenticIdentity });

    const scoped = api.fromServiceUrl({ serviceUrl: 'https://another.service.example.com/' });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.conversations.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('creates a clone scoped to service url and agentic identity', () => {
    const tokenProvider: ITokenProvider = { getAppToken: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { tokenProvider });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticIdentity,
    });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.conversations.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('preserves the default agentic identity when clone receives an undefined identity', () => {
    const tokenProvider: ITokenProvider = { getAppToken: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { tokenProvider, agenticIdentity });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticIdentity: undefined,
    });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('clears the default agentic identity when clone receives a null identity', () => {
    const tokenProvider: ITokenProvider = { getAppToken: async () => 'token' };
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', undefined, { tokenProvider, agenticIdentity });

    const scoped = api.clone({
      serviceUrl: 'https://another.service.example.com/',
      agenticIdentity: null,
    });

    expect(scoped.serviceUrl).toBe('https://another.service.example.com');
    expect(scoped.http.middlewares.filter((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)).toHaveLength(1);
  });

  it('uses the scoped agentic identity when acquiring middleware auth tokens', async () => {
    const calls: unknown[] = [];
    const tokenProvider = recordingProvider(calls);
    const http = new TestHttpClient();
    mockAdapter(http);
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', http, { tokenProvider });

    const scoped = api.fromAgenticIdentity({ agenticIdentity });
    await scoped.http.get('/test');

    expect(calls).toEqual([
      {
        flow: 'agenticUser',
        agenticAppId: 'agent-app',
        agenticUserId: 'agentic-user',
        tenantId: undefined,
      },
    ]);
  });

  it('uses getAgenticUserToken for user-backed identity when identity helper is omitted', async () => {
    const calls: unknown[] = [];
    const tokenProvider: ITokenProvider = {
      getAppToken: async () => {
        calls.push({ flow: 'app' });
        return 'token';
      },
      getAgenticUserToken: async (scope, agenticAppId, agenticUserId, tenantId) => {
        calls.push({ flow: 'agenticUser', scope, agenticAppId, agenticUserId, tenantId });
        return 'token';
      },
    };
    const http = new TestHttpClient();
    mockAdapter(http);
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user', tenantId: 'tenant' };
    const api = new Client('https://service.example.com', http, { tokenProvider });

    await api.fromAgenticIdentity({ agenticIdentity }).http.get('/test');

    expect(calls).toEqual([{
      flow: 'agenticUser',
      scope: 'https://botapi.skype.com/.default',
      agenticAppId: 'agent-app',
      agenticUserId: 'agentic-user',
      tenantId: 'tenant',
    }]);
  });

  it('uses getAgenticAppToken for app-backed identity when identity helper is omitted', async () => {
    const calls: unknown[] = [];
    const tokenProvider: ITokenProvider = {
      getAppToken: async () => {
        calls.push({ flow: 'app' });
        return 'token';
      },
      getAgenticAppToken: async (scope, agenticAppId, tenantId) => {
        calls.push({ flow: 'agenticApp', scope, agenticAppId, tenantId });
        return 'token';
      },
    };
    const http = new TestHttpClient();
    mockAdapter(http);
    const agenticIdentity = { agenticAppId: 'agent-app', tenantId: 'tenant' };
    const api = new Client('https://service.example.com', http, { tokenProvider });

    await api.fromAgenticIdentity({ agenticIdentity }).http.get('/test');

    expect(calls).toEqual([{
      flow: 'agenticApp',
      scope: 'https://botapi.skype.com/.default',
      agenticAppId: 'agent-app',
      tenantId: 'tenant',
    }]);
  });

  it('uses a scoped clone for serviceUrl and agentic identity', async () => {
    const calls: unknown[] = [];
    const tokenProvider = recordingProvider(calls);
    const http = new TestHttpClient();
    const requests = mockAdapter(http);
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', http, { tokenProvider });
    const scoped = api.clone({
      serviceUrl: 'https://override.service.example.com/',
      agenticIdentity,
    });

    await scoped.conversations.createActivity(
      'conversation-id',
      { type: 'message', text: 'hi' }
    );

    expect(requests[0].url).toBe('https://override.service.example.com/v3/conversations/conversation-id/activities');
    expect(calls).toEqual([
      {
        flow: 'agenticUser',
        agenticAppId: 'agent-app',
        agenticUserId: 'agentic-user',
        tenantId: undefined,
      },
    ]);
  });

  it('preserves and clears scoped agentic identity for middleware auth', async () => {
    const calls: unknown[] = [];
    const tokenProvider = recordingProvider(calls);
    const http = new TestHttpClient();
    mockAdapter(http);
    const agenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agentic-user' };
    const api = new Client('https://service.example.com', http, { tokenProvider, agenticIdentity });

    await api.clone({ agenticIdentity: undefined }).http.get('/preserve');
    await api.clone({ agenticIdentity: null }).http.get('/clear');

    expect(calls).toEqual([
      {
        flow: 'agenticUser',
        agenticAppId: 'agent-app',
        agenticUserId: 'agentic-user',
        tenantId: undefined,
      },
      { flow: 'app' },
    ]);
  });
});
