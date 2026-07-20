import type { Span, Tracer } from '@opentelemetry/api';
import { AxiosError } from 'axios';

import type {
  ISignInFailureInvokeActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
} from '@microsoft/teams.api';

import { OauthHandlers } from './app.oauth';
import {
  APP_OAUTH_ERROR_TYPE,
  APP_OAUTH_OPERATION,
  APP_OAUTH_RESULT,
  APP_SPAN_NAMES,
} from './diagnostics/constants';
import {
  getTeamsBotApplicationTracer,
  recordTeamsBotApplicationException,
  recordTeamsBotOAuthError,
  recordTeamsBotOAuthOperation,
  recordTeamsBotOAuthOperationDuration,
} from './diagnostics/helpers';

jest.mock('./diagnostics/helpers', () => ({
  getTeamsBotApplicationTracer: jest.fn(),
  recordTeamsBotApplicationException: jest.fn(),
  recordTeamsBotOAuthError: jest.fn(),
  recordTeamsBotOAuthOperation: jest.fn(),
  recordTeamsBotOAuthOperationDuration: jest.fn(),
}));

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
    handlers = new OauthHandlers(() => 'default-connection', client as any, events as any);
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
    expect(span.name).toBe(APP_SPAN_NAMES.oauthTokenExchange);
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
    expect(span.name).toBe(APP_SPAN_NAMES.oauthVerifyState);
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
    expect(span.name).toBe(APP_SPAN_NAMES.oauthSigninFailure);
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
