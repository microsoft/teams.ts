export * as appliesTo from './appliesTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    'delete'
  >;
  'GET /policies/activityBasedTimeoutPolicies': Operation<
    '/policies/activityBasedTimeoutPolicies',
    'get'
  >;
  'GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    'get'
  >;
  'PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}': Operation<
    '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    'patch'
  >;
  'POST /policies/activityBasedTimeoutPolicies': Operation<
    '/policies/activityBasedTimeoutPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}`
 *
 * Delete an activityBasedTimeoutPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'activityBasedTimeoutPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/activityBasedTimeoutPolicies`
 *
 * Get a list of activityBasedTimeoutPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/activityBasedTimeoutPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/activityBasedTimeoutPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/activityBasedTimeoutPolicies',
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
 * `GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}`
 *
 * Get the properties of an activityBasedTimeoutPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'activityBasedTimeoutPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}`
 *
 * Update the properties of an activityBasedTimeoutPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}',
    paramDefs: [{ name: 'activityBasedTimeoutPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/activityBasedTimeoutPolicies`
 *
 * Create a new activityBasedTimeoutPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/activityBasedTimeoutPolicies']['body'],
  params?: IEndpoints['POST /policies/activityBasedTimeoutPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/activityBasedTimeoutPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/activityBasedTimeoutPolicies',
    paramDefs: [],
    params,
    body,
  };
}
