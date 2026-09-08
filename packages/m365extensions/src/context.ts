import { AsyncLocalStorage } from 'node:async_hooks';

import type { TurnContext } from '@microsoft/agents-hosting';

export const _agentSdkContextStore = new AsyncLocalStorage<TurnContext>();

/**
 * Access the Agents SDK {@link TurnContext} for the turn teams.ts is currently
 * handling.
 *
 * The bridge stashes the host `TurnContext` in async-local storage for the
 * duration of `App.process`, letting teams.ts route handlers reach host-only
 * facilities (e.g. Agents SDK auth/state) that the teams.ts context does not model.
 *
 * @throws Error if called outside a bridged turn (e.g. from a detached async
 *   task or outside the request lifecycle), where no context is in scope.
 */
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
