export * as links from './links';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    'delete'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    'patch'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'branchSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration`
 *
 * Retrieve the IPSec tunnel configuration required to establish a bidirectional communication link between your organization&#x27;s router and the Microsoft gateway. This information is vital for configuring your router (customer premise equipment) after creating a deviceLink.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'branchSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/connectivityConfiguration',
    paramDefs: [{ name: 'branchSite-id', in: 'path' }],
    params,
    body,
  };
}
