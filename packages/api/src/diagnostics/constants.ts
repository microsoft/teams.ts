/**
 * @internal
 * Private span names used by API diagnostics instrumentation.
 */
export const API_SPAN_NAMES = {
  conversationClient: 'microsoft.teams.conversation.client',
  authOutbound: 'microsoft.teams.auth.outbound',
} as const;

/**
 * @internal
 * Private metric names used by API diagnostics instrumentation.
 */
export const API_METRIC_NAMES = {
  outboundCalls: 'microsoft.teams.outbound.calls',
  outboundErrors: 'microsoft.teams.outbound.errors',
} as const;

/**
 * @internal
 * Private attribute names used by API diagnostics instrumentation.
 */
export const API_ATTRIBUTE_NAMES = {
  operation: 'operation',
  serviceUrl: 'service.url',
  conversationId: 'conversation.id',
  activityType: 'activity.type',
  activityId: 'activity.id',
  authFlow: 'auth.flow',
} as const;

/**
 * @internal
 * Private conversation activity operation values used by API outbound diagnostics.
 */
export const OUTBOUND_OPERATIONS = {
  create: 'create',
  update: 'update',
  reply: 'reply',
  delete: 'delete',
  createTargeted: 'create_targeted',
  updateTargeted: 'update_targeted',
  deleteTargeted: 'delete_targeted',
} as const;

/**
 * @internal
 * Private auth flow values used by API auth diagnostics.
 */
export const AUTH_FLOWS = {
  agentic: 'agentic',
  appOnly: 'app_only',
} as const;

/**
 * @internal
 * Supported operation name values for API outbound conversation activity diagnostics.
 */
export type ConversationActivityOperation = (typeof OUTBOUND_OPERATIONS)[keyof typeof OUTBOUND_OPERATIONS];

/**
 * @internal
 * Supported auth flow values for API auth diagnostics.
 */
export type AuthFlow = (typeof AUTH_FLOWS)[keyof typeof AUTH_FLOWS];
