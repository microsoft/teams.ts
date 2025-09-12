import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'delete'
  >;
  'GET /sites/{site-id}/informationProtection/dataLossPreventionPolicies': Operation<
    '/sites/{site-id}/informationProtection/dataLossPreventionPolicies',
    'get'
  >;
  'GET /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'patch'
  >;
  'POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies': Operation<
    '/sites/{site-id}/informationProtection/dataLossPreventionPolicies',
    'post'
  >;
  'POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate': Operation<
    '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'dataLossPreventionPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/dataLossPreventionPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/dataLossPreventionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/dataLossPreventionPolicies',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      path: ['site-id', 'dataLossPreventionPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: {
      path: ['site-id', 'dataLossPreventionPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies']['body'],
  params?: IEndpoints['POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/informationProtection/dataLossPreventionPolicies',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const evaluate = {
  /**
   * `POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate`
   *
   */
  create: function create(
    body: IEndpoints['POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate']['body'],
    params?: IEndpoints['POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/sites/{site-id}/informationProtection/dataLossPreventionPolicies/evaluate',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};
