/**
 * OpenTelemetry source names used by the lower-level Teams API package.
 *
 * The SDK does not configure OpenTelemetry providers or exporters. Consumers configure
 * their OpenTelemetry SDK/exporters and can use these names to filter API-layer signals.
 */
export const TeamsApiTelemetry = {
  /**
   * Canonical tracer name for spans emitted by the Teams API package.
   */
  tracerName: 'Microsoft.Teams.Api',

  /**
   * Canonical meter name for metrics emitted by the Teams API package.
   */
  meterName: 'Microsoft.Teams.Api',
} as const;
