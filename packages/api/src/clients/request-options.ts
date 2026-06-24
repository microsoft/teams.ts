import type { AgenticIdentity } from '../models';

import { AGENTIC_IDENTITY_EXTENSION } from './auth-provider-interceptor';

type AllRequestOptions = {
  readonly agenticIdentity?: AgenticIdentity;
  readonly serviceUrl?: string;
};

export type RequestOptions<K extends keyof AllRequestOptions = keyof AllRequestOptions> = Pick<AllRequestOptions, K>;

export function agenticIdentityExtension(options?: RequestOptions): Record<string, unknown> {
  if (!options?.agenticIdentity) return {};
  return { extensions: { [AGENTIC_IDENTITY_EXTENSION]: options.agenticIdentity } };
}

export function resolveServiceUrl(defaultServiceUrl: string, options?: { serviceUrl?: string }): string {
  return (options?.serviceUrl ?? defaultServiceUrl).replace(/\/+$/, '');
}
