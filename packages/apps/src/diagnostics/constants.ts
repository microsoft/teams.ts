/**
 * @internal
 * Private span names used by Teams apps diagnostics instrumentation.
 */
export const APP_SPAN_NAMES = {
  turn: 'turn',
  handler: 'handler',
  oauthTokenExchange: 'oauth.token_exchange',
  oauthVerifyState: 'oauth.verify_state',
  oauthSigninFailure: 'oauth.signin_failure',
} as const;

/**
 * @internal
 * Private metric names used by Teams apps diagnostics instrumentation.
 */
export const APP_METRIC_NAMES = {
  activitiesReceived: 'teams.activities.received',
  turnDuration: 'teams.turn.duration',
  handlerDispatched: 'teams.handler.dispatched',
  handlerDuration: 'teams.handler.duration',
  handlerFailures: 'teams.handler.failures',
  handlerUnmatched: 'teams.handler.unmatched',
  oauthOperations: 'teams.oauth.operations',
  oauthOperationDuration: 'teams.oauth.operation.duration',
  oauthErrors: 'teams.oauth.errors',
} as const;

/**
 * @internal
 * Private attribute names used by Teams apps diagnostics instrumentation.
 */
export const APP_ATTRIBUTE_NAMES = {
  activityType: 'activity.type',
  activityId: 'activity.id',
  conversationId: 'conversation.id',
  channelId: 'channel.id',
  botId: 'bot.id',
  serviceUrl: 'service.url',
  handlerType: 'handler.type',
  handlerDispatch: 'handler.dispatch',
  invokeName: 'invoke.name',
  oauthConnection: 'oauth.connection',
  oauthOperation: 'oauth.operation',
  oauthResult: 'oauth.result',
  invokeResponseStatus: 'invoke.response.status',
  oauthCallbackInvoked: 'oauth.callback.invoked',
  oauthErrorType: 'oauth.error.type',
  oauthFailureCode: 'oauth.failure.code',
} as const;

/**
 * @internal
 * Private handler dispatch category values used by Teams apps diagnostics instrumentation.
 */
export const APP_HANDLER_DISPATCH = {
  middleware: 'middleware',
  activity: 'activity',
  type: 'type',
  invoke: 'invoke',
  route: 'route',
} as const;

/**
 * @internal
 * Private Agent365 baggage keys used by Teams apps diagnostics instrumentation.
 */
export const APP_BAGGAGE_KEYS = {
  tenantId: 'microsoft.tenant.id',
  conversationId: 'gen_ai.conversation.id',
  conversationItemLink: 'microsoft.conversation.item.link',
  channelName: 'microsoft.channel.name',
  channelLink: 'microsoft.channel.link',
  agentId: 'gen_ai.agent.id',
  agentName: 'gen_ai.agent.name',
  agenticUserId: 'microsoft.agent.user.id',
  agentBlueprintId: 'microsoft.a365.agent.blueprint.id',
  userName: 'user.name',
  operationSource: 'service.name',
  serverAddress: 'server.address',
  serverPort: 'server.port',
  userId: 'user.id',
  userEmail: 'user.email',
  agentDescription: 'gen_ai.agent.description',
  agenticUserEmail: 'microsoft.agent.user.email',
} as const;

/**
 * @internal
 * Private OAuth operation values used by Teams apps diagnostics instrumentation.
 */
export const APP_OAUTH_OPERATION = {
  tokenExchange: 'token_exchange',
  verifyState: 'verify_state',
  signinFailure: 'signin_failure',
} as const;

/**
 * @internal
 * Private OAuth result values used by Teams apps diagnostics instrumentation.
 */
export const APP_OAUTH_RESULT = {
  success: 'success',
  failure: 'failure',
  preconditionFailed: 'precondition_failed',
  noToken: 'no_token',
  notified: 'notified',
} as const;

/**
 * @internal
 * Private OAuth error type values used by Teams apps diagnostics instrumentation.
 */
export const APP_OAUTH_ERROR_TYPE = {
  httpError: 'http_error',
  exception: 'exception',
} as const;
