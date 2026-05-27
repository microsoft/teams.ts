export type AskStatus = 'pending' | 'answered';
export type ApprovalStatus = 'pending' | 'approved' | 'rejected';

/** Minimal asyncio.Event equivalent: a promise that is resolved exactly once. */
export type TSEvent = { promise: Promise<void>; set: () => void };

export function makeEvent(): TSEvent {
  let resolve!: () => void;
  const promise = new Promise<void>((res) => { resolve = res; });
  return { promise, set: resolve };
}

export type PendingAsk = {
  userId: string;
  status: AskStatus;
  reply?: string;
  /** Resolved when the user submits their reply. */
  event: TSEvent;
};

export type PendingApproval = {
  userId: string;
  status: ApprovalStatus;
  /** Resolved when the user clicks Approve or Reject. */
  event: TSEvent;
};

export const state = {
  // User AAD object id -> personal conversationId. Populated on first
  // incoming 1:1 message, or on first proactive send.
  conversations: new Map<string, string>(),

  // requestId -> PendingAsk (carries its own event for signalling).
  pendingAsks: new Map<string, PendingAsk>(),

  // approvalId -> PendingApproval (carries its own event for signalling).
  pendingApprovals: new Map<string, PendingApproval>(),
};
