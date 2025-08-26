export * as evaluate from './evaluate';

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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'dataLossPreventionPolicy-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'dataLossPreventionPolicy-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'dataLossPreventionPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/informationProtection/dataLossPreventionPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies']['body'],
  params?: IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/informationProtection/dataLossPreventionPolicies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/informationProtection/dataLossPreventionPolicies',
    paramDefs: [],
    params,
    body,
  };
}
