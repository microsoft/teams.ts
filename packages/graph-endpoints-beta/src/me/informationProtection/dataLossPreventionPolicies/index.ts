import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'delete'
  >;
  'GET /me/informationProtection/dataLossPreventionPolicies': Operation<
    '/me/informationProtection/dataLossPreventionPolicies',
    'get'
  >;
  'GET /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'get'
  >;
  'PATCH /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'patch'
  >;
  'POST /me/informationProtection/dataLossPreventionPolicies': Operation<
    '/me/informationProtection/dataLossPreventionPolicies',
    'post'
  >;
  'POST /me/informationProtection/dataLossPreventionPolicies/evaluate': Operation<
    '/me/informationProtection/dataLossPreventionPolicies/evaluate',
    'post'
  >;
}

/**
 * `DELETE /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['dataLossPreventionPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /me/informationProtection/dataLossPreventionPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /me/informationProtection/dataLossPreventionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/dataLossPreventionPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      path: ['dataLossPreventionPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      path: ['dataLossPreventionPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/informationProtection/dataLossPreventionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/dataLossPreventionPolicies',
    body,
  };
}

export const evaluate = {
  /**
   * `POST /me/informationProtection/dataLossPreventionPolicies/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies/evaluate']['body']
  ): EndpointRequest<
    IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/informationProtection/dataLossPreventionPolicies/evaluate',
      body,
    };
  },
};
