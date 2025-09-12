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
  'GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition',
    'get'
  >;
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
    paramDefs: {
      header: ['If-Match'],
      path: ['deviceAndAppManagementRoleAssignment-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['deviceAndAppManagementRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['deviceAndAppManagementRoleAssignment-id'],
    },
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
  body: IEndpoints['POST /deviceManagement/roleAssignments']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/roleAssignments']['response']> {
  return {
    method: 'post',
    path: '/deviceManagement/roleAssignments',
    body,
  };
}

export const roleDefinition = {
  /**
   * `GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition`
   *
   * Role definition this assignment is part of.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceAndAppManagementRoleAssignment-id'],
      },
      params,
    };
  },
};
