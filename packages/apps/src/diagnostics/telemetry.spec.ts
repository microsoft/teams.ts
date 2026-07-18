import { TeamsBotApplicationTelemetry } from './telemetry';

describe('TeamsBotApplicationTelemetry', () => {
  it('exports canonical OpenTelemetry source names', () => {
    expect(TeamsBotApplicationTelemetry.tracerName).toBe('Microsoft.Teams.Apps');
    expect(TeamsBotApplicationTelemetry.meterName).toBe('Microsoft.Teams.Apps');
  });
});
