import { TeamsApiTelemetry } from './telemetry';

describe('TeamsApiTelemetry', () => {
  it('exports canonical OpenTelemetry source names', () => {
    expect(TeamsApiTelemetry.tracerName).toBe('Microsoft.Teams.Api');
    expect(TeamsApiTelemetry.meterName).toBe('Microsoft.Teams.Api');
  });
});
