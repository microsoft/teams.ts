import { SpanKind } from '@opentelemetry/api';
import type { Span, Tracer } from '@opentelemetry/api';

import { Client } from '@microsoft/teams.common';

import { OUTBOUND_OPERATIONS } from '../diagnostics/constants';
import {
  getTeamsApiTracer,
  recordTeamsApiException,
  recordTeamsApiOutboundCall,
  recordTeamsApiOutboundError
} from '../diagnostics/helpers';

import {
  ApiOutboundTelemetryMiddleware,
  withApiOutboundTelemetry
} from './api-outbound-middleware';
import type { AuthProvider } from './auth';
import { createAuthProviderTokenFactory } from './auth-provider-token';

jest.mock('../diagnostics/helpers', () => ({
  getTeamsApiTracer: jest.fn(),
  recordTeamsApiException: jest.fn(),
  recordTeamsApiOutboundCall: jest.fn(),
  recordTeamsApiOutboundError: jest.fn(),
}));

class HttpClient extends Client {
  get instance() {
    return this.http;
  }
}

function mockAdapter(client: HttpClient, data?: unknown, error?: Error) {
  const requests: any[] = [];
  client.instance.defaults.adapter = async (config) => {
    requests.push(config);
    if (error) {
      throw error;
    }

    return { data, status: 200, statusText: 'OK', headers: {}, config };
  };
  return requests;
}

function telemetryMetadata(
  operation: (typeof OUTBOUND_OPERATIONS)[keyof typeof OUTBOUND_OPERATIONS],
  attributes: Record<string, string> = {},
  options?: { readonly onResponse?: (span: Span, res: { data?: unknown }) => void }
) {
  return {
    operation,
    attributes: {
      operation,
      'service.url': 'https://service.example.com',
      'conversation.id': 'conversation-id',
      ...attributes,
    },
    ...options,
  };
}

describe('API outbound middleware', () => {
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

  it('does not emit telemetry when request metadata is absent', async () => {
    const client = new HttpClient();
    client.use(new ApiOutboundTelemetryMiddleware());
    mockAdapter(client, {});

    await client.post('/test', {});

    expect(getTeamsApiTracer).not.toHaveBeenCalled();
    expect(recordTeamsApiOutboundCall).not.toHaveBeenCalled();
  });

  it('records spans, call metrics, semantic attributes, and response activity IDs', async () => {
    const client = new HttpClient();
    client.use(new ApiOutboundTelemetryMiddleware());
    mockAdapter(client, { activity: { resource: { id: 'response-activity-id' } } });

    await client.post('/test', {}, {
      extensions: withApiOutboundTelemetry(telemetryMetadata(
        OUTBOUND_OPERATIONS.create,
        { 'activity.type': 'message' },
        {
          onResponse: (span, res) => {
            const id = (res.data as { activity?: { resource?: { id?: unknown } } } | undefined)?.activity?.resource?.id;
            if (typeof id === 'string') {
              span.setAttribute('activity.id', id);
            }
          },
        }
      )),
    });

    expect(startActiveSpan).toHaveBeenCalledWith(
      'microsoft.teams.api.client',
      {
        kind: SpanKind.CLIENT,
        attributes: {
          operation: 'create',
          'service.url': 'https://service.example.com',
          'conversation.id': 'conversation-id',
          'activity.type': 'message',
        },
      },
      expect.any(Function)
    );
    expect(recordTeamsApiOutboundCall).toHaveBeenCalledWith('create');
    expect(span.setAttribute).toHaveBeenCalledWith('activity.id', 'response-activity-id');
    expect(span.end).toHaveBeenCalledTimes(1);
  });

  it('records outbound errors and preserves the thrown error', async () => {
    const client = new HttpClient();
    client.use(new ApiOutboundTelemetryMiddleware());
    const error = new Error('failed');
    mockAdapter(client, undefined, error);

    await expect(client.post('/test', {}, {
      extensions: withApiOutboundTelemetry(telemetryMetadata(
        OUTBOUND_OPERATIONS.update,
        { 'activity.type': 'message', 'activity.id': 'activity-id' }
      )),
    })).rejects.toThrow(error);

    expect(recordTeamsApiOutboundCall).toHaveBeenCalledWith('update');
    expect(recordTeamsApiOutboundError).toHaveBeenCalledWith('update');
    expect(recordTeamsApiException).toHaveBeenCalledWith(span, error);
    expect(startActiveSpan).toHaveBeenCalledWith(
      'microsoft.teams.api.client',
      expect.objectContaining({
        attributes: expect.objectContaining({
          'activity.type': 'message',
          'activity.id': 'activity-id',
        }),
      }),
      expect.any(Function)
    );
    expect(span.end).toHaveBeenCalledTimes(1);
  });

  it('runs auth inside the API outbound telemetry middleware', async () => {
    const apiSpan = {
      setAttribute: jest.fn(),
      recordException: jest.fn(),
      setStatus: jest.fn(),
      end: jest.fn(),
    } as unknown as Span;
    const authSpan = {
      setAttribute: jest.fn(),
      recordException: jest.fn(),
      setStatus: jest.fn(),
      end: jest.fn(),
    } as unknown as Span;
    const calls: unknown[] = [];
    const authProvider: AuthProvider = {
      token: async (options) => {
        calls.push(options);
        return 'bot-token';
      }
    };
    const client = new HttpClient();
    client.use(new ApiOutboundTelemetryMiddleware());
    client.token = createAuthProviderTokenFactory(authProvider);
    const requests = mockAdapter(client, {});
    startActiveSpan.mockImplementation((name: string, _options: unknown, callback: (span: Span) => unknown) =>
      callback(name === 'microsoft.teams.auth.outbound' ? authSpan : apiSpan)
    );

    await client.post('/test', {}, {
      extensions: withApiOutboundTelemetry(telemetryMetadata(OUTBOUND_OPERATIONS.create)),
    });

    expect(startActiveSpan.mock.calls.map(([name]) => name)).toEqual([
      'microsoft.teams.api.client',
      'microsoft.teams.auth.outbound',
    ]);
    expect(calls).toEqual([{ agenticIdentity: undefined }]);
    expect(requests[0].headers.Authorization).toBe('Bearer bot-token');
    expect(recordTeamsApiOutboundCall).toHaveBeenCalledWith('create');
    expect(authSpan.end).toHaveBeenCalled();
    expect(apiSpan.end).toHaveBeenCalled();
  });

  it('skips AuthProvider token resolution when Authorization is already set', async () => {
    const authProvider: AuthProvider = {
      token: jest.fn(async () => 'bot-token'),
    };
    const client = new HttpClient();
    client.use(new ApiOutboundTelemetryMiddleware());
    client.token = createAuthProviderTokenFactory(authProvider);
    const requests = mockAdapter(client, {});

    await client.post('/test', {}, {
      headers: { Authorization: 'Bearer caller-token' },
      extensions: withApiOutboundTelemetry(telemetryMetadata(OUTBOUND_OPERATIONS.create)),
    });

    expect(authProvider.token).not.toHaveBeenCalled();
    expect(startActiveSpan.mock.calls.map(([name]) => name)).toEqual([
      'microsoft.teams.api.client',
    ]);
    expect(requests[0].headers.Authorization).toBe('Bearer caller-token');
  });

  it('records parent API outbound errors when auth token acquisition fails', async () => {
    const apiSpan = {
      setAttribute: jest.fn(),
      recordException: jest.fn(),
      setStatus: jest.fn(),
      end: jest.fn(),
    } as unknown as Span;
    const authSpan = {
      setAttribute: jest.fn(),
      recordException: jest.fn(),
      setStatus: jest.fn(),
      end: jest.fn(),
    } as unknown as Span;
    const error = new Error('token failed');
    const authProvider: AuthProvider = {
      token: jest.fn(async () => {
        throw error;
      }),
    };
    const client = new HttpClient();
    client.use(new ApiOutboundTelemetryMiddleware());
    client.token = createAuthProviderTokenFactory(authProvider);
    mockAdapter(client);
    startActiveSpan.mockImplementation((name: string, _options: unknown, callback: (span: Span) => unknown) =>
      callback(name === 'microsoft.teams.auth.outbound' ? authSpan : apiSpan)
    );

    await expect(client.post('/test', {}, {
      extensions: withApiOutboundTelemetry(telemetryMetadata(OUTBOUND_OPERATIONS.create)),
    })).rejects.toThrow(error);

    expect(recordTeamsApiOutboundCall).toHaveBeenCalledWith('create');
    expect(recordTeamsApiOutboundError).toHaveBeenCalledWith('create');
    expect(recordTeamsApiException).toHaveBeenCalledWith(authSpan, error);
    expect(recordTeamsApiException).toHaveBeenCalledWith(apiSpan, error);
    expect(authSpan.end).toHaveBeenCalledTimes(1);
    expect(apiSpan.end).toHaveBeenCalledTimes(1);
  });
});
