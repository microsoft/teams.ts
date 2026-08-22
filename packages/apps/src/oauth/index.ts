import { AxiosError } from 'axios';

import {
  ActivityLike,
  cardAttachment,
  ISignInFailureInvokeActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  SignInFailure,
  TokenExchangeResource,
  TokenExchangeState,
  TokenPostResource,
  TokenResponse,
  TokenStatus,
} from '@microsoft/teams.api';

import type { IActivityContext } from '../contexts';
import {
  APP_OAUTH_ALL_CONNECTIONS,
  APP_OAUTH_OPERATION,
  APP_OAUTH_RESULT,
  APP_SPAN_NAMES,
} from '../diagnostics/constants';
import type { IPlugin } from '../types';
import type { PluginAdditionalContext } from '../types/app-routing';

import { traceOAuthOperation } from './telemetry';

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
  const isChannel = context.activity.conversation.conversationType === 'channel';
  const isGroup = context.activity.conversation.isGroup === true;
  const recipient = isGroup
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
 * correct connection. The legacy default connection is represented by the same
 * flow type and uses the same completion and error semantics even when it is
 * available implicitly for backward compatibility.
 */
export class OAuthFlow<TPlugin extends IPlugin = IPlugin> {
  private static readonly PENDING_TTL_MS = 5 * 60 * 1000;

  private signInCompleteHandler?: OAuthSignInCompleteHandler<TPlugin>;
  private signInFailureHandler?: OAuthSignInFailureHandler<TPlugin>;

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
  getConnectionStatus(context: IActivityContext): Promise<TokenStatus[]> {
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
    const stateValue = context.state?.user?.get<number>(stateKey);
    if (stateValue !== undefined) {
      if (now - stateValue < OAuthFlow.PENDING_TTL_MS) {
        return stateValue;
      }
      context.state?.user?.delete(stateKey);
    }
    return undefined;
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
    context.state?.user?.set(this.pendingStateKey(ssoOnly), value);
  }

  private deletePendingValue(
    context: IActivityContext,
    ssoOnly: boolean
  ): void {
    context.state?.user?.delete(this.pendingStateKey(ssoOnly));
  }

  private pendingStateKey(ssoOnly: boolean): string {
    return `__oauth:pending:${ssoOnly ? 'sso:' : ''}${this.connectionName.toLowerCase()}`;
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
   * Using this setting without registering the matching connection through
   * `app.addOAuthFlow(...)` relies on deprecated internal fallback behavior.
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
