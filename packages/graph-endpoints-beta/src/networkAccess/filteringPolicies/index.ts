export * as policyRules from './policyRules';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    'delete'
  >;
  'GET /networkAccess/filteringPolicies': Operation<'/networkAccess/filteringPolicies', 'get'>;
  'GET /networkAccess/filteringPolicies/{filteringPolicy-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    'get'
  >;
  'PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}': Operation<
    '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    'patch'
  >;
  'POST /networkAccess/filteringPolicies': Operation<'/networkAccess/filteringPolicies', 'post'>;
}

/**
 * `DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /networkAccess/filteringPolicies/{filteringPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'filteringPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /networkAccess/filteringPolicies`
 *
 * Get a list of the microsoft.graph.networkaccess.filteringPolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /networkAccess/filteringPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /networkAccess/filteringPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringPolicies',
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
 * `GET /networkAccess/filteringPolicies/{filteringPolicy-id}`
 *
 * Get a filteringPolicy object.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringPolicies/{filteringPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}']['body'],
  params?: IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /networkAccess/filteringPolicies/{filteringPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/networkAccess/filteringPolicies/{filteringPolicy-id}',
    paramDefs: [{ name: 'filteringPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /networkAccess/filteringPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /networkAccess/filteringPolicies']['body'],
  params?: IEndpoints['POST /networkAccess/filteringPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /networkAccess/filteringPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/networkAccess/filteringPolicies',
    paramDefs: [],
    params,
    body,
  };
}
