/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 *
 * OpenTelemetry setup for the Agent365 observability service.
 */

import { shutdownMicrosoftOpenTelemetry, useMicrosoftOpenTelemetry } from '@microsoft/opentelemetry';
import type { IAppTokenProvider } from '@microsoft/teams.apps';

/**
 * OAuth scope requested for the token that authorizes telemetry export.
 *
 * The default `api://9b975845-388f-4429-889e-eab1ef63949c/.default` targets the
 * first-party Microsoft Agent365 observability service — the resource that
 * ingests the exported spans and requires the `Agent365.Observability.OtelWrite`
 * role on the caller. Override it by setting `A365_OBSERVABILITY_SCOPES_OVERRIDE`
 * (e.g. to point at a non-production observability resource).
 */
export const OBSERVABILITY_SCOPE =
  process.env.A365_OBSERVABILITY_SCOPES_OVERRIDE ||
  'api://9b975845-388f-4429-889e-eab1ef63949c/.default';

/**
 * Initializes OpenTelemetry and points the Agent365 exporter at `app.tokenProvider`.
 *
 * Call once, after constructing the `App` and before `app.start()` — spans
 * created before this runs are dropped.
 */
export function useAgent365Exporter(
  tokens: Pick<IAppTokenProvider, 'getAgenticAppInstanceToken'>
): void {
  useMicrosoftOpenTelemetry({
    a365: {
      enabled: true,

      // Without this, spans are enriched from baggage but nothing reaches the
      // Agent365 service.
      enableObservabilityExporter: true,

      // App-only token -> the S2S endpoint. Flip both together for a delegated token.
      useS2SEndpoint: true,

      observabilityScopeOverride: OBSERVABILITY_SCOPE,
      logLevel: process.env.A365_OBSERVABILITY_LOG_LEVEL || 'warn|error',

      // Don't cache: MSAL caches per scope and refreshes on expiry.
      tokenResolver: async (agenticAppInstanceId, tenantId, authScopes) => {
        const token = await tokens.getAgenticAppInstanceToken(
          authScopes?.[0] ?? OBSERVABILITY_SCOPE,
          agenticAppInstanceId,
          tenantId
        );

        const value = token?.toString();
        if (!value) {
          throw new Error(
            'Agent365 exporter could not mint an app token. Check CLIENT_ID / CLIENT_SECRET / TENANT_ID.'
          );
        }

        return value;
      },
    },
  });
}

/**
 * Flushes queued spans and shuts the exporter down. Spans are batched, so a
 * short-lived process would otherwise exit before they are exported.
 */
export async function flushAgent365Spans(): Promise<void> {
  await shutdownMicrosoftOpenTelemetry();
}
