/**
 * Vendored AG-UI interrupt-aware run lifecycle types.
 *
 * Status: shipped to `main` of ag-ui-protocol/ag-ui in PR #1569 (merged
 * 2026-04-30) but NOT YET PUBLISHED to npm. Latest published is
 * `@ag-ui/core@0.0.53`, which predates the merge.
 *
 * Spec source:
 *   https://docs.ag-ui.com/concepts/interrupts
 *   https://github.com/ag-ui-protocol/ag-ui/pull/1569
 *
 * --- DIFF vs @ag-ui/core@0.0.53 ---
 *
 * NEW types (all defined here):
 *   - Interrupt
 *   - ResumeEntry, ResumeStatus
 *   - RunFinishedOutcome (discriminated union)
 *
 * MODIFIED types we shadow:
 *   - RunAgentInput     gains optional `resume?: ResumeEntry[]`
 *   - RunFinishedEvent  gains optional `outcome?: RunFinishedOutcome`
 *
 * NEW abstract-agent state we polyfill in `pending.ts`:
 *   - AbstractAgent.pendingInterrupts: Interrupt[]
 *
 * NEW helper utilities we re-implement here (subset of what `main` ships):
 *   - buildResumeArray(interrupts, responses)
 *   - getRunOutcome(event)
 *   - isInterruptExpired(interrupt, now?)
 *
 * Once @ag-ui/core publishes a release containing PR #1569, delete this file
 * and import from `@ag-ui/core` / `@ag-ui/client/interrupts` directly.
 *
 * The middleware in `./middleware.ts` carries the runtime burden of emitting
 * these shapes; the SDK's verify pipeline (which doesn't know about
 * `outcome` yet) tolerates extra fields by default, so emitting forward-
 * compatible events works on npm 0.0.53.
 */

import type { RunFinishedEvent as SdkRunFinishedEvent } from '@ag-ui/client';

/** Standard reason values from the spec. Custom values are allowed. */
export type InterruptReason = 'tool_call' | 'input_required' | 'confirmation' | (string & {});

export type Interrupt = {
  /** Correlation key across interrupt, resume, idempotency, and audit. */
  id: string;
  /** Categorical routing hint. See spec "Reason taxonomy". */
  reason: InterruptReason;
  /** Human-readable prompt. Universal fallback UI content. */
  message?: string;
  /** Binds the interrupt to a prior ToolCall* sequence. */
  toolCallId?: string;
  /** JSON Schema for the expected resume payload. */
  responseSchema?: Record<string, unknown>;
  /** ISO-8601 TTL. Stale resumes produce RunError. */
  expiresAt?: string;
  /** Free-form framework-specific data. */
  metadata?: Record<string, unknown>;
};

export type ResumeStatus = 'resolved' | 'cancelled';

export type ResumeEntry = {
  interruptId: string;
  status: ResumeStatus;
  payload?: unknown;
};

export type RunFinishedOutcome =
  | { type: 'success' }
  | { type: 'interrupt'; interrupts: Interrupt[] };

/** RunFinishedEvent + spec's optional `outcome`. */
export type RunFinishedEventWithOutcome = SdkRunFinishedEvent & {
  outcome?: RunFinishedOutcome;
};

// ---------- helpers (subset of @ag-ui/client/interrupts) ----------

export function getRunOutcome(event: SdkRunFinishedEvent): RunFinishedOutcome | undefined {
  return (event as RunFinishedEventWithOutcome).outcome;
}

export function isInterruptExpired(interrupt: Interrupt, now: Date = new Date()): boolean {
  if (interrupt.expiresAt === undefined) return false;
  return new Date(interrupt.expiresAt) <= now;
}

type ResumeResponse =
  | { status: 'resolved'; payload?: unknown }
  | { status: 'cancelled' };

/**
 * Build a spec-correct resume array from a map of responses keyed by
 * interrupt id. Throws if responses miss any open interrupt or reference
 * unknown ids — matches Contract Rule 3 (cover all open interrupts).
 */
export function buildResumeArray(
  interrupts: Interrupt[],
  responses: Record<string, ResumeResponse>
): ResumeEntry[] {
  const openIds = new Set(interrupts.map((i) => i.id));
  const responseIds = new Set(Object.keys(responses));

  const missing = [...openIds].filter((id) => !responseIds.has(id));
  if (missing.length > 0) {
    throw new Error(`buildResumeArray: missing responses for: ${missing.join(', ')}`);
  }
  const unknown = [...responseIds].filter((id) => !openIds.has(id));
  if (unknown.length > 0) {
    throw new Error(`buildResumeArray: unknown interrupt ids: ${unknown.join(', ')}`);
  }

  return interrupts.map((i) => {
    const r = responses[i.id];
    if (r.status === 'resolved') {
      const entry: ResumeEntry = { interruptId: i.id, status: 'resolved' };
      if (r.payload !== undefined) entry.payload = r.payload;
      return entry;
    }
    return { interruptId: i.id, status: 'cancelled' };
  });
}
