export * as excludes from './excludes';
export * as includes from './includes';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    'delete'
  >;
  'GET /policies/permissionGrantPolicies': Operation<'/policies/permissionGrantPolicies', 'get'>;
  'GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    'get'
  >;
  'PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}': Operation<
    '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    'patch'
  >;
  'POST /policies/permissionGrantPolicies': Operation<'/policies/permissionGrantPolicies', 'post'>;
}

/**
 * `DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}`
 *
 * Delete a permissionGrantPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'permissionGrantPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/permissionGrantPolicies`
 *
 * Retrieve the list of permissionGrantPolicy objects.
 */
export function list(
  params?: IEndpoints['GET /policies/permissionGrantPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/permissionGrantPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/permissionGrantPolicies',
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
 * `GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}`
 *
 * Retrieve a single permissionGrantPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'permissionGrantPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}`
 *
 * Update properties of a  permissionGrantPolicy.
 */
export function update(
  body: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/permissionGrantPolicies/{permissionGrantPolicy-id}',
    paramDefs: [{ name: 'permissionGrantPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/permissionGrantPolicies`
 *
 * Creates a permissionGrantPolicy. A permission grant policy is used to describe the conditions under which permissions can be granted (for example, during application consent). After creating the permission grant policy, you can add include condition sets to add matching rules, and add exclude condition sets to add exclusion rules.
 */
export function create(
  body: IEndpoints['POST /policies/permissionGrantPolicies']['body'],
  params?: IEndpoints['POST /policies/permissionGrantPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/permissionGrantPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/permissionGrantPolicies',
    paramDefs: [],
    params,
    body,
  };
}
