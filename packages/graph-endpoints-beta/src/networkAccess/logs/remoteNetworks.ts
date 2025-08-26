import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}': Operation<
    '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
    'delete'
  >;
  'GET /networkAccess/logs/remoteNetworks': Operation<'/networkAccess/logs/remoteNetworks', 'get'>;
  'GET /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}': Operation<
    '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
    'get'
  >;
  'PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}': Operation<
    '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
    'patch'
  >;
  'POST /networkAccess/logs/remoteNetworks': Operation<
    '/networkAccess/logs/remoteNetworks',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'remoteNetworkHealthEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/logs/remoteNetworks`
 *
 * Get a list of the remoteNetworkHealthEvent objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/logs/remoteNetworks']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/logs/remoteNetworks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/remoteNetworks',
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
 * `GET /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}`
 *
 * A collection of remote network health events.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'remoteNetworkHealthEvent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/logs/remoteNetworks/{remoteNetworkHealthEvent-id}',
    paramDefs: [{ name: 'remoteNetworkHealthEvent-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/logs/remoteNetworks`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/logs/remoteNetworks']['body'],
  params?: IEndpoints['POST /networkAccess/logs/remoteNetworks']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/logs/remoteNetworks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/logs/remoteNetworks',
    paramDefs: [],
    params,
    body,
  };
}
