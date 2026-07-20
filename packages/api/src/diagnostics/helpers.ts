import { metrics, SpanStatusCode, trace } from '@opentelemetry/api';
import type { Counter, Meter, MetricAttributes, Span, Tracer } from '@opentelemetry/api';

import pkg from '../../package.json';

import { API_ATTRIBUTE_NAMES, API_METRIC_NAMES } from './constants';
import { TeamsApiTelemetry } from './telemetry';

let outboundCallsCounter: Counter<MetricAttributes> | undefined;
let outboundErrorsCounter: Counter<MetricAttributes> | undefined;

/**
 * @internal
 * Gets the OpenTelemetry tracer used by future Teams API package instrumentation.
 */
export function getTeamsApiTracer(): Tracer {
  return trace.getTracer(TeamsApiTelemetry.tracerName, pkg.version);
}

/**
 * @internal
 * Gets the OpenTelemetry meter used by future Teams API package instrumentation.
 */
export function getTeamsApiMeter(): Meter {
  return metrics.getMeter(TeamsApiTelemetry.meterName, pkg.version);
}

/**
 * @internal
 * Records an outbound API call attempt.
 */
export function recordTeamsApiOutboundCall(operation: string): void {
  outboundCallsCounter ??= getTeamsApiMeter().createCounter(API_METRIC_NAMES.outboundCalls, {
    description: 'Number of outbound Teams API calls.',
  });
  outboundCallsCounter.add(1, { [API_ATTRIBUTE_NAMES.operation]: operation });
}

/**
 * @internal
 * Records an outbound API call failure.
 */
export function recordTeamsApiOutboundError(operation: string): void {
  outboundErrorsCounter ??= getTeamsApiMeter().createCounter(API_METRIC_NAMES.outboundErrors, {
    description: 'Number of failed outbound Teams API calls.',
  });
  outboundErrorsCounter.add(1, { [API_ATTRIBUTE_NAMES.operation]: operation });
}

/**
 * @internal
 * Records an exception on a span and marks the span status as an error.
 */
export function recordTeamsApiException(span: Span, error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  span.recordException(error instanceof Error ? error : message);
  span.setStatus({ code: SpanStatusCode.ERROR, message });
}
