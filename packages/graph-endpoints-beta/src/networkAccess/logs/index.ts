export * as connections from './connections';
export * as remoteNetworks from './remoteNetworks';
export * as traffic from './traffic';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/logs': Operation<'/networkAccess/logs', 'delete'>;
  'GET /networkAccess/logs': Operation<'/networkAccess/logs', 'get'>;
  'PATCH /networkAccess/logs': Operation<'/networkAccess/logs', 'patch'>;
}

/**
 * `DELETE /networkAccess/logs`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/logs']['parameters']
): EndpointRequest<IEndpoints['DELETE /networkAccess/logs']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/logs',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /networkAccess/logs`
 *
 * Represents network connections that are routed through Global Secure Access.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/logs']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/logs']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/logs`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/logs']['body'],
  params?: IEndpoints['PATCH /networkAccess/logs']['parameters']
): EndpointRequest<IEndpoints['PATCH /networkAccess/logs']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/logs',
    paramDefs: [],
    params,
    body,
  };
}
