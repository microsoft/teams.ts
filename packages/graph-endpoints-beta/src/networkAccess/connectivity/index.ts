export * as branches from './branches';
export * as remoteNetworks from './remoteNetworks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity': Operation<'/networkAccess/connectivity', 'delete'>;
  'GET /networkAccess/connectivity': Operation<'/networkAccess/connectivity', 'get'>;
  'PATCH /networkAccess/connectivity': Operation<'/networkAccess/connectivity', 'patch'>;
}

/**
 * `DELETE /networkAccess/connectivity`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/connectivity']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity`
 *
 * Connectivity represents all the connectivity components in Global Secure Access.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/connectivity']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess/connectivity']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity',
    paramDefs: [],
    params,
    body,
  };
}
