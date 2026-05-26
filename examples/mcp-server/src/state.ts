export type AskStatus = 'pending' | 'answered';
export type ApprovalStatus = 'pending' | 'approved' | 'rejected';

export type PendingAsk = {
  userId: string;
  status: AskStatus;
  reply?: string;
};

export const state = {
  // User AAD object id -> personal conversationId. Populated on first
  // incoming 1:1 message, or on first proactive send.
  conversations: new Map<string, string>(),

  // requestId -> PendingAsk.
  pendingAsks: new Map<string, PendingAsk>(),

  // approvalId -> approval status.
  approvals: new Map<string, ApprovalStatus>(),

  // requestId -> PromiseWithResolvers completed when the user replies.
  // Lets wait_for_reply return sub-millisecond after the answer lands
  // instead of polling.
  replyWaiters: new Map<string, PromiseWithResolvers<PendingAsk>>(),

  // approvalId -> PromiseWithResolvers completed with the final status
  // when the user clicks Approve/Reject.
  // Lets wait_for_approval return sub-millisecond after the decision lands
  // instead of polling.
  approvalWaiters: new Map<string, PromiseWithResolvers<ApprovalStatus>>(),
};
