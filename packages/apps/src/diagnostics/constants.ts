/**
 * @internal
 * Private span names used by Teams apps diagnostics instrumentation.
 */
export const APP_SPAN_NAMES = {
  activityProcess: 'microsoft.teams.activity.process',
  handler: 'microsoft.teams.handler',
  oauth: 'microsoft.teams.oauth',
  stateLoad: 'microsoft.teams.state.load',
  stateSave: 'microsoft.teams.state.save',
  stateDelete: 'microsoft.teams.state.delete',
} as const;

/**
 * @internal
 * Private metric names used by Teams apps diagnostics instrumentation.
 */
export const APP_METRIC_NAMES = {
  activitiesReceived: 'microsoft.teams.activities.received',
  activityProcessDuration: 'microsoft.teams.activity.process.duration',
  handlerDispatched: 'microsoft.teams.handler.dispatched',
  handlerDuration: 'microsoft.teams.handler.duration',
  handlerFailures: 'microsoft.teams.handler.failures',
  handlerUnmatched: 'microsoft.teams.handler.unmatched',
  oauthOperations: 'microsoft.teams.oauth.operations',
  oauthOperationDuration: 'microsoft.teams.oauth.operation.duration',
  oauthErrors: 'microsoft.teams.oauth.errors',
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
  type: 'type',
  invoke: 'invoke',
  catchall: 'catchall',
} as const;

/**
 * @internal
 * Private OAuth operation values used by Teams apps diagnostics instrumentation.
 */
export const APP_OAUTH_OPERATION = {
  tokenExchange: 'token_exchange',
  verifyState: 'verify_state',
  signinFailure: 'signin_failure',
  signIn: 'signin',
  signOut: 'signout',
  getToken: 'get_token',
  connectionStatus: 'connection_status',
} as const;

/**
 * @internal
 * Private OAuth result values used by Teams apps diagnostics instrumentation.
 */
export const APP_OAUTH_RESULT = {
  cached: 'token_cached',
  cardSent: 'signin_card_sent',
  hit: 'token_found',
  miss: 'token_not_found',
  success: 'operation_succeeded',
  failure: 'operation_failed',
  duplicate: 'request_deduplicated',
  noToken: 'connection_not_matched',
  notified: 'failure_callback_notified',
} as const;

/**
 * @internal
 * Private OAuth error type values used by Teams apps diagnostics instrumentation.
 */
export const APP_OAUTH_ERROR_TYPE = {
  httpError: 'http_error',
  exception: 'invalid_op',
} as const;

/**
 * @internal
 * OAuth connection value used for operations spanning every connection.
 */
export const APP_OAUTH_ALL_CONNECTIONS = 'all';
