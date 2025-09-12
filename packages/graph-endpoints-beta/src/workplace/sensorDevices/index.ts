import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /workplace/sensorDevices/{workplaceSensorDevice-id}': Operation<
    '/workplace/sensorDevices/{workplaceSensorDevice-id}',
    'delete'
  >;
  'GET /workplace/sensorDevices': Operation<'/workplace/sensorDevices', 'get'>;
  'GET /workplace/sensorDevices/{workplaceSensorDevice-id}': Operation<
    '/workplace/sensorDevices/{workplaceSensorDevice-id}',
    'get'
  >;
  'PATCH /workplace/sensorDevices/{workplaceSensorDevice-id}': Operation<
    '/workplace/sensorDevices/{workplaceSensorDevice-id}',
    'patch'
  >;
  'POST /workplace/sensorDevices': Operation<'/workplace/sensorDevices', 'post'>;
  'POST /workplace/sensorDevices/ingestTelemetry': Operation<
    '/workplace/sensorDevices/ingestTelemetry',
    'post'
  >;
}

/**
 * `DELETE /workplace/sensorDevices/{workplaceSensorDevice-id}`
 *
 * Delete a workplace sensor device.
 */
export function del(
  params?: IEndpoints['DELETE /workplace/sensorDevices/{workplaceSensorDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /workplace/sensorDevices/{workplaceSensorDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/workplace/sensorDevices/{workplaceSensorDevice-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['workplaceSensorDevice-id'],
    },
    params,
  };
}

/**
 * `GET /workplace/sensorDevices`
 *
 * Get a list of all workplace sensor devices created for a tenant.
 */
export function list(
  params?: IEndpoints['GET /workplace/sensorDevices']['parameters']
): EndpointRequest<IEndpoints['GET /workplace/sensorDevices']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/workplace/sensorDevices',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /workplace/sensorDevices/{workplaceSensorDevice-id}`
 *
 * Get the properties of a workplace sensor device, including tags, MAC address, sensors, and more.
 */
export function get(
  params?: IEndpoints['GET /workplace/sensorDevices/{workplaceSensorDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /workplace/sensorDevices/{workplaceSensorDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/workplace/sensorDevices/{workplaceSensorDevice-id}',
    paramDefs: {
      path: ['workplaceSensorDevice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /workplace/sensorDevices/{workplaceSensorDevice-id}`
 *
 * Update the properties of a workplace sensor device.
 */
export function update(
  body: IEndpoints['PATCH /workplace/sensorDevices/{workplaceSensorDevice-id}']['body'],
  params?: IEndpoints['PATCH /workplace/sensorDevices/{workplaceSensorDevice-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /workplace/sensorDevices/{workplaceSensorDevice-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/workplace/sensorDevices/{workplaceSensorDevice-id}',
    paramDefs: {
      path: ['workplaceSensorDevice-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /workplace/sensorDevices`
 *
 * Create a new workplace sensor device.
 */
export function create(
  body: IEndpoints['POST /workplace/sensorDevices']['body']
): EndpointRequest<IEndpoints['POST /workplace/sensorDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/workplace/sensorDevices',
    body,
  };
}

export const ingestTelemetry = {
  /**
   * `POST /workplace/sensorDevices/ingestTelemetry`
   *
   * Ingest sensor telemetry for a workplace sensor device.
   */
  create: function create(
    body: IEndpoints['POST /workplace/sensorDevices/ingestTelemetry']['body']
  ): EndpointRequest<IEndpoints['POST /workplace/sensorDevices/ingestTelemetry']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/workplace/sensorDevices/ingestTelemetry',
      body,
    };
  },
};
