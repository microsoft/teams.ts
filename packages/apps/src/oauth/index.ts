import { AxiosError } from 'axios';

import {
  ActivityLike,
  cardAttachment,
  ISignInFailureInvokeActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  SignInFailure,
  TokenExchangeResource,
  TokenExchangeInvokeResponse,
  TokenExchangeState,
  TokenPostResource,
  TokenResponse,
  TokenStatus,
} from '@microsoft/teams.api';

import type { IActivityContext } from '../contexts';
import {
  APP_OAUTH_ERROR_TYPE,
  APP_OAUTH_ALL_CONNECTIONS,
  APP_OAUTH_OPERATION,
  APP_OAUTH_RESULT,
  APP_SPAN_NAMES,
} from '../diagnostics/constants';
import type { IPlugin } from '../types';
import type { PluginAdditionalContext } from '../types/app-routing';

import {
  recordUnexpectedOAuthError,
  traceOAuthOperation,
} from './telemetry';

/**
 * Options used when an OAuth flow starts an interactive sign-in.
 */
export type OAuthSignInOptions = {
  /**
   * Text displayed on the OAuth card.
   *
   * When omitted, the SDK uses `Please Sign In...`.
   */
  readonly oauthCardText?: string;

  /**
   * Text displayed on the OAuth card's sign-in button.
   *
   * When omitted, the SDK uses `Sign In`.
   */
  readonly signInButtonText?: string;

  /**
   * Overrides the sign-in URL returned by the Bot Framework token service.
   *
   * Leave undefined to use the service-provided URL.
   *
   * @deprecated Use the sign-in URL returned by the Bot Framework token service.
   */
  readonly signInLink?: string;

  /**
   * OAuth connection used for this sign-in.
   *
   * Leave undefined to use the activity context's default connection. An
   * {@link OAuthFlow} always supplies its own connection name.
   *
   * @deprecated Register the connection with `app.addOAuthFlow(...)`. Registered
   * flows always use their own connection name.
   */
  readonly connectionName?: string;

  /**
   * Builds a custom sign-in activity instead of the SDK's OAuth card.
   *
   * The token exchange resource is undefined in channels because Teams cannot
   * complete silent token exchange there. Other undefined resources were not
   * returned by the token service and should be omitted from custom cards.
   *
   * @deprecated Use the SDK-generated OAuth card. Customize its text with
   * `oauthCardText` and `signInButtonText`.
   */
  readonly overrideSignInActivity?: (
    tokenExchangeResource?: TokenExchangeResource,
    tokenPostResource?: TokenPostResource,
    signInLink?: string
  ) => ActivityLike;
};

type OAuthSignInInitiatedHandler = (
  context: IActivityContext,
  connectionName: string,
  supportsSso: boolean
) => void | Promise<void>;

type OAuthVerifyStateResult =
  | {
    readonly kind: 'success';
    readonly status: 200;
    readonly token: TokenResponse;
  }
  | {
    readonly kind: 'miss';
    readonly status: 404 | 412;
  }
  | {
    readonly kind: 'error';
    readonly status: number;
    readonly error: AxiosError;
  };

type OAuthTokenExchangeResult =
  | {
    readonly kind: 'success';
    readonly status: 200;
    readonly token: TokenResponse;
  }
  | {
    readonly kind: 'duplicate';
    readonly status: 200;
  }
  | {
    readonly kind: 'fallback';
    readonly status: 412;
    readonly body: TokenExchangeInvokeResponse;
  }
  | {
    readonly kind: 'error';
    readonly status: number;
    readonly error: AxiosError;
  };

/** @internal Gets a cached token or emits an OAuth sign-in card. */
export async function startOAuthSignIn(
  context: IActivityContext,
  connectionName: string,
  options: OAuthSignInOptions = {},
  onSignInInitiated?: OAuthSignInInitiatedHandler
): Promise<string | undefined> {
  const oauthCardText = options.oauthCardText ?? 'Please Sign In...';
  const signInButtonText = options.signInButtonText ?? 'Sign In';

  try {
    const response = await context.api.users.getToken({
      channelId: context.activity.channelId,
      userId: context.activity.from.id,
      connectionName,
    });
    return response.token;
  } catch (error) {
    if (!isMissingTokenError(error)) {
      throw error;
    }
  }

  const conversation = { ...context.ref };
  const tokenExchangeState: TokenExchangeState = {
    connectionName,
    conversation,
    relatesTo: context.activity.relatesTo,
    msAppId: context.appId,
  };
  const state = Buffer.from(JSON.stringify(tokenExchangeState)).toString('base64');
  const resource = await context.api.bots.signIn.getResource({ state });
  const conversationType = context.activity.conversation.conversationType;
  const isChannel = conversationType === 'channel';
  const isChannelOrGroup =
    isChannel || conversationType === 'groupChat';
  const recipient = isChannelOrGroup
    ? { ...context.activity.from, isTargeted: true }
    : context.activity.from;
  const tokenExchangeResource = isChannel
    ? undefined
    : resource.tokenExchangeResource;

  await context.send(
    options.overrideSignInActivity?.(
      tokenExchangeResource,
      resource.tokenPostResource,
      resource.signInLink
    ) ?? {
      type: 'message',
      recipient,
      attachments: [
        cardAttachment('oauth', {
          text: oauthCardText,
          connectionName,
          tokenExchangeResource,
          tokenPostResource: resource.tokenPostResource,
          buttons: [
            {
              type: 'signin',
              title: signInButtonText,
              value: options.signInLink || resource.signInLink,
            },
          ],
        }),
      ],
    },
    conversation
  );

  await onSignInInitiated?.(
    context,
    connectionName,
    tokenExchangeResource !== undefined
  );
  return undefined;
}

/**
 * Called after an interactive OAuth flow obtains a token.
 *
 * Cached tokens returned directly by {@link OAuthFlow.signIn} do not invoke
 * this callback.
 */
export type OAuthSignInCompleteHandler<
  TPlugin extends IPlugin = IPlugin
> = (
  context: IActivityContext<
    ISignInTokenExchangeInvokeActivity | ISignInVerifyStateInvokeActivity,
    PluginAdditionalContext<TPlugin>
  >,
  token: TokenResponse
) => void | Promise<void>;

/**
 * Called when an OAuth flow cannot complete sign-in.
 *
 * `failure` contains the Teams client payload for `signin/failure` invokes.
 * It is undefined for token-service or token-exchange failures.
 */
export type OAuthSignInFailureHandler<
  TPlugin extends IPlugin = IPlugin
> = (
  context: IActivityContext<
    | ISignInFailureInvokeActivity
    | ISignInTokenExchangeInvokeActivity
    | ISignInVerifyStateInvokeActivity,
    PluginAdditionalContext<TPlugin>
  >,
  failure?: SignInFailure
) => void | Promise<void>;

/**
 * High-level OAuth lifecycle for one Bot Framework OAuth connection.
 *
 * Flows are registered through `AppOptions.oauthFlows` or
 * `app.addOAuthFlow(...)` so inbound sign-in invokes can be dispatched to the
 * correct connection. Apps without registered flows retain their legacy
 * default connection as the same flow type for backward compatibility.
 */
export class OAuthFlow<TPlugin extends IPlugin = IPlugin> {
  private static readonly PENDING_TTL_MS = 5 * 60 * 1000;
  private static readonly MAX_PENDING_ENTRIES = 1_000;
  private static readonly EXCHANGE_TTL_MS = 5 * 60 * 1000;
  private static readonly MAX_EXCHANGE_ENTRIES = 1_000;
  private static readonly EXCHANGE_STATE_KEY = '__oauth:exchanges';

  private signInCompleteHandler?: OAuthSignInCompleteHandler<TPlugin>;
  private signInFailureHandler?: OAuthSignInFailureHandler<TPlugin>;
  private readonly pendingSignIns = new Map<string, number>();
  private readonly pendingSsoSignIns = new Map<string, number>();
  // Process-local only: this map collapses concurrent duplicates that reach the
  // same instance; persisted conversation state covers cross-instance retries.
  private readonly tokenExchangeLocks = new Map<
    string,
    Promise<OAuthTokenExchangeResult>
  >();
  // Retains completed exchanges when state is disabled or unavailable.
  private readonly processedExchanges = new Map<string, number>();

  /**
   * Creates an OAuth flow for a connection.
   *
   * Applications should use `AppOptions.oauthFlows` or
   * `app.addOAuthFlow(...)` so the flow is registered for inbound invokes.
   * @param connectionName OAuth connection name configured on the bot.
   * @param options Optional default card options.
   */
  constructor(
    readonly connectionName: string,
    private readonly options: OAuthSignInOptions = {}
  ) {
    if (!connectionName.trim()) {
      throw new Error('OAuth connection name is required.');
    }

  }

  /**
   * Registers the callback invoked after interactive sign-in completes.
   *
   * Calling this method again replaces the previous callback.
   */
  onSignInComplete(handler: OAuthSignInCompleteHandler<TPlugin>): this {
    this.signInCompleteHandler = handler;
    return this;
  }

  /**
   * Registers the callback invoked when interactive sign-in fails.
   *
   * Calling this method again replaces the previous callback.
   */
  onSignInFailure(handler: OAuthSignInFailureHandler<TPlugin>): this {
    this.signInFailureHandler = handler;
    return this;
  }

  /**
   * Silently gets the current user's token for this connection.
   *
   * Returns undefined when the token service reports that no token is available.
   * Unexpected transport and service failures are propagated.
   */
  async getToken(context: IActivityContext): Promise<string | undefined> {
    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      this.connectionName,
      APP_OAUTH_OPERATION.getToken,
      async (_span, telemetry) => {
        try {
          const response = await context.api.users.getToken({
            channelId: context.activity.channelId,
            userId: context.activity.from.id,
            connectionName: this.connectionName,
          });
          const token = response.token || undefined;
          telemetry.result = token
            ? APP_OAUTH_RESULT.hit
            : APP_OAUTH_RESULT.miss;
          return token;
        } catch (error) {
          if (isMissingTokenError(error)) {
            telemetry.result = APP_OAUTH_RESULT.miss;
            return undefined;
          }

          throw error;
        }
      }
    );
  }

  /**
   * Gets a cached token or sends an OAuth card to start interactive sign-in.
   *
   * Returns the cached token string when already signed in. Returns undefined
   * after sending a card; completion is then delivered to the registered
   * callback and the existing app `signin` event.
   */
  signIn(
    context: IActivityContext,
    options: OAuthSignInOptions = {}
  ): Promise<string | undefined> {
    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      this.connectionName,
      APP_OAUTH_OPERATION.signIn,
      async (_span, telemetry) => {
        const token = await startOAuthSignIn(
          context,
          this.connectionName,
          {
            ...this.options,
            ...options,
            connectionName: this.connectionName,
          },
          (signInContext, _connectionName, supportsSso) => {
            this.recordPending(signInContext, supportsSso);
          }
        );
        telemetry.result = token
          ? APP_OAUTH_RESULT.cached
          : APP_OAUTH_RESULT.cardSent;
        return token;
      }
    );
  }

  /**
   * Revokes the current user's token for this connection.
   */
  signOut(context: IActivityContext): Promise<void> {
    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      this.connectionName,
      APP_OAUTH_OPERATION.signOut,
      async (_span, telemetry) => {
        await context.api.users.signOut({
          channelId: context.activity.channelId,
          userId: context.activity.from.id,
          connectionName: this.connectionName,
        });
        telemetry.result = APP_OAUTH_RESULT.success;
      }
    );
  }

  /**
   * Returns whether a token is currently available for this connection.
   */
  async isSignedIn(context: IActivityContext): Promise<boolean> {
    return (await this.getToken(context)) !== undefined;
  }

  /**
   * Gets the token service status for the current user's configured connections.
   *
   * The Bot Framework endpoint returns all connection statuses; callers can
   * select this flow's entry by matching {@link connectionName}.
   */
  getAllConnectionStatuses(context: IActivityContext): Promise<TokenStatus[]> {
    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      APP_OAUTH_ALL_CONNECTIONS,
      APP_OAUTH_OPERATION.connectionStatus,
      async (_span, telemetry) => {
        const statuses = await context.api.users.getTokenStatus({
          channelId: context.activity.channelId,
          userId: context.activity.from.id,
          includeFilter: '',
        });
        telemetry.result = APP_OAUTH_RESULT.success;
        return statuses;
      }
    );
  }

  /** @internal Invokes the registered completion callback. */
  async complete(
    context: IActivityContext<
      ISignInTokenExchangeInvokeActivity | ISignInVerifyStateInvokeActivity,
      PluginAdditionalContext<TPlugin>
    >,
    token: TokenResponse
  ): Promise<void> {
    await this.signInCompleteHandler?.(context, token);
  }

  /** @internal Invokes the registered failure callback. */
  async fail(
    context: IActivityContext<
      | ISignInFailureInvokeActivity
      | ISignInTokenExchangeInvokeActivity
      | ISignInVerifyStateInvokeActivity,
      PluginAdditionalContext<TPlugin>
    >,
    failure?: SignInFailure
  ): Promise<void> {
    await this.signInFailureHandler?.(context, failure);
  }

  /** @internal Exchanges an SSO token for this flow. */
  async exchangeToken(
    context: IActivityContext<
      ISignInTokenExchangeInvokeActivity,
      PluginAdditionalContext<TPlugin>
    >,
    value: ISignInTokenExchangeInvokeActivity['value'],
    applyToken: (token: TokenResponse) => void | Promise<void>
  ): Promise<OAuthTokenExchangeResult> {
    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      this.connectionName,
      APP_OAUTH_OPERATION.tokenExchange,
      async (span, telemetry) => {
        const exchangeId = value.id;
        if (exchangeId) {
          if (this.isExchangeProcessed(context, exchangeId)) {
            telemetry.result = APP_OAUTH_RESULT.duplicate;
            telemetry.responseStatus = 200;
            return { kind: 'duplicate', status: 200 };
          }

          const existingLock = this.tokenExchangeLocks.get(exchangeId);
          if (existingLock) {
            const result = await existingLock;
            telemetry.result = result.status === 200
              ? APP_OAUTH_RESULT.duplicate
              : APP_OAUTH_RESULT.failure;
            telemetry.responseStatus = result.status;
            return result.kind === 'success'
              ? { kind: 'duplicate', status: 200 }
              : result;
          }
        }

        const performExchange = async (): Promise<OAuthTokenExchangeResult> => {
          let token: TokenResponse;
          try {
            token = await context.api.users.exchangeToken({
              channelId: context.activity.channelId,
              userId: context.activity.from.id,
              connectionName: this.connectionName,
              exchangeRequest: {
                token: value.token,
              },
            });
          } catch (error) {
            if (!(error instanceof AxiosError)) {
              // Token-service failures use AxiosError. Let anything outside
              // that contract follow the app's normal error handling.
              throw error;
            }

            if (isMissingTokenError(error)) {
              // 412 tells Teams that silent SSO could not complete and it
              // should fall back to the interactive OAuth card.
              await this.fail(context);
              telemetry.callbackInvoked =
                this.signInFailureHandler !== undefined;
              telemetry.result = APP_OAUTH_RESULT.failure;
              telemetry.responseStatus = 412;
              return this.tokenExchangeFailure(value.id);
            }

            // Unexpected service statuses are operational errors, not a
            // request for interactive fallback, so preserve their status.
            this.clearPending(context);
            await this.fail(context);
            telemetry.callbackInvoked =
              this.signInFailureHandler !== undefined;
            telemetry.result = APP_OAUTH_RESULT.failure;
            const status = error.status || 500;
            telemetry.responseStatus = status;
            recordUnexpectedOAuthError(
              span,
              telemetry,
              error,
              APP_OAUTH_ERROR_TYPE.httpError
            );
            return { kind: 'error', status, error };
          }

          if (!token?.token) {
            this.clearPending(context);
            await this.fail(context);
            telemetry.callbackInvoked = this.signInFailureHandler !== undefined;
            telemetry.result = APP_OAUTH_RESULT.failure;
            telemetry.responseStatus = 412;
            return this.tokenExchangeFailure(value.id);
          }

          if (exchangeId) {
            this.markExchangeProcessed(context, exchangeId);
          }

          this.clearPending(context);
          await applyToken(token);
          await this.complete(context, token);
          telemetry.callbackInvoked = this.signInCompleteHandler !== undefined;
          telemetry.result = APP_OAUTH_RESULT.success;
          telemetry.responseStatus = 200;
          return { kind: 'success', status: 200, token };
        };

        if (!exchangeId) {
          return performExchange();
        }

        const lock = performExchange();
        this.tokenExchangeLocks.set(exchangeId, lock);
        try {
          return await lock;
        } finally {
          this.tokenExchangeLocks.delete(exchangeId);
        }
      }
    );
  }

  /** @internal Attempts to redeem a verify-state code for this flow. */
  async verifyState(
    context: IActivityContext<
      ISignInVerifyStateInvokeActivity,
      PluginAdditionalContext<TPlugin>
    >,
    state: string | undefined,
    applyToken: (token: TokenResponse) => void | Promise<void>
  ): Promise<OAuthVerifyStateResult> {
    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      this.connectionName,
      APP_OAUTH_OPERATION.verifyState,
      async (span, telemetry) => {
        if (!state) {
          context.log.warn(
            `auth state not found for conversation "${context.activity.conversation.id}" and user "${context.activity.from.id}"`
          );
          telemetry.result = APP_OAUTH_RESULT.noToken;
          telemetry.responseStatus = 404;
          return { kind: 'miss', status: 404 };
        }

        let token: TokenResponse;
        try {
          token = await context.api.users.getToken({
            channelId: context.activity.channelId,
            userId: context.activity.from.id,
            connectionName: this.connectionName,
            code: state,
          });
        } catch (error) {
          if (!(error instanceof AxiosError)) {
            throw error;
          }

          this.clearPending(context);
          await this.fail(context);
          telemetry.callbackInvoked = this.signInFailureHandler !== undefined;
          telemetry.result = APP_OAUTH_RESULT.failure;
          if (isMissingTokenError(error)) {
            telemetry.responseStatus = 412;
            return { kind: 'miss', status: 412 };
          }

          const status = error.status || 500;
          telemetry.responseStatus = status;
          recordUnexpectedOAuthError(
            span,
            telemetry,
            error,
            APP_OAUTH_ERROR_TYPE.httpError
          );
          return { kind: 'error', status, error };
        }

        if (!token?.token) {
          telemetry.result = APP_OAUTH_RESULT.noToken;
          telemetry.responseStatus = 412;
          return { kind: 'miss', status: 412 };
        }

        this.clearPending(context);
        await applyToken(token);
        await this.complete(context, token);
        telemetry.callbackInvoked = this.signInCompleteHandler !== undefined;
        telemetry.result = APP_OAUTH_RESULT.success;
        telemetry.responseStatus = 200;
        return { kind: 'success', status: 200, token };
      }
    );
  }

  /** @internal Records this flow as the source of an interactive sign-in. */
  recordPending(context: IActivityContext, supportsSso: boolean): void {
    const startedAt = Date.now();
    this.setPendingValue(context, false, startedAt);
    if (supportsSso) {
      this.setPendingValue(context, true, startedAt);
    } else {
      this.deletePendingValue(context, true);
    }
  }

  /** @internal Gets when this flow most recently initiated sign-in. */
  getPending(context: IActivityContext, ssoOnly: boolean): number | undefined {
    const now = Date.now();
    const stateKey = this.pendingStateKey(ssoOnly);
    const userState = context.state?.user;
    if (userState) {
      const stateValue = userState.get<number>(stateKey);
      if (stateValue !== undefined) {
        if (now - stateValue < OAuthFlow.PENDING_TTL_MS) {
          return stateValue;
        }
        userState.delete(stateKey);
      }
      return undefined;
    }

    const pending = this.pendingMap(ssoOnly);
    this.prunePending(pending, now);
    return pending.get(context.activity.from.id);
  }

  /** @internal Clears pending sign-in attribution for this flow. */
  clearPending(context: IActivityContext): void {
    this.deletePendingValue(context, false);
    this.deletePendingValue(context, true);
  }

  private setPendingValue(
    context: IActivityContext,
    ssoOnly: boolean,
    value: number
  ): void {
    const userState = context.state?.user;
    if (userState) {
      userState.set(this.pendingStateKey(ssoOnly), value);
      return;
    }

    const pending = this.pendingMap(ssoOnly);
    pending.set(context.activity.from.id, value);
    this.prunePending(pending, value);
  }

  private deletePendingValue(
    context: IActivityContext,
    ssoOnly: boolean
  ): void {
    context.state?.user?.delete(this.pendingStateKey(ssoOnly));
    this.pendingMap(ssoOnly).delete(context.activity.from.id);
  }

  private pendingStateKey(ssoOnly: boolean): string {
    return `__oauth:pending:${ssoOnly ? 'sso:' : ''}${this.connectionName.toLowerCase()}`;
  }

  private pendingMap(ssoOnly: boolean): Map<string, number> {
    return ssoOnly ? this.pendingSsoSignIns : this.pendingSignIns;
  }

  private prunePending(pending: Map<string, number>, now: number): void {
    for (const [userId, timestamp] of pending) {
      if (now - timestamp >= OAuthFlow.PENDING_TTL_MS) {
        pending.delete(userId);
      }
    }

    if (pending.size <= OAuthFlow.MAX_PENDING_ENTRIES) {
      return;
    }

    for (const [userId] of [...pending.entries()]
      .sort(([, left], [, right]) => right - left)
      .slice(OAuthFlow.MAX_PENDING_ENTRIES)) {
      pending.delete(userId);
    }
  }

  private tokenExchangeFailure(
    id: string
  ): Extract<OAuthTokenExchangeResult, { kind: 'fallback' }> {
    return {
      kind: 'fallback',
      status: 412,
      body: {
        id,
        connectionName: this.connectionName,
        failureDetail: 'unable to exchange token...',
      },
    };
  }

  private isExchangeProcessed(
    context: IActivityContext,
    exchangeId: string
  ): boolean {
    const now = Date.now();
    const stateTimestamp = this.getExchangeState(context, now)[exchangeId];
    if (
      stateTimestamp !== undefined &&
      now - stateTimestamp < OAuthFlow.EXCHANGE_TTL_MS
    ) {
      return true;
    }

    this.pruneProcessedExchanges(now);
    return this.processedExchanges.has(exchangeId);
  }

  private markExchangeProcessed(
    context: IActivityContext,
    exchangeId: string
  ): void {
    const timestamp = Date.now();
    this.processedExchanges.set(exchangeId, timestamp);
    this.pruneProcessedExchanges(timestamp);

    const conversationState = context.state?.conversation;
    if (!conversationState) {
      return;
    }

    const exchanges = this.getExchangeState(context, timestamp);
    exchanges[exchangeId] = timestamp;
    const bounded = Object.fromEntries(
      Object.entries(exchanges)
        .sort(([, left], [, right]) => right - left)
        .slice(0, OAuthFlow.MAX_EXCHANGE_ENTRIES)
    );
    conversationState.set(OAuthFlow.EXCHANGE_STATE_KEY, bounded);
  }

  private pruneProcessedExchanges(now: number): void {
    for (const [exchangeId, timestamp] of this.processedExchanges) {
      if (now - timestamp >= OAuthFlow.EXCHANGE_TTL_MS) {
        this.processedExchanges.delete(exchangeId);
      }
    }

    if (this.processedExchanges.size <= OAuthFlow.MAX_EXCHANGE_ENTRIES) {
      return;
    }

    for (const [exchangeId] of [...this.processedExchanges.entries()]
      .sort(([, left], [, right]) => right - left)
      .slice(OAuthFlow.MAX_EXCHANGE_ENTRIES)) {
      this.processedExchanges.delete(exchangeId);
    }
  }

  private getExchangeState(
    context: IActivityContext,
    now: number
  ): Record<string, number> {
    const conversationState = context.state?.conversation;
    if (!conversationState) {
      return {};
    }

    const stored = conversationState.get<Record<string, number>>(
      OAuthFlow.EXCHANGE_STATE_KEY
    ) ?? {};
    const current = Object.fromEntries(
      Object.entries(stored)
        .filter(([, timestamp]) =>
          Number.isFinite(timestamp) &&
          now - timestamp < OAuthFlow.EXCHANGE_TTL_MS
        )
        .sort(([, left], [, right]) => right - left)
        .slice(0, OAuthFlow.MAX_EXCHANGE_ENTRIES)
    );

    if (Object.keys(current).length !== Object.keys(stored).length) {
      if (Object.keys(current).length === 0) {
        conversationState.delete(OAuthFlow.EXCHANGE_STATE_KEY);
      } else {
        conversationState.set(OAuthFlow.EXCHANGE_STATE_KEY, current);
      }
    }
    return current;
  }
}

/**
 * OAuth configuration for an app.
 *
 * @deprecated Register connections with `app.addOAuthFlow(...)` and use the
 * returned flow for token lookup, sign-in, status, and sign-out operations.
 * This configuration remains supported for legacy context OAuth behavior.
 */
export type OAuthSettings = {
  /**
   * the OAuth connection name to use for
   * authentication
   *
   * This legacy default cannot be combined with `AppOptions.oauthFlows` or
   * `app.addOAuthFlow(...)`. Deprecated context OAuth helpers may omit the
   * connection name to use this default; explicitly supplied connection names
   * continue to override it. When omitted, the same behavior uses `graph`.
   * @default `graph`
   * @deprecated Register the connection with `app.addOAuthFlow(...)`.
   */
  readonly defaultConnectionName?: string;

  /**
   * whether to eagerly look up the user's OAuth token on every inbound activity.
   * the token is used to compute `ctx.isSignedIn` and `ctx.userToken`, and to authenticate
   * `ctx.userGraph` (which is always constructed regardless of this setting).
   * when left unset, this is auto-detected: enabled only when an OAuth connection is
   * explicitly configured via `defaultConnectionName`, so apps that never use user OAuth
   * do not pay for a wasted token request on every turn.
   * set explicitly to `true` or `false` to override the auto-detection.
   * @deprecated Use `OAuthFlow.getToken(...)` or `OAuthFlow.isSignedIn(...)`
   * only when the handler needs the user's OAuth state.
   */
  readonly fetchUserToken?: boolean;
};

/** @internal Defaults retained for deprecated context OAuth behavior. */
export const DEFAULT_OAUTH_SETTINGS: Required<Pick<OAuthSettings, 'defaultConnectionName'>> = {
  defaultConnectionName: 'graph'
};

function isMissingTokenError(error: unknown): boolean {
  return error instanceof AxiosError &&
    (error.status === 400 || error.status === 404 || error.status === 412);
}
