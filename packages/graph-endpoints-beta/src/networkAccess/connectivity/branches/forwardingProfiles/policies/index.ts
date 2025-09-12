import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    'delete'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies',
    'get'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    'get'
  >;
  'PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    'patch'
  >;
  'POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies',
    'post'
  >;
  'GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy': Operation<
    '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy',
    'get'
  >;
}

/**
 * `DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['branchSite-id', 'forwardingProfile-id', 'policyLink-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies`
 *
 * The traffic forwarding policies associated with this profile.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies',
    paramDefs: {
      path: ['branchSite-id', 'forwardingProfile-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}`
 *
 * The traffic forwarding policies associated with this profile.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    paramDefs: {
      path: ['branchSite-id', 'forwardingProfile-id', 'policyLink-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    paramDefs: {
      path: ['branchSite-id', 'forwardingProfile-id', 'policyLink-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['body'],
  params?: IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies',
    paramDefs: {
      path: ['branchSite-id', 'forwardingProfile-id'],
    },
    params,
    body,
  };
}

export const policy = {
  /**
   * `GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy`
   *
   * Policy.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/connectivity/branches/{branchSite-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['branchSite-id', 'forwardingProfile-id', 'policyLink-id'],
      },
      params,
    };
  },
};
