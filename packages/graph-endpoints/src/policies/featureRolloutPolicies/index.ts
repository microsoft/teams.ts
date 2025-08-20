export * as appliesTo from './appliesTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'delete'
  >;
  'GET /policies/featureRolloutPolicies': Operation<'/policies/featureRolloutPolicies', 'get'>;
  'GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'get'
  >;
  'PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}': Operation<
    '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    'patch'
  >;
  'POST /policies/featureRolloutPolicies': Operation<'/policies/featureRolloutPolicies', 'post'>;
}

/**
 * `DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * Delete a featureRolloutPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'featureRolloutPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/featureRolloutPolicies`
 *
 * Retrieve a list of featureRolloutPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/featureRolloutPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/featureRolloutPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/featureRolloutPolicies',
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
 * `GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * Retrieve the properties and relationships of a featureRolloutPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'featureRolloutPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}`
 *
 * Update the properties of featureRolloutPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/featureRolloutPolicies/{featureRolloutPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/featureRolloutPolicies/{featureRolloutPolicy-id}',
    paramDefs: [{ name: 'featureRolloutPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/featureRolloutPolicies`
 *
 * Create a new featureRolloutPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/featureRolloutPolicies']['body'],
  params?: IEndpoints['POST /policies/featureRolloutPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/featureRolloutPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/featureRolloutPolicies',
    paramDefs: [],
    params,
    body,
  };
}
