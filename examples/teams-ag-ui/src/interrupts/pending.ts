import type { Interrupt } from './spec-types';

/**
 * Per-thread store of pending interrupts.
 *
 * Polyfill for `AbstractAgent.pendingInterrupts: Interrupt[]` which exists on
 * `main` (PR #1569) but isn't on npm yet. Once `@ag-ui/client` ships it,
 * delete this file and read `agent.pendingInterrupts` directly.
 *
 * The middleware writes here when it emits an interrupt outcome; the bot
 * reads from here to decide whether the next user turn is a "resume" (vs. a
 * fresh user message).
 */
const pendingByThread = new Map<string, Interrupt[]>();

export function setPending(threadId: string, interrupts: Interrupt[]): void {
  if (interrupts.length === 0) {
    pendingByThread.delete(threadId);
  } else {
    pendingByThread.set(threadId, interrupts);
  }
}

export function getPending(threadId: string): Interrupt[] {
  return pendingByThread.get(threadId) ?? [];
}

export function clearPending(threadId: string): void {
  pendingByThread.delete(threadId);
}

export function hasPending(threadId: string): boolean {
  return (pendingByThread.get(threadId)?.length ?? 0) > 0;
}
