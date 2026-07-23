import type { AgenticUser } from '../models';

export type AuthProviderToken = string | { toString(): string };

/**
 * Resolves outbound API tokens for app-only or Agentic User-scoped requests.
 */
export type AuthProvider = {
  readonly token: (options: {
    /**
     * Optional token scope. When omitted, callers use the cloud environment
     * default for the current auth flow.
     */
    readonly scope?: string;
    /**
     * Agentic User identity for requests that need an Agentic User-scoped token.
     */
    readonly agenticUser?: AgenticUser;
  }) => AuthProviderToken | null | undefined | Promise<AuthProviderToken | null | undefined>;
};
