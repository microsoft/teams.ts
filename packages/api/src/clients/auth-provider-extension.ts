/**
 * Request extension key used to pass an Agentic User identity to legacy
 * per-request auth customization.
 *
 * @deprecated Prefer scoping an API client with `client.clone({ agenticIdentity })`
 * or passing `RequestOptions` to API client methods. This constant remains for
 * callers that still compose raw HTTP request extensions.
 */
export const AGENTIC_IDENTITY_EXTENSION = 'microsoft.teams.agenticIdentity';
