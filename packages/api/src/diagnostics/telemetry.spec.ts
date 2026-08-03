import { metrics, trace } from '@opentelemetry/api';
import type { Meter, Tracer } from '@opentelemetry/api';

import pkg from '../../package.json';

import { getTeamsApiMeter, getTeamsApiTracer } from './helpers';
import { TeamsApiTelemetry } from './telemetry';

describe('TeamsApiTelemetry', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('exports canonical OpenTelemetry source names', () => {
    expect(TeamsApiTelemetry.tracerName).toBe('Microsoft.Teams.Api');
    expect(TeamsApiTelemetry.meterName).toBe('Microsoft.Teams.Api');
  });

  it('creates OpenTelemetry scopes with the API package version', () => {
    const tracer = {} as Tracer;
    const meter = {} as Meter;
    const getTracer = jest.spyOn(trace, 'getTracer').mockReturnValue(tracer);
    const getMeter = jest.spyOn(metrics, 'getMeter').mockReturnValue(meter);

    expect(getTeamsApiTracer()).toBe(tracer);
    expect(getTeamsApiMeter()).toBe(meter);
    expect(getTracer).toHaveBeenCalledWith('Microsoft.Teams.Api', pkg.version);
    expect(getMeter).toHaveBeenCalledWith('Microsoft.Teams.Api', pkg.version);
  });
});
