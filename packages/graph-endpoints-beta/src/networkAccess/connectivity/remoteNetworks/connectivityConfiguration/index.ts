export * as links from './links';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    'delete'
  >;
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    'get'
  >;
  'PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    'patch'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'remoteNetwork-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration`
 *
 * Specifies the connectivity details of all device links associated with a remote network.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'remoteNetwork-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/connectivityConfiguration',
    paramDefs: [{ name: 'remoteNetwork-id', in: 'path' }],
    params,
    body,
  };
}
