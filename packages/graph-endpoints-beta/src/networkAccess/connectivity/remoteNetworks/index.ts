export * as connectivityConfiguration from './connectivityConfiguration';
export * as deviceLinks from './deviceLinks';
export * as forwardingProfiles from './forwardingProfiles';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/remoteNetworks': Operation<
    '/networkAccess/connectivity/remoteNetworks',
    'get'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/remoteNetworks': Operation<
    '/networkAccess/connectivity/remoteNetworks',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'remoteNetwork-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks`
 *
 * The locations, such as branches, that are connected to Global Secure Access services through an IPsec tunnel.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/connectivity/remoteNetworks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks',
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
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}`
 *
 * The locations, such as branches, that are connected to Global Secure Access services through an IPsec tunnel.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'remoteNetwork-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}',
    paramDefs: [{ name: 'remoteNetwork-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/remoteNetworks`
 *
 * Create a new remote network.
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/remoteNetworks']['body'],
  params?: IEndpoints['POST /networkAccess/connectivity/remoteNetworks']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/connectivity/remoteNetworks']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/remoteNetworks',
    paramDefs: [],
    params,
    body,
  };
}
