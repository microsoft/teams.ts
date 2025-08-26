import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks',
    'get'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}`
 *
 * Removes the link between the branch or remote network and the CPE device, effectively removing the connection and associated configuration between them.
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'remoteNetwork-id', in: 'path' },
      { name: 'deviceLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks`
 *
 * Retrieves a specific device link associated with a remote network.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'remoteNetwork-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}`
 *
 * Retrieves a specific device link associated with a remote network.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'remoteNetwork-id', in: 'path' },
      { name: 'deviceLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks/{deviceLink-id}',
    paramDefs: [
      { name: 'remoteNetwork-id', in: 'path' },
      { name: 'deviceLink-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['body'],
  params?: IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/deviceLinks',
    paramDefs: [{ name: 'remoteNetwork-id', in: 'path' }],
    params,
    body,
  };
}
