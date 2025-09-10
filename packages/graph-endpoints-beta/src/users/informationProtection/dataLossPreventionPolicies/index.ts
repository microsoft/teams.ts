import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'delete'
  >;
  'GET /users/{user-id}/informationProtection/dataLossPreventionPolicies': Operation<
    '/users/{user-id}/informationProtection/dataLossPreventionPolicies',
    'get'
  >;
  'GET /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'get'
  >;
  'PATCH /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'patch'
  >;
  'POST /users/{user-id}/informationProtection/dataLossPreventionPolicies': Operation<
    '/users/{user-id}/informationProtection/dataLossPreventionPolicies',
    'post'
  >;
  'POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate': Operation<
    '/users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'dataLossPreventionPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/dataLossPreventionPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/dataLossPreventionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/dataLossPreventionPolicies',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      path: ['user-id', 'dataLossPreventionPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      path: ['user-id', 'dataLossPreventionPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/informationProtection/dataLossPreventionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/informationProtection/dataLossPreventionPolicies']['body'],
  params?: IEndpoints['POST /users/{user-id}/informationProtection/dataLossPreventionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/informationProtection/dataLossPreventionPolicies',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const evaluate = {
  /**
   * `POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate']['body'],
    params?: IEndpoints['POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/informationProtection/dataLossPreventionPolicies/evaluate',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
};
