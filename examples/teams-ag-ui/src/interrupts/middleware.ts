import {
  type AbstractAgent,
  type BaseEvent,
  EventType,
  Middleware,
  type RunAgentInput,
  type ToolCallStartEvent,
  type ToolCallArgsEvent,
} from '@ag-ui/client';
import { Observable } from 'rxjs';

import { clearPending, getPending, setPending } from './pending';
import {
  type Interrupt,
  type ResumeEntry,
  type RunFinishedOutcome,
} from './spec-types';

/**
 * Mark a tool as needing human approval by adding this to its
 * AG-UI Tool.metadata. Falsy / missing metadata = normal tool.
 *
 *   { name: 'sendEmail', ..., metadata: { [APPROVAL_METADATA_KEY]: true } }
 */
export const APPROVAL_METADATA_KEY = 'requiresApproval';

/**
 * Optional shape for the resume payload carried back from the user. The
 * middleware writes whatever payload it receives into a tool result message,
 * but if the payload is `{ approved: false }` we synthesize a denial
 * ("user declined") instead. Anything else is JSON-stringified.
 */
type ApprovalPayload = { approved: boolean; editedArgs?: Record<string, unknown> } | unknown;

type InterruptMiddlewareOptions = {
  /**
   * Override the per-tool decision. Defaults to checking
   * `tool.metadata?.[APPROVAL_METADATA_KEY] === true`.
   */
  shouldInterrupt?: (toolName: string, input: RunAgentInput) => boolean;
};

/**
 * Polyfills the AG-UI interrupt-aware run lifecycle (PR #1569, not yet on
 * npm) on top of any AbstractAgent that doesn't natively support it.
 *
 * Outbound: watches inner-agent events. If a tool call is flagged for
 * approval, lets the TOOL_CALL_START/ARGS/END through (so the client gets
 * the audit trail per spec) and rewrites the trailing RUN_FINISHED with
 * `outcome: { type: "interrupt", interrupts: [...] }`. Stashes the
 * interrupts in the pending store keyed by threadId.
 *
 * Inbound: if `RunAgentInput.resume[]` is present (carried via
 * forwardedProps.resume in this polyfill — the published schema doesn't
 * accept top-level `resume` yet), translates each ResumeEntry into a
 * tool-role message appended to `input.messages` so the inner agent sees
 * the human's answer when it next runs.
 */
export class InterruptMiddleware extends Middleware {
  constructor(private readonly opts: InterruptMiddlewareOptions = {}) {
    super();
  }

  run(input: RunAgentInput, next: AbstractAgent): Observable<BaseEvent> {
    this.applyResumeIfPresent(input);

    return new Observable<BaseEvent>((subscriber) => {
      // Per-run state
      const flaggedCalls = new Map<string, { toolCallId: string; toolName: string; argsBuf: string }>();
      const flaggedToolNames = this.flaggedToolNamesFrom(input);

      const inner = this.runNext(input, next).subscribe({
        next: (event) => {
          if (event.type === EventType.TOOL_CALL_START) {
            const e = event as ToolCallStartEvent;
            if (flaggedToolNames.has(e.toolCallName)) {
              flaggedCalls.set(e.toolCallId, {
                toolCallId: e.toolCallId,
                toolName: e.toolCallName,
                argsBuf: '',
              });
            }
            subscriber.next(event);
            return;
          }

          if (event.type === EventType.TOOL_CALL_ARGS) {
            const e = event as ToolCallArgsEvent;
            const tracked = flaggedCalls.get(e.toolCallId);
            if (tracked) tracked.argsBuf += e.delta ?? '';
            subscriber.next(event);
            return;
          }

          if (event.type === EventType.RUN_FINISHED && flaggedCalls.size > 0) {
            const interrupts: Interrupt[] = [...flaggedCalls.values()].map((c) => ({
              id: `int_${c.toolCallId}`,
              reason: 'tool_call',
              toolCallId: c.toolCallId,
              message: `Approve call to \`${c.toolName}\` with args: ${c.argsBuf || '{}'}`,
              responseSchema: {
                type: 'object',
                properties: {
                  approved: { type: 'boolean' },
                  // editedArgs presence is the spec's capability signal
                  // for "approve with edits" UIs.
                  editedArgs: { type: 'object' },
                },
                required: ['approved'],
              },
            }));

            setPending(input.threadId, interrupts);

            const outcome: RunFinishedOutcome = { type: 'interrupt', interrupts };
            subscriber.next({ ...event, outcome } as BaseEvent);
            subscriber.complete();
            return;
          }

          if (event.type === EventType.RUN_FINISHED) {
            // Successful completion — clear any stale pending state for
            // this thread and forward as normal (with explicit success
            // outcome so consumers can rely on the discriminator).
            clearPending(input.threadId);
            const outcome: RunFinishedOutcome = { type: 'success' };
            subscriber.next({ ...event, outcome } as BaseEvent);
            subscriber.complete();
            return;
          }

          subscriber.next(event);
        },
        error: (err) => subscriber.error(err),
        complete: () => subscriber.complete(),
      });

      return () => inner.unsubscribe();
    });
  }

  private flaggedToolNamesFrom(input: RunAgentInput): Set<string> {
    const fromMetadata = (input.tools ?? [])
      .filter(
        (t) =>
          (t.metadata as Record<string, unknown> | undefined)?.[APPROVAL_METADATA_KEY] === true
      )
      .map((t) => t.name);
    const names = new Set(fromMetadata);
    if (this.opts.shouldInterrupt) {
      for (const tool of input.tools ?? []) {
        if (this.opts.shouldInterrupt(tool.name, input)) names.add(tool.name);
      }
    }
    return names;
  }

  /**
   * If the caller passed resume entries (via `forwardedProps.resume` in this
   * polyfill), convert each into a tool-role message appended to
   * `input.messages` and clear pending interrupts. After this returns the
   * inner agent can run as normal — its next LLM call sees the synthesized
   * tool results in history.
   */
  private applyResumeIfPresent(input: RunAgentInput): void {
    const resume = (input.forwardedProps as { resume?: ResumeEntry[] } | undefined)?.resume;
    if (!resume?.length) return;

    const pending = getPending(input.threadId);
    if (!pending.length) {
      throw new Error(
        `InterruptMiddleware: resume submitted for thread ${input.threadId} but no pending interrupts`
      );
    }

    // Cover-all check — Contract Rule 3.
    const resumeIds = new Set(resume.map((r) => r.interruptId));
    const uncovered = pending.map((p) => p.id).filter((id) => !resumeIds.has(id));
    if (uncovered.length > 0) {
      throw new Error(
        `InterruptMiddleware: resume missing entries for: ${uncovered.join(', ')}`
      );
    }

    for (const entry of resume) {
      const interrupt = pending.find((p) => p.id === entry.interruptId);
      if (!interrupt?.toolCallId) continue;

      const content = synthesizeToolResultContent(entry.status, entry.payload);
       
      (input.messages as any[]).push({
        id: `tool_result_${interrupt.toolCallId}`,
        role: 'tool',
        toolCallId: interrupt.toolCallId,
        content,
      });
    }

    clearPending(input.threadId);
  }
}

function synthesizeToolResultContent(status: 'resolved' | 'cancelled', payload: unknown): string {
  if (status === 'cancelled') return 'User cancelled the request.';
  const p = payload as ApprovalPayload;
  if (p && typeof p === 'object' && 'approved' in p && (p as { approved: boolean }).approved === false) {
    return 'User declined the request.';
  }
  if (p && typeof p === 'object' && 'approved' in p && (p as { approved: boolean }).approved === true) {
    const edited = (p as { editedArgs?: Record<string, unknown> }).editedArgs;
    return edited
      ? `User approved with edits: ${JSON.stringify(edited)}`
      : 'User approved the request.';
  }
  return typeof p === 'string' ? p : JSON.stringify(p ?? null);
}
