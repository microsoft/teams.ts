import type { Span } from '@opentelemetry/api';
import { AxiosError } from 'axios';

import type {
  ISignInVerifyStateInvokeActivity,
  TokenResponse,
} from '@microsoft/teams.api';

import type { IActivityContext } from '../contexts';
import {
  APP_OAUTH_ERROR_TYPE,
  APP_OAUTH_OPERATION,
  APP_OAUTH_RESULT,
} from '../diagnostics/constants';
import {
  getTeamsBotApplicationTracer,
  recordTeamsBotApplicationException,
  recordTeamsBotOAuthError,
  recordTeamsBotOAuthOperation,
} from '../diagnostics/helpers';
import { TurnState, TurnStateContainer } from '../state';

import { OAuthFlow } from '.';

jest.mock('../diagnostics/helpers', () => ({
  getTeamsBotApplicationTracer: jest.fn(),
  recordTeamsBotApplicationException: jest.fn(),
  recordTeamsBotOAuthError: jest.fn(),
  recordTeamsBotOAuthOperation: jest.fn(),
  recordTeamsBotOAuthOperationDuration: jest.fn(),
}));

describe('OAuthFlow', () => {
  const token: TokenResponse = {
    channelId: 'msteams',
    connectionName: 'graph',
    token: 'user-token',
    expiration: '2030-01-01T00:00:00Z',
  };
  let context: IActivityContext;
  let getToken: jest.Mock;
  let getSignInResource: jest.Mock;
  let send: jest.Mock;
  let signOut: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.mocked(getTeamsBotApplicationTracer).mockReturnValue({
      startActiveSpan: (
        _name: string,
        _options: unknown,
        callback: (span: Span) => unknown
      ) =>
        callback({
          setAttribute: jest.fn(),
          recordException: jest.fn(),
          end: jest.fn(),
        } as unknown as Span),
    } as ReturnType<typeof getTeamsBotApplicationTracer>);
    getToken = jest.fn();
    getSignInResource = jest.fn();
    send = jest.fn();
    signOut = jest.fn();
    context = {
      appId: 'app-id',
      activity: {
        channelId: 'msteams',
        from: { id: 'user-id' },
        conversation: {
          id: 'conversation-id',
          conversationType: 'personal',
        },
      },
      ref: {
        channelId: 'msteams',
        conversation: { id: 'conversation-id' },
      },
      api: {
        bots: {
          signIn: {
            getResource: getSignInResource,
          },
        },
        users: {
          getToken,
          signOut,
        },
      },
      send,
    } as unknown as IActivityContext;
  });

  it('rejects a blank connection name', () => {
    expect(() => new OAuthFlow('  ')).toThrow('OAuth connection name is required');
  });

  it('returns the existing token string without changing its response shape', async () => {
    getToken.mockResolvedValue(token);
    const flow = new OAuthFlow('graph');

    await expect(flow.getToken(context)).resolves.toBe('user-token');
    expect(getToken).toHaveBeenCalledWith({
      channelId: 'msteams',
      userId: 'user-id',
      connectionName: 'graph',
    });
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'graph',
      APP_OAUTH_OPERATION.getToken,
      APP_OAUTH_RESULT.hit
    );
  });

  it('returns undefined when the token endpoint returns 404', async () => {
    getToken.mockRejectedValue(new AxiosError('missing', '404', undefined, undefined, {
      status: 404,
      statusText: 'Not Found',
      headers: {},
      config: {} as never,
      data: {},
    }));

    await expect(new OAuthFlow('graph').getToken(context)).resolves.toBeUndefined();
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'graph',
      APP_OAUTH_OPERATION.getToken,
      APP_OAUTH_RESULT.miss
    );
  });

  it.each([400, 412])(
    'propagates %i from direct token lookup',
    async status => {
      const error = new AxiosError('token lookup failed', `${status}`, undefined, undefined, {
        status,
        statusText: 'Token Lookup Failed',
        headers: {},
        config: {} as never,
        data: {},
      });
      getToken.mockRejectedValue(error);

      await expect(new OAuthFlow('graph').getToken(context)).rejects.toBe(error);
    }
  );

  it('propagates unexpected token lookup errors', async () => {
    const error = new Error('storage unavailable');
    getToken.mockRejectedValue(error);

    await expect(new OAuthFlow('graph').getToken(context)).rejects.toBe(error);
  });

  it('distinguishes verify-state misses from expected HTTP failures', async () => {
    const failure = jest.fn();
    const flow = new OAuthFlow('graph').onSignInFailure(failure);
    const verifyContext = context as IActivityContext<ISignInVerifyStateInvokeActivity>;
    getToken.mockResolvedValueOnce({});

    await expect(
      flow.verifyState(verifyContext, 'code', jest.fn(), jest.fn())
    ).resolves.toBeUndefined();
    expect(failure).not.toHaveBeenCalled();

    getToken.mockRejectedValueOnce(new AxiosError('missing', '404', undefined, undefined, {
      status: 404,
      statusText: 'Not Found',
      headers: {},
      config: {} as never,
      data: {},
    }));

    await expect(
      flow.verifyState(verifyContext, 'code', jest.fn(), jest.fn())
    ).resolves.toBeUndefined();
    expect(failure).toHaveBeenCalledWith(expect.anything(), undefined);
  });

  it('returns a cached token from sign-in and records the cached result', async () => {
    getToken.mockResolvedValue(token);

    await expect(new OAuthFlow('graph').signIn(context)).resolves.toBe(
      'user-token'
    );

    expect(send).not.toHaveBeenCalled();
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'graph',
      APP_OAUTH_OPERATION.signIn,
      APP_OAUTH_RESULT.cached
    );
  });

  it.each([400, 412, 500])(
    'propagates token lookup status %i instead of sending a sign-in card',
    async status => {
      const error = new AxiosError('token lookup failed', `${status}`, undefined, undefined, {
        status,
        statusText: 'Token Lookup Failed',
        headers: {},
        config: {} as never,
        data: {},
      });
      getToken.mockRejectedValue(error);

      await expect(new OAuthFlow('graph').signIn(context)).rejects.toBe(error);
      expect(getSignInResource).not.toHaveBeenCalled();
      expect(send).not.toHaveBeenCalled();
    }
  );

  it('starts sign-in when the token response contains no token', async () => {
    getToken.mockResolvedValue({});
    getSignInResource.mockResolvedValue({
      signInLink: 'https://token.botframework.com/signin',
    });

    await expect(new OAuthFlow('graph').signIn(context)).resolves.toBeUndefined();
    expect(send).toHaveBeenCalled();
  });

  it('starts sign-in with flow defaults, per-call overrides, and a fixed connection', async () => {
    context.state = new TurnStateContainer(new TurnState(), new TurnState());
    getToken.mockRejectedValue(new AxiosError('missing', '404', undefined, undefined, {
      status: 404,
      statusText: 'Not Found',
      headers: {},
      config: {} as never,
      data: {},
    }));
    getSignInResource.mockResolvedValue({
      signInLink: 'https://token.botframework.com/signin',
      tokenExchangeResource: {
        id: 'exchange-id',
        uri: 'api://app-id',
        providerId: 'provider-id',
      },
    });
    const flow = new OAuthFlow('graph', {
      oauthCardText: 'Default text',
      signInButtonText: 'Continue',
      connectionName: 'ignored-default',
    });

    await flow.signIn(context, {
      oauthCardText: 'Per-call text',
      connectionName: 'ignored-call',
    });

    expect(getToken).toHaveBeenCalledWith({
      channelId: 'msteams',
      userId: 'user-id',
      connectionName: 'graph',
    });
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        attachments: [
          expect.objectContaining({
            content: expect.objectContaining({
              text: 'Per-call text',
              connectionName: 'graph',
              buttons: [
                expect.objectContaining({
                  title: 'Continue',
                  value: 'https://token.botframework.com/signin',
                }),
              ],
            }),
          }),
        ],
      }),
      expect.objectContaining({
        conversation: { id: 'conversation-id' },
      })
    );
    expect(context.state.user?.has('__oauth:pending:graph')).toBe(true);
    expect(context.state.user?.has('__oauth:pending:sso:graph')).toBe(true);
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'graph',
      APP_OAUTH_OPERATION.signIn,
      APP_OAUTH_RESULT.cardSent
    );
  });

  it('targets the sender and omits silent token exchange in channels', async () => {
    context = {
      ...context,
      activity: {
        ...context.activity,
        conversation: {
          id: 'conversation-id',
          conversationType: 'channel',
        },
      },
    } as IActivityContext;
    getToken.mockRejectedValue(new AxiosError('missing', '404', undefined, undefined, {
      status: 404,
      statusText: 'Not Found',
      headers: {},
      config: {} as never,
      data: {},
    }));
    getSignInResource.mockResolvedValue({
      signInLink: 'https://token.botframework.com/signin',
      tokenExchangeResource: {
        id: 'exchange-id',
        uri: 'api://app-id',
        providerId: 'provider-id',
      },
    });

    await new OAuthFlow('graph').signIn(context);

    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        recipient: expect.objectContaining({
          id: 'user-id',
          isTargeted: true,
        }),
        attachments: [
          expect.objectContaining({
            content: expect.objectContaining({
              tokenExchangeResource: undefined,
            }),
          }),
        ],
      }),
      expect.anything()
    );
  });

  it('targets the sender and retains silent token exchange in group chats', async () => {
    context = {
      ...context,
      activity: {
        ...context.activity,
        conversation: {
          id: 'conversation-id',
          conversationType: 'groupChat',
        },
      },
    } as IActivityContext;
    getToken.mockRejectedValue(new AxiosError('missing', '404', undefined, undefined, {
      status: 404,
      statusText: 'Not Found',
      headers: {},
      config: {} as never,
      data: {},
    }));
    const tokenExchangeResource = {
      id: 'exchange-id',
      uri: 'api://app-id',
      providerId: 'provider-id',
    };
    getSignInResource.mockResolvedValue({
      signInLink: 'https://token.botframework.com/signin',
      tokenExchangeResource,
    });

    await new OAuthFlow('graph').signIn(context);

    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        recipient: expect.objectContaining({
          id: 'user-id',
          isTargeted: true,
        }),
        attachments: [
          expect.objectContaining({
            content: expect.objectContaining({
              tokenExchangeResource,
            }),
          }),
        ],
      }),
      expect.anything()
    );
  });

  it('signs out and reports signed-in state through existing clients', async () => {
    signOut.mockResolvedValue(undefined);
    getToken.mockResolvedValue(token);
    const flow = new OAuthFlow('graph');

    await expect(flow.isSignedIn(context)).resolves.toBe(true);
    await flow.signOut(context);

    expect(signOut).toHaveBeenCalledWith({
      channelId: 'msteams',
      userId: 'user-id',
      connectionName: 'graph',
    });
    expect(recordTeamsBotOAuthOperation).toHaveBeenCalledWith(
      'graph',
      APP_OAUTH_OPERATION.signOut,
      APP_OAUTH_RESULT.success
    );
  });

  it('records sign-out failures and propagates the original error', async () => {
    const error = new Error('token service unavailable');
    signOut.mockRejectedValue(error);

    await expect(new OAuthFlow('graph').signOut(context)).rejects.toBe(error);

    expect(recordTeamsBotApplicationException).toHaveBeenCalledWith(
      expect.anything(),
      error
    );
    expect(recordTeamsBotOAuthError).toHaveBeenCalledWith(
      'graph',
      APP_OAUTH_OPERATION.signOut,
      APP_OAUTH_ERROR_TYPE.exception
    );
  });

  it('replaces lifecycle callbacks when registered again', async () => {
    const firstComplete = jest.fn();
    const secondComplete = jest.fn();
    const firstFailure = jest.fn();
    const secondFailure = jest.fn();
    const flow = new OAuthFlow('graph')
      .onSignInComplete(firstComplete)
      .onSignInComplete(secondComplete)
      .onSignInFailure(firstFailure)
      .onSignInFailure(secondFailure);

    await flow.complete(context as any, token);
    await flow.fail(context as any, undefined);

    expect(firstComplete).not.toHaveBeenCalled();
    expect(secondComplete).toHaveBeenCalledWith(context, token);
    expect(firstFailure).not.toHaveBeenCalled();
    expect(secondFailure).toHaveBeenCalledWith(context, undefined);
  });
});
