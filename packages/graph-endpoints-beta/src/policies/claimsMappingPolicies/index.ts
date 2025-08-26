export * as appliesTo from './appliesTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/claimsMappingPolicies/{claimsMappingPolicy-id}': Operation<
    '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    'delete'
  >;
  'GET /policies/claimsMappingPolicies': Operation<'/policies/claimsMappingPolicies', 'get'>;
  'GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}': Operation<
    '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    'get'
  >;
  'PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}': Operation<
    '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    'patch'
  >;
  'POST /policies/claimsMappingPolicies': Operation<'/policies/claimsMappingPolicies', 'post'>;
}

/**
 * `DELETE /policies/claimsMappingPolicies/{claimsMappingPolicy-id}`
 *
 * Delete a claimsMappingPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'claimsMappingPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/claimsMappingPolicies`
 *
 * Get a list of claimsMappingPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/claimsMappingPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/claimsMappingPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/claimsMappingPolicies',
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
 * `GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}`
 *
 * Retrieve the properties and relationships of a claimsMappingPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'claimsMappingPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}`
 *
 * Update the properties of a claimsMappingPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/claimsMappingPolicies/{claimsMappingPolicy-id}',
    paramDefs: [{ name: 'claimsMappingPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/claimsMappingPolicies`
 *
 * Create a new claimsMappingPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/claimsMappingPolicies']['body'],
  params?: IEndpoints['POST /policies/claimsMappingPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/claimsMappingPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/claimsMappingPolicies',
    paramDefs: [],
    params,
    body,
  };
}
