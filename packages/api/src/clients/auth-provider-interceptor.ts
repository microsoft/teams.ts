import { AxiosHeaders } from 'axios';

import type { Interceptor } from '@microsoft/teams.common';

import type { AgenticIdentity } from '../models';

import type { AuthProvider } from './auth';
import { AGENTIC_IDENTITY_EXTENSION } from './auth-provider-extension';

export { AGENTIC_IDENTITY_EXTENSION } from './auth-provider-extension';

/**
 * Legacy HTTP interceptor that adds Bot Framework Authorization headers from an
 * API `AuthProvider`.
 *
 * @deprecated The API client now uses the common HTTP client's token callback so
 * outbound auth telemetry can be emitted consistently. This interceptor remains
 * exported for callers that manually constructed HTTP clients with the old
 * public API.
 */
export class AuthProviderInterceptor implements Interceptor {
  constructor(
    /**
     * Auth provider used to resolve an outbound token before the request is sent.
     */
    readonly authProvider: AuthProvider,
    /**
     * Default Agentic User identity used when a request does not provide one via
     * `AGENTIC_IDENTITY_EXTENSION`.
     */
    readonly defaultAgenticIdentity?: AgenticIdentity
  ) { }

  /**
   * Axios-compatible request interceptor used by the common HTTP client before
   * transport. It respects an existing Authorization header and otherwise asks
   * the configured auth provider for a token.
   */
  request: Interceptor['request'] = async ({ config, log }) => {
    if (config.headers?.Authorization || config.headers?.authorization) {
      return config;
    }

    const requestAgenticIdentity = config.extensions?.[AGENTIC_IDENTITY_EXTENSION] as AgenticIdentity | undefined;
    const agenticIdentity = requestAgenticIdentity ?? this.defaultAgenticIdentity;
    const token = await this.authProvider.token({ agenticIdentity });
    const resolvedToken = token?.toString();

    if (!resolvedToken?.trim()) {
      if (resolvedToken != null) {
        log.warn('Auth provider returned an empty token; Authorization header was not added.');
      }
      return config;
    }

    config.headers = AxiosHeaders.from(config.headers);
    config.headers.set('Authorization', `Bearer ${resolvedToken}`);
    return config;
  };
}
