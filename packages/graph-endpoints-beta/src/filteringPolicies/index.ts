export * as policyRules from './policyRules';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /filteringPolicies/{filteringPolicy-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}',
    'delete'
  >;
  'GET /filteringPolicies': Operation<'/filteringPolicies', 'get'>;
  'GET /filteringPolicies/{filteringPolicy-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}',
    'get'
  >;
  'PATCH /filteringPolicies/{filteringPolicy-id}': Operation<
    '/filteringPolicies/{filteringPolicy-id}',
    'patch'
  >;
  'POST /filteringPolicies': Operation<'/filteringPolicies', 'post'>;
}

/**
 * `DELETE /filteringPolicies/{filteringPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /filteringPolicies/{filteringPolicy-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/filteringPolicies/{filteringPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'filteringPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /filteringPolicies`
 *
 */
export function list(
  params?: IEndpoints['GET /filteringPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /filteringPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/filteringPolicies',
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
 * `GET /filteringPolicies/{filteringPolicy-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<IEndpoints['GET /filteringPolicies/{filteringPolicy-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/filteringPolicies/{filteringPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /filteringPolicies/{filteringPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}']['body'],
  params?: IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /filteringPolicies/{filteringPolicy-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/filteringPolicies/{filteringPolicy-id}',
    paramDefs: [{ name: 'filteringPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /filteringPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /filteringPolicies']['body'],
  params?: IEndpoints['POST /filteringPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /filteringPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/filteringPolicies',
    paramDefs: [],
    params,
    body,
  };
}
