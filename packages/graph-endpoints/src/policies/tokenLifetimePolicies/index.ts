export * as appliesTo from './appliesTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    'delete'
  >;
  'GET /policies/tokenLifetimePolicies': Operation<'/policies/tokenLifetimePolicies', 'get'>;
  'GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    'get'
  >;
  'PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}': Operation<
    '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    'patch'
  >;
  'POST /policies/tokenLifetimePolicies': Operation<'/policies/tokenLifetimePolicies', 'post'>;
}

/**
 * `DELETE /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}`
 *
 * Delete a tokenLifetimePolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['response']
> {
  return {
    method: 'delete',
    path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'tokenLifetimePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/tokenLifetimePolicies`
 *
 * Get a list of tokenLifetimePolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/tokenLifetimePolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/tokenLifetimePolicies']['response']> {
  return {
    method: 'get',
    path: '/policies/tokenLifetimePolicies',
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
 * `GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}`
 *
 * Retrieve the properties and relationships of a tokenLifetimePolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['response']
> {
  return {
    method: 'get',
    path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'tokenLifetimePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}`
 *
 * Update the properties of a tokenLifetimePolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}']['response']
> {
  return {
    method: 'patch',
    path: '/policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}',
    paramDefs: [{ name: 'tokenLifetimePolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/tokenLifetimePolicies`
 *
 * Create a new tokenLifetimePolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/tokenLifetimePolicies']['body'],
  params?: IEndpoints['POST /policies/tokenLifetimePolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/tokenLifetimePolicies']['response']> {
  return {
    method: 'post',
    path: '/policies/tokenLifetimePolicies',
    paramDefs: [],
    params,
    body,
  };
}
