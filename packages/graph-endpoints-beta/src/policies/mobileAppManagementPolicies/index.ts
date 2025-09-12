export * as includedGroups from './includedGroups';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}': Operation<
    '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}',
    'delete'
  >;
  'GET /policies/mobileAppManagementPolicies': Operation<
    '/policies/mobileAppManagementPolicies',
    'get'
  >;
  'GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}': Operation<
    '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}',
    'get'
  >;
  'PATCH /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}': Operation<
    '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}',
    'patch'
  >;
  'POST /policies/mobileAppManagementPolicies': Operation<
    '/policies/mobileAppManagementPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}`
 *
 * Delete a mobilityManagementPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['mobileAppManagementPolicy-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}`
 *
 * Read the properties and relationships of a mobilityManagementPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}',
    paramDefs: {
      path: ['mobileAppManagementPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}`
 *
 * Update the properties of a mobilityManagementPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/mobileAppManagementPolicies/{mobileAppManagementPolicy-id}',
    paramDefs: {
      path: ['mobileAppManagementPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/mobileAppManagementPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/mobileAppManagementPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/mobileAppManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/mobileAppManagementPolicies',
    body,
  };
}
