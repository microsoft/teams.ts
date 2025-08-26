export * as includedGroups from './includedGroups';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}',
    'delete'
  >;
  'GET /policies/mobileDeviceManagementPolicies': Operation<
    '/policies/mobileDeviceManagementPolicies',
    'get'
  >;
  'GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}',
    'get'
  >;
  'PATCH /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}': Operation<
    '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}',
    'patch'
  >;
  'POST /policies/mobileDeviceManagementPolicies': Operation<
    '/policies/mobileDeviceManagementPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}`
 *
 * Delete a mobilityManagementPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'mobilityManagementPolicy-id', in: 'path' },
    ],
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
 * `GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}`
 *
 * Read the properties and relationships of a mobilityManagementPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'mobilityManagementPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}`
 *
 * Update the properties of a mobilityManagementPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy-id}',
    paramDefs: [{ name: 'mobilityManagementPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/mobileDeviceManagementPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /policies/mobileDeviceManagementPolicies']['body'],
  params?: IEndpoints['POST /policies/mobileDeviceManagementPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/mobileDeviceManagementPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/mobileDeviceManagementPolicies',
    paramDefs: [],
    params,
    body,
  };
}
