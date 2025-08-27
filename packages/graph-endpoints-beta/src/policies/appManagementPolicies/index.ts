export * as appliesTo from './appliesTo';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/appManagementPolicies/{appManagementPolicy-id}': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}',
    'delete'
  >;
  'GET /policies/appManagementPolicies': Operation<'/policies/appManagementPolicies', 'get'>;
  'GET /policies/appManagementPolicies/{appManagementPolicy-id}': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}',
    'get'
  >;
  'PATCH /policies/appManagementPolicies/{appManagementPolicy-id}': Operation<
    '/policies/appManagementPolicies/{appManagementPolicy-id}',
    'patch'
  >;
  'POST /policies/appManagementPolicies': Operation<'/policies/appManagementPolicies', 'post'>;
}

/**
 * `DELETE /policies/appManagementPolicies/{appManagementPolicy-id}`
 *
 * Delete an appManagementPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/appManagementPolicies/{appManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/appManagementPolicies/{appManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/appManagementPolicies/{appManagementPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'appManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/appManagementPolicies`
 *
 * Retrieve a list of appManagementPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/appManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/appManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/appManagementPolicies',
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
 * `GET /policies/appManagementPolicies/{appManagementPolicy-id}`
 *
 * Read the properties of an appManagementPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/appManagementPolicies/{appManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/appManagementPolicies/{appManagementPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'appManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/appManagementPolicies/{appManagementPolicy-id}`
 *
 * Update an appManagementPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/appManagementPolicies/{appManagementPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/appManagementPolicies/{appManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/appManagementPolicies/{appManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/appManagementPolicies/{appManagementPolicy-id}',
    paramDefs: [{ name: 'appManagementPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/appManagementPolicies`
 *
 * Create an appManagementPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/appManagementPolicies']['body'],
  params?: IEndpoints['POST /policies/appManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/appManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/appManagementPolicies',
    paramDefs: [],
    params,
    body,
  };
}
