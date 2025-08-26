export * as appliesTo from './appliesTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    'delete'
  >;
  'GET /policies/homeRealmDiscoveryPolicies': Operation<
    '/policies/homeRealmDiscoveryPolicies',
    'get'
  >;
  'GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    'get'
  >;
  'PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}': Operation<
    '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    'patch'
  >;
  'POST /policies/homeRealmDiscoveryPolicies': Operation<
    '/policies/homeRealmDiscoveryPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}`
 *
 * Delete a homeRealmDiscoveryPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'homeRealmDiscoveryPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/homeRealmDiscoveryPolicies`
 *
 * Get a list of homeRealmDiscoveryPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/homeRealmDiscoveryPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/homeRealmDiscoveryPolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/homeRealmDiscoveryPolicies',
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
 * `GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}`
 *
 * Retrieve the properties and relationships of a homeRealmDiscoveryPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'homeRealmDiscoveryPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}`
 *
 * Update the properties of a homeRealmDiscoveryPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}',
    paramDefs: [{ name: 'homeRealmDiscoveryPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/homeRealmDiscoveryPolicies`
 *
 * Create a new homeRealmDiscoveryPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/homeRealmDiscoveryPolicies']['body'],
  params?: IEndpoints['POST /policies/homeRealmDiscoveryPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/homeRealmDiscoveryPolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/homeRealmDiscoveryPolicies',
    paramDefs: [],
    params,
    body,
  };
}
