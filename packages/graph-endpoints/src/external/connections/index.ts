export * as groups from './groups';
export * as items from './items';
export * as operations from './operations';
export * as schema from './schema';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /external/connections/{externalConnection-id}': Operation<
    '/external/connections/{externalConnection-id}',
    'delete'
  >;
  'GET /external/connections': Operation<'/external/connections', 'get'>;
  'GET /external/connections/{externalConnection-id}': Operation<
    '/external/connections/{externalConnection-id}',
    'get'
  >;
  'PATCH /external/connections/{externalConnection-id}': Operation<
    '/external/connections/{externalConnection-id}',
    'patch'
  >;
  'POST /external/connections': Operation<'/external/connections', 'post'>;
}

/**
 * `DELETE /external/connections/{externalConnection-id}`
 *
 * Deletes an externalConnection object.
 */
export function del(
  params?: IEndpoints['DELETE /external/connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /external/connections/{externalConnection-id}']['response']> {
  return {
    method: 'delete',
    path: '/external/connections/{externalConnection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /external/connections`
 *
 * Get a list of the externalConnection objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /external/connections']['parameters']
): EndpointRequest<IEndpoints['GET /external/connections']['response']> {
  return {
    method: 'get',
    path: '/external/connections',
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
 * `GET /external/connections/{externalConnection-id}`
 *
 * Read the properties and relationships of an externalConnection object.
 */
export function get(
  params?: IEndpoints['GET /external/connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['GET /external/connections/{externalConnection-id}']['response']> {
  return {
    method: 'get',
    path: '/external/connections/{externalConnection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'externalConnection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /external/connections/{externalConnection-id}`
 *
 * Update the properties of an externalConnection object.
 */
export function update(
  body: IEndpoints['PATCH /external/connections/{externalConnection-id}']['body'],
  params?: IEndpoints['PATCH /external/connections/{externalConnection-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /external/connections/{externalConnection-id}']['response']> {
  return {
    method: 'patch',
    path: '/external/connections/{externalConnection-id}',
    paramDefs: [{ name: 'externalConnection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /external/connections`
 *
 * Create a new externalConnection object.
 */
export function create(
  body: IEndpoints['POST /external/connections']['body'],
  params?: IEndpoints['POST /external/connections']['parameters']
): EndpointRequest<IEndpoints['POST /external/connections']['response']> {
  return {
    method: 'post',
    path: '/external/connections',
    paramDefs: [],
    params,
    body,
  };
}
