import { metrics, SpanStatusCode, trace } from '@opentelemetry/api';
import type { Counter, Histogram, Meter, MetricAttributes, Span, Tracer } from '@opentelemetry/api';

import { APP_ATTRIBUTE_NAMES, APP_METRIC_NAMES } from './constants';
import { TeamsBotApplicationTelemetry } from './telemetry';

let activitiesReceivedCounter: Counter<MetricAttributes> | undefined;
let turnDurationHistogram: Histogram<MetricAttributes> | undefined;
let handlerDispatchedCounter: Counter<MetricAttributes> | undefined;
let handlerDurationHistogram: Histogram<MetricAttributes> | undefined;
let handlerFailuresCounter: Counter<MetricAttributes> | undefined;
let handlerUnmatchedCounter: Counter<MetricAttributes> | undefined;

/**
 * @internal
 * Gets the OpenTelemetry tracer used by future Teams apps package instrumentation.
 */
export function getTeamsBotApplicationTracer(): Tracer {
  return trace.getTracer(TeamsBotApplicationTelemetry.tracerName);
}

/**
 * @internal
 * Gets the OpenTelemetry meter used by future Teams apps package instrumentation.
 */
export function getTeamsBotApplicationMeter(): Meter {
  return metrics.getMeter(TeamsBotApplicationTelemetry.meterName);
}

/**
 * @internal
 * Records an inbound activity received by the Teams apps package.
 */
export function recordTeamsBotActivityReceived(activityType: string): void {
  activitiesReceivedCounter ??= getTeamsBotApplicationMeter().createCounter(APP_METRIC_NAMES.activitiesReceived, {
    description: 'Number of inbound activities received by Teams apps.',
  });
  activitiesReceivedCounter.add(1, { [APP_ATTRIBUTE_NAMES.activityType]: activityType });
}

/**
 * @internal
 * Records turn processing duration in milliseconds.
 */
export function recordTeamsBotTurnDuration(activityType: string, durationMs: number): void {
  turnDurationHistogram ??= getTeamsBotApplicationMeter().createHistogram(APP_METRIC_NAMES.turnDuration, {
    description: 'Duration of Teams app turn processing.',
    unit: 'ms',
  });
  turnDurationHistogram.record(durationMs, { [APP_ATTRIBUTE_NAMES.activityType]: activityType });
}

/**
 * @internal
 * Records a selected Teams app handler dispatch.
 */
export function recordTeamsBotHandlerDispatched(handlerType: string, handlerDispatch: string): void {
  handlerDispatchedCounter ??= getTeamsBotApplicationMeter().createCounter(APP_METRIC_NAMES.handlerDispatched, {
    description: 'Number of Teams app handlers dispatched.',
  });
  handlerDispatchedCounter.add(1, {
    [APP_ATTRIBUTE_NAMES.handlerType]: handlerType,
    [APP_ATTRIBUTE_NAMES.handlerDispatch]: handlerDispatch,
  });
}

/**
 * @internal
 * Records Teams app handler duration in milliseconds.
 */
export function recordTeamsBotHandlerDuration(handlerType: string, handlerDispatch: string, durationMs: number): void {
  handlerDurationHistogram ??= getTeamsBotApplicationMeter().createHistogram(APP_METRIC_NAMES.handlerDuration, {
    description: 'Duration of Teams app handler execution.',
    unit: 'ms',
  });
  handlerDurationHistogram.record(durationMs, {
    [APP_ATTRIBUTE_NAMES.handlerType]: handlerType,
    [APP_ATTRIBUTE_NAMES.handlerDispatch]: handlerDispatch,
  });
}

/**
 * @internal
 * Records a failed Teams app handler dispatch.
 */
export function recordTeamsBotHandlerFailure(handlerType: string, handlerDispatch: string): void {
  handlerFailuresCounter ??= getTeamsBotApplicationMeter().createCounter(APP_METRIC_NAMES.handlerFailures, {
    description: 'Number of failed Teams app handler dispatches.',
  });
  handlerFailuresCounter.add(1, {
    [APP_ATTRIBUTE_NAMES.handlerType]: handlerType,
    [APP_ATTRIBUTE_NAMES.handlerDispatch]: handlerDispatch,
  });
}

/**
 * @internal
 * Records an inbound activity that did not match any Teams app handler.
 */
export function recordTeamsBotHandlerUnmatched(activityType: string, invokeName?: string): void {
  handlerUnmatchedCounter ??= getTeamsBotApplicationMeter().createCounter(APP_METRIC_NAMES.handlerUnmatched, {
    description: 'Number of inbound activities that did not match a Teams app handler.',
  });
  const attributes: MetricAttributes = { [APP_ATTRIBUTE_NAMES.activityType]: activityType };
  if (invokeName) {
    attributes[APP_ATTRIBUTE_NAMES.invokeName] = invokeName;
  }
  handlerUnmatchedCounter.add(1, attributes);
}

/**
 * @internal
 * Records an exception on a span and marks the span status as an error.
 */
export function recordTeamsBotApplicationException(span: Span, error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  span.recordException(error instanceof Error ? error : message);
  span.setStatus({ code: SpanStatusCode.ERROR, message });
}
