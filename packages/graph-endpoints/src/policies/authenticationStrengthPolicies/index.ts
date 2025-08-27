export * as combinationConfigurations from './combinationConfigurations';
export * as updateAllowedCombinations from './updateAllowedCombinations';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    'delete'
  >;
  'GET /policies/authenticationStrengthPolicies': Operation<
    '/policies/authenticationStrengthPolicies',
    'get'
  >;
  'GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    'get'
  >;
  'PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}': Operation<
    '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    'patch'
  >;
  'POST /policies/authenticationStrengthPolicies': Operation<
    '/policies/authenticationStrengthPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}`
 *
 * Delete a custom authenticationStrengthPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/authenticationStrengthPolicies`
 *
 * Get a list of the authenticationStrengthPolicy objects and their properties. This API returns both built-in and custom policies.
 */
export function list(
  params?: IEndpoints['GET /policies/authenticationStrengthPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/authenticationStrengthPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/authenticationStrengthPolicies',
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
 * `GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}`
 *
 * Read the properties and relationships of an authenticationStrengthPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationStrengthPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}`
 *
 * Update the properties of an authenticationStrengthPolicy object. You cannot update the allowed auth method combinations using this request. To do so, use the Update allowed combinations action.
 */
export function update(
  body: IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}',
    paramDefs: [{ name: 'authenticationStrengthPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/authenticationStrengthPolicies`
 *
 * Create a new custom authenticationStrengthPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/authenticationStrengthPolicies']['body'],
  params?: IEndpoints['POST /policies/authenticationStrengthPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/authenticationStrengthPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/authenticationStrengthPolicies',
    paramDefs: [],
    params,
    body,
  };
}
