export * as connectivityConfiguration from './connectivityConfiguration';
export * as deviceLinks from './deviceLinks';
export * as forwardingProfiles from './forwardingProfiles';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/branches': Operation<
    '/networkAccess/connectivity/branches',
    'get'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/branches': Operation<
    '/networkAccess/connectivity/branches',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/branches/{branchSite-id}`
 *
 * Delete a specific branch.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/branches/{branchSite-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'branchSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches`
 *
 * Retrieve a list of branches within a tenant connected to the Global Secure Access services.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/branches']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/connectivity/branches']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches',
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
 * `GET /networkAccess/connectivity/branches/{branchSite-id}`
 *
 * Retrieve information about a specific branch.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'branchSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/branches/{branchSite-id}`
 *
 * Update the configuration or properties of a specific branch.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/branches/{branchSite-id}',
    paramDefs: [{ name: 'branchSite-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/branches`
 *
 * Create a new branch.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/branches']['body'],
  params?: IEndpoints['POST /networkAccess/connectivity/branches']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/connectivity/branches']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/branches',
    paramDefs: [],
    params,
    body,
  };
}
