import { metrics, trace } from '@opentelemetry/api';
import type { Meter, Tracer } from '@opentelemetry/api';

import pkg from '../../package.json';

import { getTeamsBotApplicationMeter, getTeamsBotApplicationTracer } from './helpers';
import { TeamsBotApplicationTelemetry } from './telemetry';

describe('TeamsBotApplicationTelemetry', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('exports canonical OpenTelemetry source names', () => {
    expect(TeamsBotApplicationTelemetry.tracerName).toBe('Microsoft.Teams.Apps');
    expect(TeamsBotApplicationTelemetry.meterName).toBe('Microsoft.Teams.Apps');
  });

  it('creates OpenTelemetry scopes with the Apps package version', () => {
    const tracer = {} as Tracer;
    const meter = {} as Meter;
    const getTracer = jest.spyOn(trace, 'getTracer').mockReturnValue(tracer);
    const getMeter = jest.spyOn(metrics, 'getMeter').mockReturnValue(meter);

    expect(getTeamsBotApplicationTracer()).toBe(tracer);
    expect(getTeamsBotApplicationMeter()).toBe(meter);
    expect(getTracer).toHaveBeenCalledWith('Microsoft.Teams.Apps', pkg.version);
    expect(getMeter).toHaveBeenCalledWith('Microsoft.Teams.Apps', pkg.version);
  });
});
