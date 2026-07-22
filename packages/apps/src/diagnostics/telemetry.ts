/**
 * OpenTelemetry source names used by the Teams bot application orchestration package.
 *
 * The SDK does not configure OpenTelemetry providers or exporters. Consumers configure
 * their OpenTelemetry SDK/exporters and can use these names to filter app-layer signals.
 */
export const TeamsBotApplicationTelemetry = {
  /**
   * Canonical tracer name for spans emitted by the Teams apps package.
   */
  tracerName: 'Microsoft.Teams.Apps',

  /**
   * Canonical meter name for metrics emitted by the Teams apps package.
   */
  meterName: 'Microsoft.Teams.Apps',
} as const;
