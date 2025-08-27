export * as ingestTelemetry from './ingestTelemetry';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'workplaceSensorDevice-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'workplaceSensorDevice-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'workplaceSensorDevice-id', in: 'path' }],
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
  body: IEndpoints['POST /workplace/sensorDevices']['body'],
  params?: IEndpoints['POST /workplace/sensorDevices']['parameters']
): EndpointRequest<IEndpoints['POST /workplace/sensorDevices']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/workplace/sensorDevices',
    paramDefs: [],
    params,
    body,
  };
}
