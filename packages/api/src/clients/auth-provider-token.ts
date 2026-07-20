import { SpanKind } from '@opentelemetry/api';

import type { Token } from '@microsoft/teams.common';

import {
  API_ATTRIBUTE_NAMES,
  API_SPAN_NAMES,
  AUTH_FLOWS,
  type AuthFlow
} from '../diagnostics/constants';
import {
  getTeamsApiTracer,
  recordTeamsApiException
} from '../diagnostics/helpers';
import type { AgenticIdentity } from '../models';

import type { AuthProvider } from './auth';

/**
 * @internal
 * Creates a common HTTP token callback backed by the API AuthProvider.
 *
 * The common HTTP client owns Authorization header injection and skips this
 * callback when a request already has an Authorization header. The callback
 * only resolves the token and emits `microsoft.teams.auth.outbound`.
 */
export function createAuthProviderTokenFactory(
  authProvider: AuthProvider,
  defaultAgenticIdentity?: AgenticIdentity
): Token {
  return () => {
    return traceAuthTokenAcquisition(
      getAuthFlow(defaultAgenticIdentity),
      async () => authProvider.token({ agenticIdentity: defaultAgenticIdentity })
    );
  };
}

function getAuthFlow(agenticIdentity: AgenticIdentity | undefined): AuthFlow {
  return agenticIdentity ? AUTH_FLOWS.agentic : AUTH_FLOWS.appOnly;
}

async function traceAuthTokenAcquisition<T>(authFlow: AuthFlow, acquireToken: () => Promise<T>): Promise<T> {
  return getTeamsApiTracer().startActiveSpan(
    API_SPAN_NAMES.authOutbound,
    { kind: SpanKind.CLIENT, attributes: { [API_ATTRIBUTE_NAMES.authFlow]: authFlow } },
    async (span) => {
      try {
        return await acquireToken();
      } catch (error) {
        recordTeamsApiException(span, error);
        throw error;
      } finally {
        span.end();
      }
    }
  );
}
