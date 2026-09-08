import type { Span } from '@opentelemetry/api';
import { AxiosError } from 'axios';

import {
  APP_ATTRIBUTE_NAMES,
  APP_OAUTH_ERROR_TYPE,
  APP_OAUTH_RESULT,
} from '../diagnostics/constants';
import {
  getTeamsBotApplicationTracer,
  recordTeamsBotApplicationException,
  recordTeamsBotOAuthError,
  recordTeamsBotOAuthOperation,
  recordTeamsBotOAuthOperationDuration,
} from '../diagnostics/helpers';

/** @internal Mutable attributes collected while tracing an OAuth operation. */
export type OAuthTelemetryState = {
  result?: string;
  responseStatus?: number;
  callbackInvoked?: boolean;
  failureCode?: string;
  errorType?: string;
};

/** @internal Traces one OAuth lifecycle operation and records its metrics. */
export function traceOAuthOperation<T>(
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
        recordUnexpectedOAuthError(
          span,
          telemetry,
          error,
          error instanceof AxiosError
            ? APP_OAUTH_ERROR_TYPE.httpError
            : APP_OAUTH_ERROR_TYPE.exception
        );
        throw error;
      } finally {
        const result = telemetry.result ?? APP_OAUTH_RESULT.failure;

        span.setAttribute(APP_ATTRIBUTE_NAMES.oauthResult, result);
        if (telemetry.responseStatus !== undefined) {
          span.setAttribute(
            APP_ATTRIBUTE_NAMES.invokeResponseStatus,
            telemetry.responseStatus
          );
        }
        if (telemetry.callbackInvoked) {
          span.setAttribute(APP_ATTRIBUTE_NAMES.oauthCallbackInvoked, true);
        }
        if (telemetry.errorType) {
          span.setAttribute(
            APP_ATTRIBUTE_NAMES.oauthErrorType,
            telemetry.errorType
          );
        }
        if (telemetry.failureCode) {
          span.setAttribute(
            APP_ATTRIBUTE_NAMES.oauthFailureCode,
            telemetry.failureCode
          );
        }

        recordTeamsBotOAuthOperation(connectionName, operation, result);
        recordTeamsBotOAuthOperationDuration(
          connectionName,
          operation,
          result,
          Date.now() - startedAt
        );
        if (telemetry.errorType) {
          recordTeamsBotOAuthError(
            connectionName,
            operation,
            telemetry.errorType
          );
        }

        span.end();
      }
    }
  );
}

/** @internal Adds an unexpected exception to the current OAuth span. */
export function recordUnexpectedOAuthError(
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
