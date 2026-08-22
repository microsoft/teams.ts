import type { Span } from '@opentelemetry/api';
import { AxiosError } from 'axios';

import {
  ISignInFailureInvokeActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  SignInFailure,
  TokenExchangeInvokeResponse,
  TokenResponse,
} from '@microsoft/teams.api';
import { Client as HttpClient, EventEmitter } from '@microsoft/teams.common';
import { Client as GraphClient } from '@microsoft/teams.graph';

import * as contexts from '../contexts';
import {
  APP_OAUTH_ERROR_TYPE,
  APP_OAUTH_OPERATION,
  APP_OAUTH_RESULT,
  APP_SPAN_NAMES,
} from '../diagnostics/constants';
import { AppEvents, IPlugin } from '../types';
import { PluginAdditionalContext } from '../types/app-routing';

import {
  OAuthTelemetryState,
  recordUnexpectedOAuthError,
  traceOAuthOperation,
} from './telemetry';

import { OAuthFlow } from '.';

const EXPECTED_OAUTH_HTTP_STATUSES = new Set([400, 404, 412]);

/**
 * Default handlers for the SSO sign-in invoke activities
 * (`signin/tokenExchange`, `signin/verifyState`, `signin/failure`).
 *
 * Previously a set of `this: App`-bound free functions; now a collaborator the
 * {@link App} constructs and registers as system routes. The handlers are arrow
 * class fields so they can be passed directly as route callbacks.
 */
export class OauthHandlers<TPlugin extends IPlugin = IPlugin> {
  private static readonly STATE_TTL_MS = 5 * 60 * 1000;

  private readonly processedExchangeIds = new Map<string, number>();
  private readonly tokenExchangeLocks = new Map<string, Promise<{ status: number, body?: TokenExchangeInvokeResponse }>>();

  constructor(
    private readonly getFlows: () => readonly OAuthFlow<TPlugin>[],
    private readonly client: HttpClient,
    private readonly events: EventEmitter<AppEvents<TPlugin>>,
    private readonly graphBaseUrl?: string
  ) { }

  onTokenExchange = async (
    ctx: contexts.IActivityContext<ISignInTokenExchangeInvokeActivity, PluginAdditionalContext<TPlugin>>
  ) => {
    const { api, activity, log, next } = ctx;
    const value = activity.value;
    const activityConnectionName = value?.connectionName;
    const flow = this.resolveTokenExchangeFlow(activityConnectionName);
    const connectionName = flow?.connectionName ?? activityConnectionName ?? '';

    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      connectionName,
      APP_OAUTH_OPERATION.tokenExchange,
      async (span, telemetry) => {
        if (!value || !flow) {
          telemetry.result = APP_OAUTH_RESULT.failure;
          telemetry.responseStatus = 400;
          return { status: 400 };
        }
        if (flow.connectionName !== activityConnectionName) {
          log.warn(
            `OAuth connection "${activityConnectionName}" was not registered; using the only registered flow "${flow.connectionName}"`
          );
        }

        const exchangeId = value.id;
        if (exchangeId) {
          if (this.isExchangeProcessed(ctx, exchangeId)) {
            telemetry.result = APP_OAUTH_RESULT.duplicate;
            telemetry.responseStatus = 200;
            return { status: 200 };
          }
          const existingLock = this.tokenExchangeLocks.get(exchangeId);
          if (existingLock) {
            const result = await existingLock;
            telemetry.result = result.status === 200
              ? APP_OAUTH_RESULT.duplicate
              : APP_OAUTH_RESULT.failure;
            telemetry.responseStatus = result.status;
            return result;
          }
        }

        const performExchange = async () => {
          let token: TokenResponse;
          try {
            token = await api.users.exchangeToken({
              channelId: activity.channelId,
              userId: activity.from.id,
              connectionName,
              exchangeRequest: {
                token: value.token,
              },
            });
          } catch (error) {
            if (error instanceof AxiosError) {
              if (isExpectedOAuthHttpStatus(error)) {
                await flow.fail(ctx);
                telemetry.result = APP_OAUTH_RESULT.failure;
                telemetry.responseStatus = 412;
                return this.tokenExchangeFailure(value.id, connectionName);
              } else {
                this.clearPending(ctx, flow);
                await flow.fail(ctx);
                telemetry.result = APP_OAUTH_RESULT.failure;
                telemetry.responseStatus = error.status || 500;
                recordUnexpectedOAuthError(span, telemetry, error, APP_OAUTH_ERROR_TYPE.httpError);
                this.events.emit('error', { error, activity });
                return { status: error.status || 500 };
              }
            } else {
              this.clearPending(ctx, flow);
              await flow.fail(ctx);
              recordUnexpectedOAuthError(span, telemetry, error, APP_OAUTH_ERROR_TYPE.exception);
            }

            telemetry.result = APP_OAUTH_RESULT.failure;
            telemetry.responseStatus = 412;
            return this.tokenExchangeFailure(value.id, connectionName);
          }

          if (!token?.token) {
            this.clearPending(ctx, flow);
            await flow.fail(ctx);
            telemetry.result = APP_OAUTH_RESULT.failure;
            telemetry.responseStatus = 412;
            return this.tokenExchangeFailure(value.id, connectionName);
          }

          if (exchangeId) {
            this.markExchangeProcessed(ctx, exchangeId);
          }

          this.clearPending(ctx, flow);
          this.applyUserToken(ctx, token);
          await flow.complete(ctx, token);
          this.events.emit('signin', {
            ...ctx,
            connectionName: flow.connectionName,
            token,
            isSignedIn: true,
          });
          telemetry.callbackInvoked = true;
          await next(ctx);
          telemetry.result = APP_OAUTH_RESULT.success;
          telemetry.responseStatus = 200;
          return { status: 200 };
        };

        if (exchangeId) {
          const lock = performExchange();
          this.tokenExchangeLocks.set(exchangeId, lock);
          try {
            return await lock;
          } finally {
            this.tokenExchangeLocks.delete(exchangeId);
          }
        } else {
          return await performExchange();
        }
      }
    );
  };

  onVerifyState = async (
    ctx: contexts.IActivityContext<ISignInVerifyStateInvokeActivity, PluginAdditionalContext<TPlugin>>
  ) => {
    const { log, activity, next } = ctx;
    const flows = this.getOrderedFlows(ctx, false);
    const connectionName = flows[0]?.connectionName ?? '';

    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      connectionName,
      APP_OAUTH_OPERATION.verifyState,
      async (span, telemetry) => {
        if (!activity.value?.state) {
          log.warn(
            `auth state not found for conversation "${activity.conversation.id}" and user "${activity.from.id}"`
          );
          telemetry.result = APP_OAUTH_RESULT.noToken;
          telemetry.responseStatus = 404;
          return { status: 404 };
        }

        for (const flow of flows) {
          const response = await this.verifyFlow(ctx, flow, activity.value.state, span, telemetry);
          if (response.status === 200) {
            telemetry.callbackInvoked = true;
            await next(ctx);
            return response;
          }
        }

        telemetry.result = APP_OAUTH_RESULT.noToken;
        telemetry.responseStatus = 404;
        return { status: 404 };
      }
    );
  };

  /**
   * Default handler for signin/failure invoke activities.
   *
   * Teams sends a signin/failure invoke when SSO token exchange fails
   * (e.g., due to a misconfigured Entra app registration). This handler
   * logs the failure details and emits an error event so developers are
   * notified rather than having the failure silently swallowed.
   *
   * Known failure codes (sent by the Teams client):
   * - `installappfailed`: Failed to install the app in the user's personal scope (non-silent).
   * - `authrequestfailed`: The SSO auth request failed after app installation (non-silent).
   * - `installedappnotfound`: The bot app is not installed for the user or group chat.
   * - `invokeerror`: A generic error occurred during the SSO invoke flow.
   * - `resourcematchfailed`: The token exchange resource URI on the OAuthCard does not
   *   match the Application ID URI in the Entra app registration's "Expose an API" section.
   * - `oauthcardnotvalid`: The bot's OAuthCard could not be parsed.
   * - `tokenmissing`: AAD token acquisition failed.
   * - `userconsentrequired`: The user needs to consent (handled via OAuth card fallback,
   *   does not typically reach the bot).
   * - `interactionrequired`: User interaction is required (handled via OAuth card fallback,
   *   does not typically reach the bot).
   */
  onSignInFailure = async (
    ctx: contexts.IActivityContext<ISignInFailureInvokeActivity, PluginAdditionalContext<TPlugin>>
  ) => {
    const { log, activity, next } = ctx;
    const failure: SignInFailure = activity.value ?? {};
    const { code, message } = failure;
    const pendingFlows = this.getOrderedFlows(ctx, true).filter(
      flow => flow.getPending(ctx, true) !== undefined
    );
    const flows = pendingFlows.length > 0 ? [pendingFlows[0]] : this.getFlows();
    const connectionName = flows[0]?.connectionName ?? '';

    return traceOAuthOperation(
      APP_SPAN_NAMES.oauth,
      connectionName,
      APP_OAUTH_OPERATION.signinFailure,
      async (_span, telemetry) => {
        telemetry.failureCode = code;

        log.warn(
          `sign-in failed for user "${activity.from.id}" in conversation "${activity.conversation.id}": ${code ?? 'unknown'} — ${message ?? 'unknown'}. ` +
          'If the code is \'resourcematchfailed\', verify that your Entra app registration has \'Expose an API\' configured ' +
          'with the correct Application ID URI matching your OAuth connection\'s Token Exchange URL.'
        );

        for (const flow of flows) {
          this.clearPending(ctx, flow);
          await flow.fail(ctx, failure);
        }

        this.events.emit('error', {
          error: new Error(`Sign-in failure: ${code ?? 'unknown'} — ${message ?? 'unknown'}`),
          activity,
        });

        await next(ctx);
        telemetry.result = APP_OAUTH_RESULT.notified;
        telemetry.responseStatus = 200;
        return { status: 200 };
      }
    );
  };

  private resolveTokenExchangeFlow(connectionName?: string): OAuthFlow<TPlugin> | undefined {
    const exact = this.findFlow(connectionName);
    if (exact) {
      return exact;
    }

    const flows = this.getFlows();
    return flows.length === 1 ? flows[0] : undefined;
  }

  private findFlow(connectionName?: string): OAuthFlow<TPlugin> | undefined {
    if (!connectionName) {
      return undefined;
    }

    const normalized = connectionName.toLowerCase();
    return this.getFlows().find(flow => flow.connectionName.toLowerCase() === normalized);
  }

  private async verifyFlow(
    ctx: contexts.IActivityContext<ISignInVerifyStateInvokeActivity, PluginAdditionalContext<TPlugin>>,
    flow: OAuthFlow<TPlugin>,
    state: string,
    span: Span,
    telemetry: OAuthTelemetryState
  ): Promise<{ status: number }> {
    let token: TokenResponse;
    try {
      token = await ctx.api.users.getToken({
        channelId: ctx.activity.channelId,
        userId: ctx.activity.from.id,
        connectionName: flow.connectionName,
        code: state,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        this.clearPending(ctx, flow);
        await flow.fail(ctx);
        if (!isExpectedOAuthHttpStatus(error)) {
          telemetry.result = APP_OAUTH_RESULT.failure;
          telemetry.responseStatus = error.status || 500;
          recordUnexpectedOAuthError(span, telemetry, error, APP_OAUTH_ERROR_TYPE.httpError);
          this.events.emit('error', { error, activity: ctx.activity });
          return { status: error.status || 500 };
        }
      } else {
        throw error;
      }

      telemetry.result = APP_OAUTH_RESULT.failure;
      telemetry.responseStatus = 412;
      return { status: 412 };
    }

    if (!token?.token) {
      telemetry.result = APP_OAUTH_RESULT.noToken;
      telemetry.responseStatus = 412;
      return { status: 412 };
    }

    this.clearPending(ctx, flow);
    this.applyUserToken(ctx, token);
    await flow.complete(ctx, token);
    this.events.emit('signin', {
      ...ctx,
      connectionName: flow.connectionName,
      token,
      isSignedIn: true,
    });
    telemetry.result = APP_OAUTH_RESULT.success;
    telemetry.responseStatus = 200;
    return { status: 200 };
  }

  private applyUserToken(ctx: contexts.IActivityContext, token: TokenResponse): void {
    ctx.userToken = token.token;
    ctx.isSignedIn = true;
    ctx.userGraph = new GraphClient(
      this.client.clone({
        token: token.token,
      }),
      { baseUrlRoot: this.graphBaseUrl }
    );
  }

  private tokenExchangeFailure(
    id: string,
    connectionName: string
  ): { status: number, body: TokenExchangeInvokeResponse } {
    return {
      status: 412,
      body: {
        id,
        connectionName,
        failureDetail: 'unable to exchange token...',
      },
    };
  }

  private isExchangeProcessed(ctx: contexts.IActivityContext, exchangeId: string): boolean {
    const now = Date.now();
    this.pruneExpiredEntries(now);

    const memoryTimestamp = this.processedExchangeIds.get(exchangeId);
    if (memoryTimestamp !== undefined && now - memoryTimestamp < OauthHandlers.STATE_TTL_MS) {
      return true;
    }

    const stateTimestamp = ctx.state?.conversation.get<number>(this.exchangeStateKey(exchangeId));
    return stateTimestamp !== undefined && now - stateTimestamp < OauthHandlers.STATE_TTL_MS;
  }

  private markExchangeProcessed(ctx: contexts.IActivityContext, exchangeId: string): void {
    const timestamp = Date.now();
    this.processedExchangeIds.set(exchangeId, timestamp);
    ctx.state?.conversation.set(this.exchangeStateKey(exchangeId), timestamp);
  }

  private exchangeStateKey(exchangeId: string): string {
    return `__oauth:exchange:${exchangeId}`;
  }

  private getOrderedFlows(
    ctx: contexts.IActivityContext,
    ssoOnly: boolean
  ): OAuthFlow<TPlugin>[] {
    return [...this.getFlows()].sort((left, right) =>
      (right.getPending(ctx, ssoOnly) ?? 0) -
      (left.getPending(ctx, ssoOnly) ?? 0)
    );
  }

  private clearPending(
    ctx: contexts.IActivityContext,
    flow: OAuthFlow<TPlugin>
  ): void {
    flow.clearPending(ctx);
  }

  private pruneExpiredEntries(now: number): void {
    for (const [exchangeId, timestamp] of this.processedExchangeIds) {
      if (now - timestamp >= OauthHandlers.STATE_TTL_MS) {
        this.processedExchangeIds.delete(exchangeId);
      }
    }

  }

}

function isExpectedOAuthHttpStatus(error: AxiosError): boolean {
  return error.status !== undefined && EXPECTED_OAUTH_HTTP_STATUSES.has(error.status);
}
