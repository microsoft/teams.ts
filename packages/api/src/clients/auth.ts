import type { AgenticIdentity } from '../models';

export type AuthProviderToken = string | { toString(): string };

export type AuthProvider = {
  readonly token: (options: {
    readonly scope?: string;
    readonly agenticIdentity?: AgenticIdentity;
  }) => AuthProviderToken | null | undefined | Promise<AuthProviderToken | null | undefined>;
};
