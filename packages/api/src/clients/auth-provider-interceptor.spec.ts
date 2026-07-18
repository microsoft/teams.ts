import { Client } from '@microsoft/teams.common';
import { SpanKind } from '@opentelemetry/api';
import type { Span, Tracer } from '@opentelemetry/api';

import {
  getTeamsApiTracer,
  recordTeamsApiException
} from '../diagnostics/helpers';
import { AgenticIdentity } from '../models';

import { AuthProvider } from './auth';
import { AuthProviderInterceptor } from './auth-provider-interceptor';

jest.mock('../diagnostics/helpers', () => ({
  getTeamsApiTracer: jest.fn(),
  recordTeamsApiException: jest.fn(),
}));

class HttpClient extends Client {
  get instance() {
    return this.http;
  }
}

function mockAdapter(client: HttpClient) {
  const requests: any[] = [];
  client.instance.defaults.adapter = async (config) => {
    requests.push(config);
    return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
  };
  return requests;
}

describe('AuthProviderInterceptor', () => {
  const span = {
    setAttribute: jest.fn(),
    recordException: jest.fn(),
    setStatus: jest.fn(),
    end: jest.fn(),
  } as unknown as Span;
  const startActiveSpan = jest.fn();
  const tracer = { startActiveSpan } as unknown as Tracer;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.mocked(getTeamsApiTracer).mockReturnValue(tracer);
    startActiveSpan.mockImplementation((_name: string, _options: unknown, callback: (span: Span) => unknown) =>
      callback(span)
    );
  });

  it('adds bot token when no authorization header exists', async () => {
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'bot-token';
      }
    };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider)] });
    const requests = mockAdapter(client);

    await client.get('/test');

    expect(calls).toEqual([{ agenticIdentity: undefined }]);
    expect(startActiveSpan).toHaveBeenCalledWith(
      'auth.outbound',
      {
        kind: SpanKind.CLIENT,
        attributes: { 'auth.flow': 'app_only' },
      },
      expect.any(Function)
    );
    expect(span.end).toHaveBeenCalled();
    expect(requests[0].headers.Authorization).toBe('Bearer bot-token');
  });

  it('does not overwrite explicit authorization header', async () => {
    const authProvider: AuthProvider = { token: jest.fn(async () => 'bot-token') };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider)] });
    const requests = mockAdapter(client);

    await client.get('/test', { headers: { Authorization: 'Bearer explicit-token' } });

    expect(authProvider.token).not.toHaveBeenCalled();
    expect(getTeamsApiTracer).not.toHaveBeenCalled();
    expect(requests[0].headers.Authorization).toBe('Bearer explicit-token');
  });

  it('forwards default agentic identity to auth provider and sets token', async () => {
    const identity: AgenticIdentity = { agenticAppId: 'agent-app', agenticUserId: 'agent-user', tenantId: 'tenant-id' };
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'agentic-token';
      }
    };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider, identity)] });
    const requests = mockAdapter(client);

    await client.post('/test', {});

    expect(calls).toEqual([{ agenticIdentity: identity }]);
    expect(startActiveSpan).toHaveBeenCalledWith(
      'auth.outbound',
      {
        kind: SpanKind.CLIENT,
        attributes: { 'auth.flow': 'agentic' },
      },
      expect.any(Function)
    );
    expect(requests[0].headers.Authorization).toBe('Bearer agentic-token');
  });

  it('does not add authorization for blank token', async () => {
    const authProvider: AuthProvider = { token: jest.fn(async () => '   ') };
    const logger = { warn: jest.fn() };
    const client = new HttpClient({
      logger: logger as any,
      interceptors: [new AuthProviderInterceptor(authProvider)]
    });
    const requests = mockAdapter(client);

    await client.get('/test');

    expect(logger.warn).toHaveBeenCalledWith('Auth provider returned an empty token; Authorization header was not added.');
    expect(requests[0].headers.Authorization).toBeUndefined();
  });

  it('uses default agentic identity when no per-request extension is set', async () => {
    const defaultIdentity: AgenticIdentity = { agenticAppId: 'default-app', agenticUserId: 'default-user', tenantId: 'tenant-id' };
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'default-agentic-token';
      }
    };
    const client = new HttpClient({
      interceptors: [new AuthProviderInterceptor(authProvider, defaultIdentity)]
    });
    const requests = mockAdapter(client);

    await client.get('/test');

    expect(calls).toEqual([{ agenticIdentity: defaultIdentity }]);
    expect(requests[0].headers.Authorization).toBe('Bearer default-agentic-token');
  });

  it('does not use request extensions to override default agentic identity', async () => {
    const defaultIdentity: AgenticIdentity = { agenticAppId: 'default-app', agenticUserId: 'default-user', tenantId: 'tenant-id' };
    const requestIdentity: AgenticIdentity = { agenticAppId: 'req-app', agenticUserId: 'req-user', tenantId: 'tenant-id' };
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'request-agentic-token';
      }
    };
    const client = new HttpClient({
      interceptors: [new AuthProviderInterceptor(authProvider, defaultIdentity)]
    });
    const requests = mockAdapter(client);

    await client.post('/test', {}, {
      extensions: { agenticIdentity: requestIdentity }
    });

    expect(calls).toEqual([{ agenticIdentity: defaultIdentity }]);
    expect(requests[0].headers.Authorization).toBe('Bearer request-agentic-token');
  });

  it('records token acquisition errors and preserves the thrown error', async () => {
    const error = new Error('token failed');
    const authProvider: AuthProvider = {
      token: jest.fn(async () => {
        throw error;
      }),
    };
    const client = new HttpClient({ interceptors: [new AuthProviderInterceptor(authProvider)] });
    mockAdapter(client);

    await expect(client.get('/test')).rejects.toThrow(error);

    expect(startActiveSpan).toHaveBeenCalledWith(
      'auth.outbound',
      {
        kind: SpanKind.CLIENT,
        attributes: { 'auth.flow': 'app_only' },
      },
      expect.any(Function)
    );
    expect(recordTeamsApiException).toHaveBeenCalledWith(span, error);
    expect(span.end).toHaveBeenCalled();
  });
});
