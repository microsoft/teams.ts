import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/claimsMappingPolicies/{claimsMappingPolicy-id}': Operation<
    '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    'delete'
  >;
  'GET /policies/claimsMappingPolicies': Operation<'/policies/claimsMappingPolicies', 'get'>;
  'GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}': Operation<
    '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    'get'
  >;
  'PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}': Operation<
    '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    'patch'
  >;
  'POST /policies/claimsMappingPolicies': Operation<'/policies/claimsMappingPolicies', 'post'>;
  'GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo': Operation<
    '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `DELETE /policies/claimsMappingPolicies/{claimsMappingPolicy-id}`
 *
 * Delete a claimsMappingPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['claimsMappingPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/claimsMappingPolicies`
 *
 * Get a list of claimsMappingPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/claimsMappingPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/claimsMappingPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/claimsMappingPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}`
 *
 * Retrieve the properties and relationships of a claimsMappingPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    paramDefs: {
      path: ['claimsMappingPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}`
 *
 * Update the properties of a claimsMappingPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    paramDefs: {
      path: ['claimsMappingPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/claimsMappingPolicies`
 *
 * Create a new claimsMappingPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/claimsMappingPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/claimsMappingPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/claimsMappingPolicies',
    body,
  };
}

export const appliesTo = {
  /**
   * `GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo`
   *
   * Get a list of directoryObject objects that a claimsMappingPolicy object has been applied to. The claimsMappingPolicy can only be applied to application and servicePrincipal resources.
   */
  get: function get(
    params?: IEndpoints['GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['claimsMappingPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo/{directoryObject-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}/appliesTo/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['claimsMappingPolicy-id', 'directoryObject-id'],
      },
      params,
    };
  },
};
