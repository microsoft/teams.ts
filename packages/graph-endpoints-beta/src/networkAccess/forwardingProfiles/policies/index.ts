import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    'delete'
  >;
  'GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies',
    'get'
  >;
  'GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    'get'
  >;
  'PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    'patch'
  >;
  'POST /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies',
    'post'
  >;
  'GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy',
    'get'
  >;
}

/**
 * `DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['forwardingProfile-id', 'policyLink-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies`
 *
 * Retrieve a list of forwarding policy links that are associated with a specific forwarding profile.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies',
    paramDefs: {
      path: ['forwardingProfile-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}`
 *
 * Retrieve information about a specific link between a forwarding policy and a forwarding profile.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    paramDefs: {
      path: ['forwardingProfile-id', 'policyLink-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}`
 *
 * Update an existing forwarding policy link to modify the association between a forwarding policy and a forwarding profile. This operation allows for linking or unlinking them as needed.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}',
    paramDefs: {
      path: ['forwardingProfile-id', 'policyLink-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies']['body'],
  params?: IEndpoints['POST /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies']['parameters']
): EndpointRequest<
  IEndpoints['POST /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies',
    paramDefs: {
      path: ['forwardingProfile-id'],
    },
    params,
    body,
  };
}

export const policy = {
  /**
   * `GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy`
   *
   * Policy.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['forwardingProfile-id', 'policyLink-id'],
      },
      params,
    };
  },
};
