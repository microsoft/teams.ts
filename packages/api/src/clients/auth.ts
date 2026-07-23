import type { AgentUser } from '../models';

export type AuthProviderToken = string | { toString(): string };

/**
 * Resolves outbound API tokens for app-only or Agent User-scoped requests.
 */
export type AuthProvider = {
  readonly token: (options: {
    /**
     * Optional token scope. When omitted, callers use the cloud environment
     * default for the current auth flow.
     */
    readonly scope?: string;
    /**
     * Agent User identity for requests that need an Agent User-scoped token.
     */
    readonly agentUser?: AgentUser;
  }) => AuthProviderToken | null | undefined | Promise<AuthProviderToken | null | undefined>;
};
