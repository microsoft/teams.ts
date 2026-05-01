export type AskStatus = 'pending' | 'answered';
export type ApprovalStatus = 'pending' | 'approved' | 'rejected';

export type PendingAsk = {
  userId: string;
  status: AskStatus;
  reply?: string;
};

export const state = {
  // userId -> personal conversationId. Populated on first incoming 1:1
  // message, or on first proactive send.
  conversations: new Map<string, string>(),

  // questionActivityId -> PendingAsk. The agent gets the activity id back
  // as the requestId; the user must use Teams' Reply action on the question
  // so the inbound message carries `replyToId === questionActivityId`.
  pendingAsks: new Map<string, PendingAsk>(),

  // approvalId -> approval status.
  approvals: new Map<string, ApprovalStatus>(),
};
