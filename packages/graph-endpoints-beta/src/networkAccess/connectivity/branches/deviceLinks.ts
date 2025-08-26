import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks',
    'get'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks',
    'post'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}`
 *
 * Removes the link between the branch or remote network and the CPE device, effectively removing the connection and associated configuration between them.
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'branchSite-id', in: 'path' },
      { name: 'deviceLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks`
 *
 * Retrieve a list of device links associated with a specific branch.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'branchSite-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}`
 *
 * Each unique CPE device associated with a branch is specified. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'branchSite-id', in: 'path' },
      { name: 'deviceLink-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}`
 *
 * Update the device link associated with a specific branch or remote network.
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks/{deviceLink-id}',
    paramDefs: [
      { name: 'branchSite-id', in: 'path' },
      { name: 'deviceLink-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks`
 *
 * Create a branch site with associated device links.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['body'],
  params?: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/deviceLinks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/deviceLinks',
    paramDefs: [{ name: 'branchSite-id', in: 'path' }],
    params,
    body,
  };
}
