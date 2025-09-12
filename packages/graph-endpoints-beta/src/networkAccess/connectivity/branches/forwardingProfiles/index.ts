export * as policies from './policies';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles',
    'get'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles',
    'post'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
    'get'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['branchSite-id', 'forwardingProfile-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles`
 *
 * Retrieve a list of traffic forwarding profiles associated with a branch.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles',
    paramDefs: {
      path: ['branchSite-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}`
 *
 * Each forwarding profile associated with a branch site is specified. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: {
      path: ['branchSite-id', 'forwardingProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}',
    paramDefs: {
      path: ['branchSite-id', 'forwardingProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles']['body'],
  params?: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles',
    paramDefs: {
      path: ['branchSite-id'],
    },
    params,
    body,
  };
}

export const servicePrincipal = {
  /**
   * `GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal`
   *
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['branchSite-id', 'forwardingProfile-id'],
      },
      params,
    };
  },
};
