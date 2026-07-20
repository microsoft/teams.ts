import type { AgenticIdentity } from '../models';

import { AGENTIC_IDENTITY_EXTENSION } from './auth-provider-extension';

type AllRequestOptions = {
  /**
   * Agentic User identity to use for this request's auth token.
   */
  readonly agenticIdentity?: AgenticIdentity;

  /**
   * Bot Framework service URL to use for this request.
   */
  readonly serviceUrl?: string;
};

/**
 * Legacy per-request options accepted by API client methods.
 *
 * @deprecated Prefer creating a scoped client with `client.clone({
 * serviceUrl, agenticIdentity })`, `client.fromServiceUrl(...)`, or
 * `client.fromAgenticIdentity(...)` when reusing the same scope for multiple
 * calls. API methods continue to accept this type for source and runtime
 * compatibility with existing callers.
 */
export type RequestOptions<K extends keyof AllRequestOptions = keyof AllRequestOptions> = Pick<AllRequestOptions, K>;

/**
 * Creates a common HTTP request config fragment that carries an Agentic User
 * identity in SDK-local request extensions.
 *
 * @deprecated Prefer passing `RequestOptions` to API methods or using
 * `client.clone({ agenticIdentity })`. This helper remains for callers that
 * manually compose HTTP requests.
 */
export function agenticIdentityExtension(options?: RequestOptions): Record<string, unknown> {
  if (!options?.agenticIdentity) return {};
  return { extensions: { [AGENTIC_IDENTITY_EXTENSION]: options.agenticIdentity } };
}

/**
 * Resolves the service URL for a request and normalizes trailing slashes.
 *
 * @deprecated Prefer scoped clients via `client.clone({ serviceUrl })` or
 * `client.fromServiceUrl(...)`. This helper remains for legacy request-option
 * compatibility.
 */
export function resolveServiceUrl(defaultServiceUrl: string, options?: { serviceUrl?: string }): string {
  const url = options?.serviceUrl ?? defaultServiceUrl;
  return url.endsWith('/') ? url.slice(0, -1) : url;
}
