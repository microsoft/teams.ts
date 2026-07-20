import { AxiosError } from 'axios';
import type { Span } from '@opentelemetry/api';

import {
  ISignInFailureInvokeActivity,
  ISignInTokenExchangeInvokeActivity,
  ISignInVerifyStateInvokeActivity,
  TokenExchangeInvokeResponse,
} from '@microsoft/teams.api';
import { Client as HttpClient, EventEmitter } from '@microsoft/teams.common';
import { Client as GraphClient } from '@microsoft/teams.graph';

import * as contexts from './contexts';
import {
  APP_ATTRIBUTE_NAMES,
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
import { AppEvents, IPlugin } from './types';
import { PluginAdditionalContext } from './types/app-routing';

type OAuthTelemetryState = {
  result?: string;
  responseStatus?: number;
  callbackInvoked?: boolean;
  failureCode?: string;
  errorType?: string;
};

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
  constructor(
    private readonly getConnectionName: () => string,
    private readonly client: HttpClient,
    private readonly events: EventEmitter<AppEvents<TPlugin>>,
    private readonly graphBaseUrl?: string
  ) { }

  onTokenExchange = async (
    ctx: contexts.IActivityContext<ISignInTokenExchangeInvokeActivity, PluginAdditionalContext<TPlugin>>
  ) => {
    const { api, activity, log, next } = ctx;
    const connectionName = this.getConnectionName();
    const activityConnectionName = activity.value.connectionName;

    return traceOAuthOperation(
      APP_SPAN_NAMES.oauthTokenExchange,
      activityConnectionName,
      APP_OAUTH_OPERATION.tokenExchange,
      async (span, telemetry) => {
        if (connectionName !== activityConnectionName) {
          log.warn(
            `default connection name "${connectionName}" does not match activity connection name "${activityConnectionName}"`
          );
        }

        try {
          const token = await api.users.exchangeToken({
            channelId: activity.channelId,
            userId: activity.from.id,
            connectionName: activityConnectionName,
            exchangeRequest: {
              token: activity.value.token,
            },
          });

          ctx.userGraph = new GraphClient(
            this.client.clone({
              token: token.token,
            }),
            { baseUrlRoot: this.graphBaseUrl }
          );

          this.events.emit('signin', { ...ctx, token, isSignedIn: true });
          telemetry.callbackInvoked = true;
          next(ctx);
          telemetry.result = APP_OAUTH_RESULT.success;
          telemetry.responseStatus = 200;
          return { status: 200 };
        } catch (error) {
          if (error instanceof AxiosError) {
            if (!isExpectedOAuthHttpStatus(error)) {
              telemetry.result = APP_OAUTH_RESULT.failure;
              telemetry.responseStatus = error.status || 500;
              recordUnexpectedOAuthError(span, telemetry, error, APP_OAUTH_ERROR_TYPE.httpError);
              this.events.emit('error', { error, activity });
              return { status: error.status || 500 };
            }
          } else {
            recordUnexpectedOAuthError(span, telemetry, error, APP_OAUTH_ERROR_TYPE.exception);
          }

          const body: TokenExchangeInvokeResponse = {
            id: activity.value.id,
            connectionName: activityConnectionName,
            failureDetail: 'unable to exchange token...',
          };

          telemetry.result = APP_OAUTH_RESULT.failure;
          telemetry.responseStatus = 412;
          return {
            status: 412,
            body,
          };
        }
      }
    );
  };

  onVerifyState = async (
    ctx: contexts.IActivityContext<ISignInVerifyStateInvokeActivity, PluginAdditionalContext<TPlugin>>
  ) => {
    const { log, api, activity, next } = ctx;
    const connectionName = this.getConnectionName();

    return traceOAuthOperation(
      APP_SPAN_NAMES.oauthVerifyState,
      connectionName,
      APP_OAUTH_OPERATION.verifyState,
      async (span, telemetry) => {
        try {
          if (!activity.value.state) {
            log.warn(
              `auth state not found for conversation "${activity.conversation.id}" and user "${activity.from.id}"`
            );
            telemetry.result = APP_OAUTH_RESULT.noToken;
            telemetry.responseStatus = 404;
            return { status: 404 };
          }

          const token = await api.users.getToken({
            channelId: activity.channelId,
            userId: activity.from.id,
            connectionName,
            code: activity.value.state,
          });

          ctx.userGraph = new GraphClient(
            this.client.clone({
              token: token.token,
            }),
            { baseUrlRoot: this.graphBaseUrl }
          );

          this.events.emit('signin', { ...ctx, token, isSignedIn: true });
          telemetry.callbackInvoked = true;
          next(ctx);
          telemetry.result = APP_OAUTH_RESULT.success;
          telemetry.responseStatus = 200;
          return { status: 200 };
        } catch (error) {
          if (error instanceof AxiosError) {
            if (!isExpectedOAuthHttpStatus(error)) {
              telemetry.result = APP_OAUTH_RESULT.failure;
              telemetry.responseStatus = error.status || 500;
              recordUnexpectedOAuthError(span, telemetry, error, APP_OAUTH_ERROR_TYPE.httpError);
              this.events.emit('error', { error, activity });
              return { status: error.status || 500 };
            }
          } else {
            recordUnexpectedOAuthError(span, telemetry, error, APP_OAUTH_ERROR_TYPE.exception);
          }

          telemetry.result = APP_OAUTH_RESULT.failure;
          telemetry.responseStatus = 412;
          return { status: 412 };
        }
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
    const { code, message } = activity.value;
    const connectionName = this.getConnectionName();

    return traceOAuthOperation(
      APP_SPAN_NAMES.oauthSigninFailure,
      connectionName,
      APP_OAUTH_OPERATION.signinFailure,
      async (_span, telemetry) => {
        telemetry.failureCode = code;

        log.warn(
          `sign-in failed for user "${activity.from.id}" in conversation "${activity.conversation.id}": ${code} — ${message}. ` +
          'If the code is \'resourcematchfailed\', verify that your Entra app registration has \'Expose an API\' configured ' +
          'with the correct Application ID URI matching your OAuth connection\'s Token Exchange URL.'
        );

        this.events.emit('error', {
          error: new Error(`Sign-in failure: ${code} — ${message}`),
          activity,
        });

        next(ctx);
        telemetry.result = APP_OAUTH_RESULT.notified;
        telemetry.responseStatus = 200;
        return { status: 200 };
      }
    );
  };
}

function traceOAuthOperation<T>(
  spanName: string,
  connectionName: string,
  operation: string,
  execute: (span: Span, telemetry: OAuthTelemetryState) => Promise<T>
): Promise<T> {
  const startedAt = Date.now();

  return getTeamsBotApplicationTracer().startActiveSpan(
    spanName,
    {
      attributes: {
        [APP_ATTRIBUTE_NAMES.oauthConnection]: connectionName,
        [APP_ATTRIBUTE_NAMES.oauthOperation]: operation,
      },
    },
    async (span) => {
      const telemetry: OAuthTelemetryState = {};

      try {
        return await execute(span, telemetry);
      } catch (error) {
        telemetry.result ??= APP_OAUTH_RESULT.failure;
        recordUnexpectedOAuthError(span, telemetry, error, APP_OAUTH_ERROR_TYPE.exception);
        throw error;
      } finally {
        const result = telemetry.result ?? APP_OAUTH_RESULT.failure;

        span.setAttribute(APP_ATTRIBUTE_NAMES.oauthResult, result);
        if (telemetry.responseStatus !== undefined) {
          span.setAttribute(APP_ATTRIBUTE_NAMES.invokeResponseStatus, telemetry.responseStatus);
        }
        if (telemetry.callbackInvoked) {
          span.setAttribute(APP_ATTRIBUTE_NAMES.oauthCallbackInvoked, true);
        }
        if (telemetry.errorType) {
          span.setAttribute(APP_ATTRIBUTE_NAMES.oauthErrorType, telemetry.errorType);
        }
        if (telemetry.failureCode) {
          span.setAttribute(APP_ATTRIBUTE_NAMES.oauthFailureCode, telemetry.failureCode);
        }

        recordTeamsBotOAuthOperation(connectionName, operation, result);
        recordTeamsBotOAuthOperationDuration(connectionName, operation, result, Date.now() - startedAt);
        if (telemetry.errorType) {
          recordTeamsBotOAuthError(connectionName, operation, telemetry.errorType);
        }

        span.end();
      }
    }
  );
}

function recordUnexpectedOAuthError(
  span: Span,
  telemetry: OAuthTelemetryState,
  error: unknown,
  errorType: string
): void {
  if (telemetry.errorType) {
    return;
  }

  telemetry.errorType = errorType;
  recordTeamsBotApplicationException(span, error);
}

function isExpectedOAuthHttpStatus(error: AxiosError): boolean {
  return error.status !== undefined && EXPECTED_OAUTH_HTTP_STATUSES.has(error.status);
}
