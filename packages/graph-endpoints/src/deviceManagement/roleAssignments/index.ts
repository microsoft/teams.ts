export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/roleAssignments': Operation<'/deviceManagement/roleAssignments', 'get'>;
  'GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/roleAssignments': Operation<'/deviceManagement/roleAssignments', 'post'>;
}

/**
 * `DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}`
 *
 * Deletes a deviceAndAppManagementRoleAssignment.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceAndAppManagementRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleAssignments`
 *
 * List properties and relationships of the deviceAndAppManagementRoleAssignment objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/roleAssignments']['response']> {
  return {
    method: 'get',
    path: '/deviceManagement/roleAssignments',
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
 * `GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}`
 *
 * Read properties and relationships of the deviceAndAppManagementRoleAssignment object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceAndAppManagementRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}`
 *
 * Update the properties of a deviceAndAppManagementRoleAssignment object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}',
    paramDefs: [{ name: 'deviceAndAppManagementRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/roleAssignments`
 *
 * Create a new deviceAndAppManagementRoleAssignment object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleAssignments']['body'],
  params?: IEndpoints['POST /deviceManagement/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/roleAssignments']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/roleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
