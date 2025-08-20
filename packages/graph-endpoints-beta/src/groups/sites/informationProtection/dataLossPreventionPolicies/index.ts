export * as evaluate from './evaluate';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies': Operation<
    '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'dataLossPreventionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'dataLossPreventionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies/{dataLossPreventionPolicy-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'dataLossPreventionPolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/informationProtection/dataLossPreventionPolicies',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
