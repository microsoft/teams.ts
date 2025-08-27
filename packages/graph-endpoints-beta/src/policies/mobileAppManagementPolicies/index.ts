export * as includedGroups from './includedGroups';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}': Operation<
    '/policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}',
    'delete'
  >;
  'GET /policies/mobileAppManagementPolicies': Operation<
    '/policies/mobileAppManagementPolicies',
    'get'
  >;
  'GET /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}': Operation<
    '/policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}',
    'get'
  >;
  'PATCH /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}': Operation<
    '/policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}',
    'patch'
  >;
  'POST /policies/mobileAppManagementPolicies': Operation<
    '/policies/mobileAppManagementPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}`
 *
 * Delete a mobilityManagementPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobilityManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/mobileAppManagementPolicies`
 *
 * Get a list of the mobilityManagementPolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /policies/mobileAppManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/mobileAppManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileAppManagementPolicies',
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
 * `GET /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}`
 *
 * Read the properties and relationships of a mobilityManagementPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobilityManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}`
 *
 * Update the properties of a mobilityManagementPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/mobileAppManagementPolicies/{mobilityManagementPolicy-id}',
    paramDefs: [{ name: 'mobilityManagementPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/mobileAppManagementPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/mobileAppManagementPolicies']['body'],
  params?: IEndpoints['POST /policies/mobileAppManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/mobileAppManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/mobileAppManagementPolicies',
    paramDefs: [],
    params,
    body,
  };
}
