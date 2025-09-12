export * as policies from './policies';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/filteringProfiles/{filteringProfile-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}',
    'delete'
  >;
  'GET /networkAccess/filteringProfiles': Operation<'/networkAccess/filteringProfiles', 'get'>;
  'GET /networkAccess/filteringProfiles/{filteringProfile-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}',
    'get'
  >;
  'PATCH /networkAccess/filteringProfiles/{filteringProfile-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}',
    'patch'
  >;
  'POST /networkAccess/filteringProfiles': Operation<'/networkAccess/filteringProfiles', 'post'>;
  'GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies',
    'get'
  >;
  'GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
    'get'
  >;
}

/**
 * `DELETE /networkAccess/filteringProfiles/{filteringProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/filteringProfiles/{filteringProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/filteringProfiles/{filteringProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['filteringProfile-id'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/filteringProfiles`
 *
 * Get a list of the filteringProfile objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/filteringProfiles']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/filteringProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringProfiles',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /networkAccess/filteringProfiles/{filteringProfile-id}`
 *
 * A filtering profile associates network access policies with Microsoft Entra ID Conditional Access policies, so that access policies can be applied to users and groups.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}',
    paramDefs: {
      path: ['filteringProfile-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /networkAccess/filteringProfiles/{filteringProfile-id}`
 *
 * Update the properties of a filteringProfile object.
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/filteringProfiles/{filteringProfile-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/filteringProfiles/{filteringProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/filteringProfiles/{filteringProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}',
    paramDefs: {
      path: ['filteringProfile-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /networkAccess/filteringProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/filteringProfiles']['body']
): EndpointRequest<IEndpoints['POST /networkAccess/filteringProfiles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/filteringProfiles',
    body,
  };
}

export const conditionalAccessPolicies = {
  /**
   * `GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies`
   *
   * A set of associated policies defined to regulate access to resources or systems based on specific conditions. Automatically expanded.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['filteringProfile-id'],
      },
      params,
    };
  },
  /**
   * `GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}`
   *
   * A set of associated policies defined to regulate access to resources or systems based on specific conditions. Automatically expanded.
   */
  get: function get(
    params?: IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/filteringProfiles/{filteringProfile-id}/conditionalAccessPolicies/{conditionalAccessPolicy-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['filteringProfile-id', 'conditionalAccessPolicy-id'],
      },
      params,
    };
  },
};
