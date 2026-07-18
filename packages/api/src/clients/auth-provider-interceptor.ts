import { AxiosHeaders } from 'axios';
import { SpanKind } from '@opentelemetry/api';

import type { Interceptor } from '@microsoft/teams.common';

import { API_ATTRIBUTE_NAMES, API_SPAN_NAMES, AUTH_FLOWS, type AuthFlow } from '../diagnostics/constants';
import { getTeamsApiTracer, recordTeamsApiException } from '../diagnostics/helpers';
import type { AgenticIdentity } from '../models';

import type { AuthProvider } from './auth';

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

export class AuthProviderInterceptor implements Interceptor {
  constructor(
    readonly authProvider: AuthProvider,
    readonly defaultAgenticIdentity?: AgenticIdentity
  ) { }

  request: Interceptor['request'] = async ({ config, log }) => {
    if (config.headers?.Authorization || config.headers?.authorization) {
      return config;
    }

    const token = await traceAuthTokenAcquisition(
      getAuthFlow(this.defaultAgenticIdentity),
      async () => this.authProvider.token({ agenticIdentity: this.defaultAgenticIdentity })
    );
    const resolvedToken = token?.toString();

    if (!resolvedToken?.trim()) {
      if (resolvedToken != null) {
        log.warn('Auth provider returned an empty token; Authorization header was not added.');
      }
      return config;
    }

    config.headers ??= new AxiosHeaders();
    config.headers.Authorization = `Bearer ${resolvedToken}`;
    return config;
  };
}
