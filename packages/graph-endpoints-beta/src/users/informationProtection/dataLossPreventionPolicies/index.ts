export * as evaluate from './evaluate';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'dataLossPreventionPolicy-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'dataLossPreventionPolicy-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'dataLossPreventionPolicy-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
