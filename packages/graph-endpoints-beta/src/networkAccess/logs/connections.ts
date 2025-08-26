import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/logs/connections/{connection-id}': Operation<
    '/networkAccess/logs/connections/{connection-id}',
    'delete'
  >;
  'GET /networkAccess/logs/connections': Operation<'/networkAccess/logs/connections', 'get'>;
  'GET /networkAccess/logs/connections/{connection-id}': Operation<
    '/networkAccess/logs/connections/{connection-id}',
    'get'
  >;
  'PATCH /networkAccess/logs/connections/{connection-id}': Operation<
    '/networkAccess/logs/connections/{connection-id}',
    'patch'
  >;
  'POST /networkAccess/logs/connections': Operation<'/networkAccess/logs/connections', 'post'>;
}

/**
 * `DELETE /networkAccess/logs/connections/{connection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/logs/connections/{connection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/logs/connections/{connection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/logs/connections/{connection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'connection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/logs/connections`
 *
 * Get a list of connection objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/logs/connections']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/logs/connections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/connections',
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
 * `GET /networkAccess/logs/connections/{connection-id}`
 *
 * Read the properties and relationships of a connection object.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/logs/connections/{connection-id}']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/logs/connections/{connection-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/connections/{connection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'connection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/logs/connections/{connection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/logs/connections/{connection-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/logs/connections/{connection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/logs/connections/{connection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/logs/connections/{connection-id}',
    paramDefs: [{ name: 'connection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/logs/connections`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/logs/connections']['body'],
  params?: IEndpoints['POST /networkAccess/logs/connections']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/logs/connections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/logs/connections',
    paramDefs: [],
    params,
    body,
  };
}
