import { SpanKind, type Span } from '@opentelemetry/api';
import type { AxiosResponse } from 'axios';

import type {
  Middleware,
  MiddlewareContext,
  MiddlewareNext
} from '@microsoft/teams.common';

import {
  API_SPAN_NAMES,
  type ConversationActivityOperation
} from '../diagnostics/constants';
import {
  getTeamsApiTracer,
  recordTeamsApiException,
  recordTeamsApiOutboundCall,
  recordTeamsApiOutboundError
} from '../diagnostics/helpers';

const apiOutboundTelemetryMetadataKey = Symbol('Microsoft.Teams.Api.outboundTelemetryMetadata');

type ApiOutboundTelemetryMetadata = {
  readonly operation: ConversationActivityOperation;
  readonly attributes: Record<string, string>;
  readonly onResponse?: (span: Span, res: AxiosResponse) => void | Promise<void>;
};

type ApiOutboundTelemetryExtensions = Record<string, unknown> & {
  [apiOutboundTelemetryMetadataKey]?: ApiOutboundTelemetryMetadata;
};

/**
 * @internal
 * Creates SDK-private request metadata for API outbound telemetry.
 *
 * API client methods use this immediately before calling the shared
 * `HttpClient` so outbound telemetry middleware can create the span and
 * metrics without each method managing telemetry mechanics directly.
 */
export function withApiOutboundTelemetry(
  metadata: ApiOutboundTelemetryMetadata,
  extensions?: Record<string, unknown>
): Record<string, unknown> {
  const next = { ...(extensions ?? {}) } as ApiOutboundTelemetryExtensions;
  next[apiOutboundTelemetryMetadataKey] = metadata;
  return next;
}

/**
 * @internal
 * Ensures Teams API outbound telemetry middleware is registered once.
 *
 * API client construction calls this after creating or receiving the common
 * `HttpClient`; callers can inspect `client.middlewares` for dedupe.
 */
export function ensureApiOutboundTelemetryMiddleware(client: { readonly middlewares: readonly Middleware[]; use(middleware: Middleware): number }): void {
  if (!client.middlewares.some((middleware) => middleware instanceof ApiOutboundTelemetryMiddleware)) {
    client.use(new ApiOutboundTelemetryMiddleware());
  }
}

/**
 * @internal
 * Common HTTP middleware that owns Teams API outbound span lifecycle, metrics,
 * exception recording, and optional response hooks.
 */
export class ApiOutboundTelemetryMiddleware implements Middleware {
  async invoke<R = AxiosResponse, D = any>(
    context: MiddlewareContext<D>,
    next: MiddlewareNext<R>
  ): Promise<R> {
    const metadata = getApiOutboundTelemetryMetadata(context.config.extensions);
    if (!metadata) {
      return next();
    }

    return getTeamsApiTracer().startActiveSpan(
      API_SPAN_NAMES.apiClient,
      {
        kind: SpanKind.CLIENT,
        attributes: metadata.attributes,
      },
      async (span) => {
        recordTeamsApiOutboundCall(metadata.operation);

        try {
          const res = await next();
          await metadata.onResponse?.(span, res as AxiosResponse);
          return res;
        } catch (error) {
          recordTeamsApiOutboundError(metadata.operation);
          recordTeamsApiException(span, error);
          throw error;
        } finally {
          span.end();
        }
      }
    );
  }
}

function getApiOutboundTelemetryMetadata(
  extensions: Record<string, unknown> | undefined
): ApiOutboundTelemetryMetadata | undefined {
  return (extensions as ApiOutboundTelemetryExtensions | undefined)?.[apiOutboundTelemetryMetadataKey];
}
