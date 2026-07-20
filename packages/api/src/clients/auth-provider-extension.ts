/**
 * Request extension key used to pass an Agentic User identity to raw HTTP
 * request extensions.
 *
 * @deprecated Prefer scoping an API client with `client.clone({ agenticIdentity })`
 * for SDK calls. This constant remains for callers that still compose raw HTTP
 * request extensions.
 */
export const AGENTIC_IDENTITY_EXTENSION = 'microsoft.teams.agenticIdentity';
