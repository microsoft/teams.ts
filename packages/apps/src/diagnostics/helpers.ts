import { metrics, SpanStatusCode, trace } from '@opentelemetry/api';
import type { Meter, Span, Tracer } from '@opentelemetry/api';

import { TeamsBotApplicationTelemetry } from './telemetry';

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
 * Records an exception on a span and marks the span status as an error.
 */
export function recordTeamsBotApplicationException(span: Span, error: unknown): void {
  const message = error instanceof Error ? error.message : String(error);
  span.recordException(error instanceof Error ? error : message);
  span.setStatus({ code: SpanStatusCode.ERROR, message });
}
