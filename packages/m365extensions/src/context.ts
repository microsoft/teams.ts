import { AsyncLocalStorage } from 'node:async_hooks';

import type { TurnContext } from '@microsoft/agents-hosting';

export const _agentSdkContextStore = new AsyncLocalStorage<TurnContext>();

export function agentSdkContext(): TurnContext {
  const context = _agentSdkContextStore.getStore();
  if (!context) {
    throw new Error(
      'agentSdkContext() called outside an M365 Extension turn. ' +
      'This usually means the caller is running on a detached async task or outside the request lifecycle.'
    );
  }

  return context;
}
