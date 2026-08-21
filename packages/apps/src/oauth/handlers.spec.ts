import type { Span, Tracer } from '@opentelemetry/api';
import { AxiosError } from 'axios';

import type {
  ISignInFailureInvokeActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
} from '@microsoft/teams.api';
import { EventEmitter, Client as HttpClient } from '@microsoft/teams.common';

import {
  APP_OAUTH_ERROR_TYPE,
  APP_OAUTH_OPERATION,
  APP_OAUTH_RESULT,
  APP_SPAN_NAMES,
} from '../diagnostics/constants';
import {
  getTeamsBotApplicationTracer,
  recordTeamsBotApplicationException,
  recordTeamsBotOAuthError,
  recordTeamsBotOAuthOperation,
  recordTeamsBotOAuthOperationDuration,
} from '../diagnostics/helpers';
import { TurnState, TurnStateContainer } from '../state';

import { OauthHandlers } from './handlers';

import { OAuthFlow } from '.';

describe('OauthHandlers', () => {
  let handlers: OauthHandlers;
  let mockGetFlows: jest.Mock;
  let mockClient: jest.Mocked<HttpClient>;
  let mockEvents: EventEmitter<any>;
  
  beforeEach(() => {
    mockGetFlows = jest.fn().mockReturnValue([new OAuthFlow('test-connection')]);
    mockClient = { clone: jest.fn().mockReturnThis() } as any;
    mockEvents = new EventEmitter<any>();
    handlers = new OauthHandlers(mockGetFlows, () => false, mockClient, mockEvents);

    (getTeamsBotApplicationTracer as jest.Mock).mockReturnValue({
      startActiveSpan: (_name: string, _options: any, cb: (span: any) => any) => {
        return cb({
          setAttribute: jest.fn(),
          end: jest.fn(),
          setStatus: jest.fn(),
          recordException: jest.fn()
        });
      }
    });
  });

  describe('onTokenExchange', () => {
    it('returns 200 and emits signin event on success', async () => {
      const mockApi = {
        users: {
          exchangeToken: jest.fn().mockResolvedValue({ token: 'test-token' }),
        }
      };
      
      const mockActivity = {
        channelId: 'msteams',
        from: { id: 'user-id' },
        conversation: { id: 'conversation-id' },
        value: {
          id: 'exchange-1',
          connectionName: 'test-connection',
          token: 'some-token',
        }
      };
      
      const next = jest.fn();
      
      const ctx: any = {
        api: mockApi,
        activity: mockActivity,
        log: { warn: jest.fn() },
        next
      };
      
      const result = await handlers.onTokenExchange(ctx);
      
      expect(result).toEqual({ status: 200 });
      expect(mockApi.users.exchangeToken).toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
      expect(ctx.log.warn).toHaveBeenCalledWith(
        '[DEPRECATED] OAuth is using the implicit "test-connection" flow. ' +
        'Register it with app.addOAuthFlow("test-connection").'
      );
    });

    it('returns 412 on generic error', async () => {
      const mockApi = {
        users: {
          exchangeToken: jest.fn().mockRejectedValue(new Error('failed')),
        }
      };
      
      const mockActivity = {
        channelId: 'msteams',
        from: { id: 'user-id' },
        conversation: { id: 'conversation-id' },
        value: {
          id: 'exchange-2',
          connectionName: 'test-connection',
          token: 'some-token',
        }
      };
      
      const ctx: any = {
        api: mockApi,
        activity: mockActivity,
        log: { warn: jest.fn() },
        next: jest.fn()
      };
      
      const result = await handlers.onTokenExchange(ctx);
      
      expect(result.status).toEqual(412);
      expect(result.body).toBeDefined();
    });
    
    it('prevents duplicates for the same exchangeId', async () => {
      const mockApi = {
        users: {
          exchangeToken: jest.fn().mockImplementation(async () => {
             await new Promise(r => setTimeout(r, 10));
             return { token: 'test-token' };
          }),
        }
      };
      
      const mockActivity = {
        channelId: 'msteams',
        from: { id: 'user-id' },
        conversation: { id: 'conversation-id' },
        value: {
          id: 'exchange-3',
          connectionName: 'test-connection',
          token: 'some-token',
        }
      };
      
      const next = jest.fn();
      
      const ctx: any = {
        api: mockApi,
        activity: mockActivity,
        log: { warn: jest.fn() },
        next
      };
      
      const emitSpy = jest.spyOn(mockEvents, 'emit');

      const results = await Promise.all([
        handlers.onTokenExchange(ctx),
        handlers.onTokenExchange(ctx)
      ]);
      
      expect(results).toEqual([{ status: 200 }, { status: 200 }]);
      expect(mockApi.users.exchangeToken).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledTimes(1);
      expect(emitSpy).toHaveBeenCalledWith('signin', expect.anything());
      expect(next).toHaveBeenCalledTimes(1);
    });

    it('returns 412 for concurrent callers when original exchange fails', async () => {
      const mockApi = {
        users: {
          exchangeToken: jest.fn().mockImplementation(async () => {
             await new Promise(r => setTimeout(r, 10));
             throw new Error('failed');
          }),
        }
      };
      
      const mockActivity = {
        channelId: 'msteams',
        from: { id: 'user-id' },
        conversation: { id: 'conversation-id' },
        value: {
          id: 'exchange-4',
          connectionName: 'test-connection',
          token: 'some-token',
        }
      };
      
      const ctx: any = {
        api: mockApi,
        activity: mockActivity,
        log: { warn: jest.fn() },
        next: jest.fn()
      };
      
      const emitSpy = jest.spyOn(mockEvents, 'emit');

      const results = await Promise.all([
        handlers.onTokenExchange(ctx),
        handlers.onTokenExchange(ctx)
      ]);
      
      expect(results[0].status).toEqual(412);
      expect(results[1].status).toEqual(412);
      expect(mockApi.users.exchangeToken).toHaveBeenCalledTimes(1);
      expect(emitSpy).not.toHaveBeenCalled();
      expect(ctx.next).not.toHaveBeenCalled();
    });
  });
});
jest.mock('../diagnostics/helpers', () => ({
  getTeamsBotApplicationTracer: jest.fn(),
  recordTeamsBotApplicationException: jest.fn(),
  recordTeamsBotOAuthError: jest.fn(),
  recordTeamsBotOAuthOperation: jest.fn(),
  recordTeamsBotOAuthOperationDuration: jest.fn(),
}));

describe('OauthHandlers multi-flow lifecycle', () => {
  const client = {
    clone: jest.fn().mockReturnValue({}),
  };
  let events: EventEmitter<any>;
  let graph: OAuthFlow;
  let github: OAuthFlow;
  let handlers: OauthHandlers;

  beforeEach(() => {
    jest.clearAllMocks();
    events = new EventEmitter<any>();
    jest.mocked(getTeamsBotApplicationTracer).mockReturnValue({
      startActiveSpan: (_name: string, _options: unknown, callback: (span: Span) => unknown) =>
        callback({
          setAttribute: jest.fn(),
          recordException: jest.fn(),
          setStatus: jest.fn(),
          end: jest.fn(),
        } as unknown as Span),
    } as unknown as Tracer);
    graph = new OAuthFlow('graph');
    github = new OAuthFlow('github');
    handlers = new OauthHandlers(
      () => [graph, github],
      () => true,
      client as any,
      events
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('dispatches token exchange to the matching flow and preserves the signin event', async () => {
    const onGraphComplete = jest.fn();
    const onGithubComplete = jest.fn();
    graph.onSignInComplete(onGraphComplete);
    github.onSignInComplete(onGithubComplete);
    const ctx = createTokenExchangeContext({
      api: {
        users: {
          exchangeToken: jest.fn().mockResolvedValue({
            token: 'github-token',
            connectionName: 'github',
            expiration: '2030-01-01T00:00:00Z',
          }),
        },
      },
    });
    ctx.activity.value.connectionName = 'github';
    const event = jest.fn();
    events.on('signin', event);

    await expect(handlers.onTokenExchange(ctx as any)).resolves.toEqual({ status: 200 });

    expect(onGraphComplete).not.toHaveBeenCalled();
    expect(onGithubComplete).toHaveBeenCalledWith(
      expect.objectContaining({ userToken: 'github-token', isSignedIn: true }),
      expect.objectContaining({ token: 'github-token', connectionName: 'github' })
    );
    expect(event).toHaveBeenCalledWith(expect.objectContaining({
      connectionName: 'github',
      token: expect.objectContaining({ token: 'github-token' }),
      userToken: 'github-token',
      isSignedIn: true,
    }));
  });

  it('returns 400 when multiple flows cannot resolve the exchange connection', async () => {
    const exchangeToken = jest.fn();
    const ctx = createTokenExchangeContext({
      api: { users: { exchangeToken } },
    });
    ctx.activity.value.connectionName = 'unknown';

    await expect(handlers.onTokenExchange(ctx as any)).resolves.toEqual({ status: 400 });
    expect(exchangeToken).not.toHaveBeenCalled();
  });

  it('tries the newest pending flow first for verify-state invokes', async () => {
    const now = jest.spyOn(Date, 'now');
    const graphComplete = jest.fn();
    const githubComplete = jest.fn();
    graph.onSignInComplete(graphComplete);
    github.onSignInComplete(githubComplete);
    const ctx = createVerifyStateContext({
      api: {
        users: {
          getToken: jest.fn().mockImplementation(({ connectionName }) => {
            if (connectionName !== 'github') {
              throw new AxiosError('missing', '404', undefined, undefined, {
                status: 404,
                statusText: 'Not Found',
                headers: {},
                config: {} as any,
                data: {},
              });
            }
            return {
              token: 'github-token',
              connectionName,
              expiration: '2030-01-01T00:00:00Z',
            };
          }),
        },
      },
    });

    now.mockReturnValue(1_000);
    graph.recordPending(ctx as any, true);
    now.mockReturnValue(2_000);
    github.recordPending(ctx as any, true);
    now.mockReturnValue(2_500);

    await expect(handlers.onVerifyState(ctx as any)).resolves.toEqual({ status: 200 });
    expect(ctx.api.users.getToken).toHaveBeenCalledTimes(1);
    expect(ctx.api.users.getToken).toHaveBeenCalledWith(expect.objectContaining({
      connectionName: 'github',
      code: 'auth-code-state',
    }));
    expect(graphComplete).not.toHaveBeenCalled();
    expect(githubComplete).toHaveBeenCalled();
    now.mockRestore();
  });

  it('attributes client failure to the newest pending SSO-capable flow', async () => {
    const graphFailure = jest.fn();
    const githubFailure = jest.fn();
    graph.onSignInFailure(graphFailure);
    github.onSignInFailure(githubFailure);
    const ctx = createSignInFailureContext();

    graph.recordPending(ctx as any, false);
    github.recordPending(ctx as any, true);
    await expect(handlers.onSignInFailure(ctx as any)).resolves.toEqual({ status: 200 });

    expect(graphFailure).not.toHaveBeenCalled();
    expect(githubFailure).toHaveBeenCalledWith(
      expect.anything(),
      { code: 'resourcematchfailed', message: 'full failure message' }
    );
  });

  it('uses enabled user state for pending attribution across handler instances', async () => {
    const state = new TurnStateContainer(new TurnState(), new TurnState());
    const markContext = createVerifyStateContext({ state });
    github.recordPending(markContext as any, true);
    const githubComplete = jest.fn();
    github.onSignInComplete(githubComplete);
    const nextHandler = new OauthHandlers(
      () => [graph, github],
      () => true,
      client as any,
      events
    );
    const verifyContext = createVerifyStateContext({
      state,
      api: {
        users: {
          getToken: jest.fn().mockResolvedValue({
            token: 'github-token',
            connectionName: 'github',
            expiration: '2030-01-01T00:00:00Z',
          }),
        },
      },
    });

    await expect(nextHandler.onVerifyState(verifyContext as any)).resolves.toEqual({ status: 200 });
    expect(verifyContext.api.users.getToken).toHaveBeenCalledWith(expect.objectContaining({
      connectionName: 'github',
    }));
    expect(githubComplete).toHaveBeenCalled();
  });

  it('clears pending state and invokes failure callbacks for verify-state HTTP errors', async () => {
    const state = new TurnStateContainer(new TurnState(), new TurnState());
    const graphFailure = jest.fn();
    const githubFailure = jest.fn();
    graph.onSignInFailure(graphFailure);
    github.onSignInFailure(githubFailure);
    const ctx = createVerifyStateContext({
      state,
      api: {
        users: {
          getToken: jest.fn().mockRejectedValue(
            new AxiosError('missing', '404', undefined, undefined, {
              status: 404,
              statusText: 'Not Found',
              headers: {},
              config: {} as any,
              data: {},
            })
          ),
        },
      },
    });
    github.recordPending(ctx as any, true);

    await expect(handlers.onVerifyState(ctx as any)).resolves.toEqual({ status: 404 });

    expect(state.user?.has('__oauth:pending:github')).toBe(false);
    expect(state.user?.has('__oauth:pending:sso:github')).toBe(false);
    expect(graphFailure).toHaveBeenCalledWith(expect.anything(), undefined);
    expect(githubFailure).toHaveBeenCalledWith(expect.anything(), undefined);
  });

  it('propagates non-HTTP verify-state failures for explicitly registered flows', async () => {
    const error = new Error('invalid token response');
    const ctx = createVerifyStateContext({
      api: {
        users: {
          getToken: jest.fn().mockRejectedValue(error),
        },
      },
    });

    await expect(handlers.onVerifyState(ctx as any)).rejects.toBe(error);
  });

  it('uses conversation state to suppress a late duplicate across handler instances', async () => {
    const state = new TurnStateContainer(new TurnState(), new TurnState());
    const firstExchange = jest.fn().mockResolvedValue({
      token: 'graph-token',
      connectionName: 'graph',
      expiration: '2030-01-01T00:00:00Z',
    });
    const firstContext = createTokenExchangeContext({
      state,
      api: { users: { exchangeToken: firstExchange } },
    });
    firstContext.activity.value.connectionName = 'graph';

    await expect(handlers.onTokenExchange(firstContext as any)).resolves.toEqual({ status: 200 });

    const secondExchange = jest.fn();
    const secondContext = createTokenExchangeContext({
      state,
      api: { users: { exchangeToken: secondExchange } },
    });
    secondContext.activity.value.connectionName = 'graph';
    const nextHandler = new OauthHandlers(
      () => [graph, github],
      () => true,
      client as any,
      events
    );

    await expect(nextHandler.onTokenExchange(secondContext as any)).resolves.toEqual({ status: 200 });
    expect(secondExchange).not.toHaveBeenCalled();
  });

  it('keeps a successful exchange deduplicated when a completion callback throws', async () => {
    const callbackError = new Error('callback failed');
    github.onSignInComplete(() => {
      throw callbackError;
    });
    const exchangeToken = jest.fn().mockResolvedValue({
      token: 'github-token',
      connectionName: 'github',
      expiration: '2030-01-01T00:00:00Z',
    });
    const ctx = createTokenExchangeContext({
      api: { users: { exchangeToken } },
    });
    ctx.activity.value.connectionName = 'github';

    await expect(handlers.onTokenExchange(ctx as any)).rejects.toBe(callbackError);
    await expect(handlers.onTokenExchange(ctx as any)).resolves.toEqual({ status: 200 });
    expect(exchangeToken).toHaveBeenCalledTimes(1);
  });
});

type SpanRecord = {
  readonly name: string;
  readonly options: any;
  readonly attributes: Record<string, unknown>;
  readonly span: Span;
};

const log = {
  warn: jest.fn(),
};
const next = jest.fn();

describe('OauthHandlers diagnostics', () => {
  const startActiveSpan = jest.fn();
  const tracer = { startActiveSpan } as unknown as Tracer;
  const client = {
    clone: jest.fn(() => ({ token: jest.fn() })),
  };
  const events = {
    emit: jest.fn(),
  };
  let spans: SpanRecord[];
  let handlers: OauthHandlers;

  beforeEach(() => {
    spans = [];
    jest.clearAllMocks();
    jest.mocked(getTeamsBotApplicationTracer).mockReturnValue(tracer);
    startActiveSpan.mockImplementation((name: string, options: unknown, callback: (span: Span) => unknown) => {
      const attributes: Record<string, unknown> = {};
      const span = {
        setAttribute: jest.fn((key: string, value: unknown) => {
          attributes[key] = value;
          return span;
        }),
        recordException: jest.fn(),
        setStatus: jest.fn(),
        end: jest.fn(),
      } as unknown as Span;
      spans.push({ name, options, attributes, span });
      return callback(span);
    });
    handlers = new OauthHandlers(
      () => [new OAuthFlow('default-connection')],
      () => false,
      client as any,
      events as any
    );
  });

  it('emits token exchange success telemetry without recording token values', async () => {
    const ctx = createTokenExchangeContext({
      api: {
        users: {
          exchangeToken: jest.fn().mockResolvedValue({ token: 'secret-token' }),
        },
      },
    });

    const response = await handlers.onTokenExchange(ctx as any);
    const span = spans[0];
    const emitted = JSON.stringify([span.options, span.attributes]);

    expect(response).toEqual({ status: 200 });
    expect(span.name).toBe(APP_SPAN_NAMES.oauth);
    expect(span.options.attributes).toEqual({
      'oauth.connection': 'activity-connection',
      'oauth.operation': APP_OAUTH_OPERATION.tokenExchange,
    });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.success,
      'invoke.response.status': 200,
      'oauth.callback.invoked': true,
    }));
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'activity-connection',
      APP_OAUTH_OPERATION.tokenExchange,
      APP_OAUTH_RESULT.success
    );
    expect(recordTeamsBotOAuthOperationDuration).toHaveBeenCalledWith(
      'activity-connection',
      APP_OAUTH_OPERATION.tokenExchange,
      APP_OAUTH_RESULT.success,
      expect.any(Number)
    );
    expect(recordTeamsBotOAuthError).not.toHaveBeenCalled();
    expect(recordTeamsBotApplicationException).not.toHaveBeenCalled();
    expect(emitted).not.toContain('secret-token');
    expect(emitted).not.toContain('user-id');
  });

  it('records expected token exchange fallbacks as failures without OAuth errors', async () => {
    const ctx = createTokenExchangeContext({
      api: {
        users: {
          exchangeToken: jest.fn().mockRejectedValue(createAxiosError(412)),
        },
      },
    });

    const response = await handlers.onTokenExchange(ctx as any);
    const span = spans[0];

    expect(response).toEqual({
      status: 412,
      body: {
        id: 'exchange-id',
        connectionName: 'activity-connection',
        failureDetail: 'unable to exchange token...',
      },
    });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.failure,
      'invoke.response.status': 412,
    }));
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'activity-connection',
      APP_OAUTH_OPERATION.tokenExchange,
      APP_OAUTH_RESULT.failure
    );
    expect(recordTeamsBotOAuthError).not.toHaveBeenCalled();
    expect(recordTeamsBotApplicationException).not.toHaveBeenCalled();
  });

  it('records unexpected non-HTTP token exchange fallbacks as failures with OAuth errors', async () => {
    const error = new Error('invalid operation');
    const ctx = createTokenExchangeContext({
      api: {
        users: {
          exchangeToken: jest.fn().mockRejectedValue(error),
        },
      },
    });

    const response = await handlers.onTokenExchange(ctx as any);
    const span = spans[0];

    expect(response).toEqual({
      status: 412,
      body: {
        id: 'exchange-id',
        connectionName: 'activity-connection',
        failureDetail: 'unable to exchange token...',
      },
    });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.failure,
      'invoke.response.status': 412,
      'oauth.error.type': APP_OAUTH_ERROR_TYPE.exception,
    }));
    expect(recordTeamsBotApplicationException).toHaveBeenCalledWith(span.span, error);
    expect(recordTeamsBotOAuthError).toHaveBeenCalledWith(
      'activity-connection',
      APP_OAUTH_OPERATION.tokenExchange,
      APP_OAUTH_ERROR_TYPE.exception
    );
  });

  it('records unexpected token exchange HTTP errors separately from operation failures', async () => {
    const error = createAxiosError(500);
    const ctx = createTokenExchangeContext({
      api: {
        users: {
          exchangeToken: jest.fn().mockRejectedValue(error),
        },
      },
    });

    const response = await handlers.onTokenExchange(ctx as any);
    const span = spans[0];

    expect(response).toEqual({ status: 500 });
    expect(events.emit).toHaveBeenCalledWith('error', { error, activity: ctx.activity });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.failure,
      'invoke.response.status': 500,
      'oauth.error.type': APP_OAUTH_ERROR_TYPE.httpError,
    }));
    expect(recordTeamsBotApplicationException).toHaveBeenCalledWith(span.span, error);
    expect(recordTeamsBotOAuthError).toHaveBeenCalledWith(
      'activity-connection',
      APP_OAUTH_OPERATION.tokenExchange,
      APP_OAUTH_ERROR_TYPE.httpError
    );
  });

  it('emits verify state failure telemetry for expected token service fallbacks', async () => {
    const ctx = createVerifyStateContext({
      api: {
        users: {
          getToken: jest.fn().mockRejectedValue(createAxiosError(404)),
        },
      },
    });

    const response = await handlers.onVerifyState(ctx as any);
    const span = spans[0];
    const emitted = JSON.stringify([span.options, span.attributes]);

    expect(response).toEqual({ status: 412 });
    expect(span.name).toBe(APP_SPAN_NAMES.oauth);
    expect(span.options.attributes).toEqual({
      'oauth.connection': 'default-connection',
      'oauth.operation': APP_OAUTH_OPERATION.verifyState,
    });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.failure,
      'invoke.response.status': 412,
    }));
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'default-connection',
      APP_OAUTH_OPERATION.verifyState,
      APP_OAUTH_RESULT.failure
    );
    expect(recordTeamsBotOAuthError).not.toHaveBeenCalled();
    expect(recordTeamsBotApplicationException).not.toHaveBeenCalled();
    expect(emitted).not.toContain('auth-code-state');
  });

  it('records missing verify state as no-token without OAuth errors', async () => {
    const ctx = createVerifyStateContext();
    ctx.activity.value.state = '';

    const response = await handlers.onVerifyState(ctx as any);
    const span = spans[0];

    expect(response).toEqual({ status: 404 });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.noToken,
      'invoke.response.status': 404,
    }));
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'default-connection',
      APP_OAUTH_OPERATION.verifyState,
      APP_OAUTH_RESULT.noToken
    );
    expect(recordTeamsBotOAuthError).not.toHaveBeenCalled();
    expect(recordTeamsBotApplicationException).not.toHaveBeenCalled();
  });

  it('records unexpected non-HTTP verify state fallbacks as failures with OAuth errors', async () => {
    const error = new Error('verify exception');
    const ctx = createVerifyStateContext({
      api: {
        users: {
          getToken: jest.fn().mockRejectedValue(error),
        },
      },
    });

    const response = await handlers.onVerifyState(ctx as any);
    const span = spans[0];

    expect(response).toEqual({ status: 412 });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.failure,
      'invoke.response.status': 412,
      'oauth.error.type': APP_OAUTH_ERROR_TYPE.exception,
    }));
    expect(recordTeamsBotApplicationException).toHaveBeenCalledWith(span.span, error);
    expect(recordTeamsBotOAuthError).toHaveBeenCalledWith(
      'default-connection',
      APP_OAUTH_OPERATION.verifyState,
      APP_OAUTH_ERROR_TYPE.exception
    );
  });

  it('records unexpected verify state HTTP errors separately from operation failures', async () => {
    const error = createAxiosError(503);
    const ctx = createVerifyStateContext({
      api: {
        users: {
          getToken: jest.fn().mockRejectedValue(error),
        },
      },
    });

    const response = await handlers.onVerifyState(ctx as any);
    const span = spans[0];

    expect(response).toEqual({ status: 503 });
    expect(events.emit).toHaveBeenCalledWith('error', { error, activity: ctx.activity });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.failure,
      'invoke.response.status': 503,
      'oauth.error.type': APP_OAUTH_ERROR_TYPE.httpError,
    }));
    expect(recordTeamsBotApplicationException).toHaveBeenCalledWith(span.span, error);
    expect(recordTeamsBotOAuthError).toHaveBeenCalledWith(
      'default-connection',
      APP_OAUTH_OPERATION.verifyState,
      APP_OAUTH_ERROR_TYPE.httpError
    );
  });

  it('emits verify state success telemetry with callback-invoked attribute', async () => {
    const ctx = createVerifyStateContext({
      api: {
        users: {
          getToken: jest.fn().mockResolvedValue({ token: 'verify-token' }),
        },
      },
    });

    const response = await handlers.onVerifyState(ctx as any);
    const span = spans[0];
    const emitted = JSON.stringify([span.options, span.attributes]);

    expect(response).toEqual({ status: 200 });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.success,
      'invoke.response.status': 200,
      'oauth.callback.invoked': true,
    }));
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'default-connection',
      APP_OAUTH_OPERATION.verifyState,
      APP_OAUTH_RESULT.success
    );
    expect(recordTeamsBotOAuthError).not.toHaveBeenCalled();
    expect(emitted).not.toContain('verify-token');
    expect(emitted).not.toContain('auth-code-state');
  });

  it('emits signin failure notification telemetry without recording failure messages', async () => {
    const ctx = createSignInFailureContext();

    const response = await handlers.onSignInFailure(ctx as any);
    const span = spans[0];
    const emitted = JSON.stringify([span.options, span.attributes]);

    expect(response).toEqual({ status: 200 });
    expect(span.name).toBe(APP_SPAN_NAMES.oauth);
    expect(span.options.attributes).toEqual({
      'oauth.connection': 'default-connection',
      'oauth.operation': APP_OAUTH_OPERATION.signinFailure,
    });
    expect(span.attributes).toEqual(expect.objectContaining({
      'oauth.result': APP_OAUTH_RESULT.notified,
      'invoke.response.status': 200,
      'oauth.failure.code': 'resourcematchfailed',
    }));
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'default-connection',
      APP_OAUTH_OPERATION.signinFailure,
      APP_OAUTH_RESULT.notified
    );
    expect(recordTeamsBotOAuthError).not.toHaveBeenCalled();
    expect(recordTeamsBotApplicationException).not.toHaveBeenCalled();
    expect(emitted).not.toContain('full failure message');
    expect(emitted).not.toContain('user-id');
  });
});

function createTokenExchangeContext(overrides: Record<string, unknown> = {}) {
  return {
    api: {
      users: {
        exchangeToken: jest.fn(),
      },
    },
    activity: {
      type: 'invoke',
      name: 'signin/tokenExchange',
      id: 'activity-id',
      channelId: 'msteams',
      from: { id: 'user-id', role: 'user' },
      conversation: { id: 'conversation-id', conversationType: 'personal' },
      recipient: { id: 'bot-id', role: 'bot' },
      value: {
        id: 'exchange-id',
        connectionName: 'activity-connection',
        token: 'incoming-token',
      },
    } as ISignInTokenExchangeInvokeActivity,
    log,
    next,
    ...overrides,
  };
}

function createVerifyStateContext(overrides: Record<string, unknown> = {}) {
  return {
    api: {
      users: {
        getToken: jest.fn(),
      },
    },
    activity: {
      type: 'invoke',
      name: 'signin/verifyState',
      id: 'activity-id',
      channelId: 'msteams',
      from: { id: 'user-id', role: 'user' },
      conversation: { id: 'conversation-id', conversationType: 'personal' },
      recipient: { id: 'bot-id', role: 'bot' },
      value: {
        state: 'auth-code-state',
      },
    } as ISignInVerifyStateInvokeActivity,
    log,
    next,
    ...overrides,
  };
}

function createSignInFailureContext(overrides: Record<string, unknown> = {}) {
  return {
    activity: {
      type: 'invoke',
      name: 'signin/failure',
      id: 'activity-id',
      channelId: 'msteams',
      from: { id: 'user-id', role: 'user' },
      conversation: { id: 'conversation-id', conversationType: 'personal' },
      recipient: { id: 'bot-id', role: 'bot' },
      value: {
        code: 'resourcematchfailed',
        message: 'full failure message',
      },
    } as ISignInFailureInvokeActivity,
    log,
    next,
    ...overrides,
  };
}

function createAxiosError(status: number): AxiosError {
  return new AxiosError(
    `HTTP ${status}`,
    `${status}`,
    undefined,
    undefined,
    {
      status,
      statusText: `HTTP ${status}`,
      headers: {},
      config: {} as any,
      data: {},
    }
  );
}
