/**
 * @internal
 * Private span names used by Teams apps diagnostics instrumentation.
 */
export const APP_SPAN_NAMES = {
  turn: 'turn',
  handler: 'handler',
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
