export * as healthIssues from './healthIssues';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/identities/sensors/{sensor-id}': Operation<
    '/security/identities/sensors/{sensor-id}',
    'delete'
  >;
  'GET /security/identities/sensors': Operation<'/security/identities/sensors', 'get'>;
  'GET /security/identities/sensors/{sensor-id}': Operation<
    '/security/identities/sensors/{sensor-id}',
    'get'
  >;
  'PATCH /security/identities/sensors/{sensor-id}': Operation<
    '/security/identities/sensors/{sensor-id}',
    'patch'
  >;
  'POST /security/identities/sensors': Operation<'/security/identities/sensors', 'post'>;
}

/**
 * `DELETE /security/identities/sensors/{sensor-id}`
 *
 * Delete a sensor object.
 */
export function del(
  params?: IEndpoints['DELETE /security/identities/sensors/{sensor-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /security/identities/sensors/{sensor-id}']['response']> {
  return {
    method: 'delete',
    path: '/security/identities/sensors/{sensor-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sensor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/identities/sensors`
 *
 * Get a list of sensor objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/identities/sensors']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities/sensors']['response']> {
  return {
    method: 'get',
    path: '/security/identities/sensors',
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
 * `GET /security/identities/sensors/{sensor-id}`
 *
 * Read the properties and relationships of a sensor object.
 */
export function get(
  params?: IEndpoints['GET /security/identities/sensors/{sensor-id}']['parameters']
): EndpointRequest<IEndpoints['GET /security/identities/sensors/{sensor-id}']['response']> {
  return {
    method: 'get',
    path: '/security/identities/sensors/{sensor-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sensor-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/identities/sensors/{sensor-id}`
 *
 * Update the properties of a sensor object.
 */
export function update(
  body: IEndpoints['PATCH /security/identities/sensors/{sensor-id}']['body'],
  params?: IEndpoints['PATCH /security/identities/sensors/{sensor-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /security/identities/sensors/{sensor-id}']['response']> {
  return {
    method: 'patch',
    path: '/security/identities/sensors/{sensor-id}',
    paramDefs: [{ name: 'sensor-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/identities/sensors`
 *
 */
export function create(
  body: IEndpoints['POST /security/identities/sensors']['body'],
  params?: IEndpoints['POST /security/identities/sensors']['parameters']
): EndpointRequest<IEndpoints['POST /security/identities/sensors']['response']> {
  return {
    method: 'post',
    path: '/security/identities/sensors',
    paramDefs: [],
    params,
    body,
  };
}
