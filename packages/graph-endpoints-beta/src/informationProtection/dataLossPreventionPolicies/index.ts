import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'delete'
  >;
  'GET /informationProtection/dataLossPreventionPolicies': Operation<
    '/informationProtection/dataLossPreventionPolicies',
    'get'
  >;
  'GET /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'get'
  >;
  'PATCH /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'patch'
  >;
  'POST /informationProtection/dataLossPreventionPolicies': Operation<
    '/informationProtection/dataLossPreventionPolicies',
    'post'
  >;
  'POST /informationProtection/dataLossPreventionPolicies/evaluate': Operation<
    '/informationProtection/dataLossPreventionPolicies/evaluate',
    'post'
  >;
}

/**
 * `DELETE /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['dataLossPreventionPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /informationProtection/dataLossPreventionPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /informationProtection/dataLossPreventionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/dataLossPreventionPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      path: ['dataLossPreventionPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      path: ['dataLossPreventionPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /informationProtection/dataLossPreventionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /informationProtection/dataLossPreventionPolicies']['body']
): EndpointRequest<
  IEndpoints['POST /informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/informationProtection/dataLossPreventionPolicies',
    body,
  };
}

export const evaluate = {
  /**
   * `POST /informationProtection/dataLossPreventionPolicies/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /informationProtection/dataLossPreventionPolicies/evaluate']['body']
  ): EndpointRequest<
    IEndpoints['POST /informationProtection/dataLossPreventionPolicies/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/informationProtection/dataLossPreventionPolicies/evaluate',
      body,
    };
  },
};
