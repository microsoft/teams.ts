import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /workplace/sensorDevices/ingestTelemetry': Operation<
    '/workplace/sensorDevices/ingestTelemetry',
    'post'
  >;
}

/**
 * `POST /workplace/sensorDevices/ingestTelemetry`
 *
 * Ingest sensor telemetry for a workplace sensor device.
 */
export function create(
  body: IEndpoints['POST /workplace/sensorDevices/ingestTelemetry']['body'],
  params?: IEndpoints['POST /workplace/sensorDevices/ingestTelemetry']['parameters']
): EndpointRequest<IEndpoints['POST /workplace/sensorDevices/ingestTelemetry']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/workplace/sensorDevices/ingestTelemetry',
    paramDefs: [],
    params,
    body,
  };
}
