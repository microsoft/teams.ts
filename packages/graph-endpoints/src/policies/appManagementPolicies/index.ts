import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/appManagementPolicies/{appManagementPolicy-id}': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}',
    'delete'
  >;
  'GET /policies/appManagementPolicies': Operation<'/policies/appManagementPolicies', 'get'>;
  'GET /policies/appManagementPolicies/{appManagementPolicy-id}': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}',
    'get'
  >;
  'PATCH /policies/appManagementPolicies/{appManagementPolicy-id}': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}',
    'patch'
  >;
  'POST /policies/appManagementPolicies': Operation<'/policies/appManagementPolicies', 'post'>;
  'GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `DELETE /policies/appManagementPolicies/{appManagementPolicy-id}`
 *
 * Delete an appManagementPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/appManagementPolicies/{appManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/appManagementPolicies/{appManagementPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/appManagementPolicies/{appManagementPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['appManagementPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/appManagementPolicies`
 *
 * Retrieve a list of appManagementPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/appManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/appManagementPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/appManagementPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/appManagementPolicies/{appManagementPolicy-id}`
 *
 * Read the properties of an appManagementPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/appManagementPolicies/{appManagementPolicy-id}',
    paramDefs: {
      path: ['appManagementPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/appManagementPolicies/{appManagementPolicy-id}`
 *
 * Update an appManagementPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/appManagementPolicies/{appManagementPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/appManagementPolicies/{appManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/appManagementPolicies/{appManagementPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/appManagementPolicies/{appManagementPolicy-id}',
    paramDefs: {
      path: ['appManagementPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/appManagementPolicies`
 *
 * Create an appManagementPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/appManagementPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/appManagementPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/appManagementPolicies',
    body,
  };
}

export const appliesTo = {
  /**
   * `GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo`
   *
   * List application and service principal objects that are assigned an appManagementPolicy policy object.
   */
  get: function get(
    params?: IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo']['response']
  > {
    return {
      method: 'get',
      path: '/policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['appManagementPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}`
   *
   * Collection of applications and service principals to which the policy is applied.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['appManagementPolicy-id', 'directoryObject-id'],
      },
      params,
    };
  },
};
