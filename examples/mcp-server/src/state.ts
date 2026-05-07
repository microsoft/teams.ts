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

  // requestId -> PendingAsk.
  pendingAsks: new Map<string, PendingAsk>(),

  // userId -> requestId for their current pending ask. Cleared once the
  // user replies. Only one outstanding ask per user is supported.
  userPendingAsk: new Map<string, string>(),

  // approvalId -> approval status.
  approvals: new Map<string, ApprovalStatus>(),
};
