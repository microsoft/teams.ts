import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    'delete'
  >;
  'GET /policies/activityBasedTimeoutPolicies': Operation<
    '/policies/activityBasedTimeoutPolicies',
    'get'
  >;
  'GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    'get'
  >;
  'PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    'patch'
  >;
  'POST /policies/activityBasedTimeoutPolicies': Operation<
    '/policies/activityBasedTimeoutPolicies',
    'post'
  >;
  'GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo',
    'get'
  >;
  'GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}',
    'get'
  >;
}

/**
 * `DELETE /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}`
 *
 * Delete an activityBasedTimeoutPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['activityBasedTimeoutPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/activityBasedTimeoutPolicies`
 *
 * Get a list of activityBasedTimeoutPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/activityBasedTimeoutPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/activityBasedTimeoutPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/activityBasedTimeoutPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}`
 *
 * Get the properties of an activityBasedTimeoutPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    paramDefs: {
      path: ['activityBasedTimeoutPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}`
 *
 * Update the properties of an activityBasedTimeoutPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    paramDefs: {
      path: ['activityBasedTimeoutPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/activityBasedTimeoutPolicies`
 *
 * Create a new activityBasedTimeoutPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/activityBasedTimeoutPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/activityBasedTimeoutPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/activityBasedTimeoutPolicies',
    body,
  };
}

export const appliesTo = {
  /**
   * `GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo`
   *
   */
  get: function get(
    params?: IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo']['response']
  > {
    return {
      method: 'get',
      path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['activityBasedTimeoutPolicy-id'],
      },
      params,
    };
  },
  /**
   * `GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}`
   *
   */
  get$1: function get$1(
    params?: IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}']['response']
  > {
    return {
      method: 'get',
      path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}/appliesTo/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['activityBasedTimeoutPolicy-id', 'directoryObject-id'],
      },
      params,
    };
  },
};
