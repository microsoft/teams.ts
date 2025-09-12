export * as includedGroups from './includedGroups';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}',
    'delete'
  >;
  'GET /policies/mobileDeviceManagementPolicies': Operation<
    '/policies/mobileDeviceManagementPolicies',
    'get'
  >;
  'GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}',
    'get'
  >;
  'PATCH /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}',
    'patch'
  >;
  'POST /policies/mobileDeviceManagementPolicies': Operation<
    '/policies/mobileDeviceManagementPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}`
 *
 * Delete a mobilityManagementPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['mobileDeviceManagementPolicy-id'],
    },
    params,
  };
}

/**
 * `GET /policies/mobileDeviceManagementPolicies`
 *
 * Get a list of the mobilityManagementPolicy objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /policies/mobileDeviceManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/mobileDeviceManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileDeviceManagementPolicies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}`
 *
 * Read the properties and relationships of a mobilityManagementPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}',
    paramDefs: {
      path: ['mobileDeviceManagementPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}`
 *
 * Update the properties of a mobilityManagementPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/mobileDeviceManagementPolicies/{mobileDeviceManagementPolicy-id}',
    paramDefs: {
      path: ['mobileDeviceManagementPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /policies/mobileDeviceManagementPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/mobileDeviceManagementPolicies']['body']
): EndpointRequest<IEndpoints['POST /policies/mobileDeviceManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/mobileDeviceManagementPolicies',
    body,
  };
}
