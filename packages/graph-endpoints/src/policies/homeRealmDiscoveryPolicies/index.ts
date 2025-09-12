import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    'delete'
  >;
  'GET /policies/homeRealmDiscoveryPolicies': Operation<
    '/policies/homeRealmDiscoveryPolicies',
    'get'
  >;
  'GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    'get'
  >;
  'PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    'patch'
  >;
  'POST /policies/homeRealmDiscoveryPolicies': Operation<
    '/policies/homeRealmDiscoveryPolicies',
    'post'
  >;
  'GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `DELETE /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}`
 *
 * Delete a homeRealmDiscoveryPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['homeRealmDiscoveryPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/homeRealmDiscoveryPolicies`
 *
 * Get a list of homeRealmDiscoveryPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/homeRealmDiscoveryPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/homeRealmDiscoveryPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/homeRealmDiscoveryPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}`
 *
 * Retrieve the properties and relationships of a homeRealmDiscoveryPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    paramDefs: {
      path: ['homeRealmDiscoveryPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}`
 *
 * Update the properties of a homeRealmDiscoveryPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    paramDefs: {
      path: ['homeRealmDiscoveryPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/homeRealmDiscoveryPolicies`
 *
 * Create a new homeRealmDiscoveryPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/homeRealmDiscoveryPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/homeRealmDiscoveryPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/homeRealmDiscoveryPolicies',
    body,
  };
}

export const appliesTo = {
  /**
   * `GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo`
   *
   * Get a list of directoryObject objects that a homeRealmDiscoveryPolicy object has been applied to.
   */
  get: function get(
    params?: IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo']['response']
  > {
    return {
      method: 'get',
      path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['homeRealmDiscoveryPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}/appliesTo/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['homeRealmDiscoveryPolicy-id', 'directoryObject-id'],
      },
      params,
    };
  },
};
