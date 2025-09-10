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
  'GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags',
    'get'
  >;
  'GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}',
    'get'
  >;
}

/**
 * `DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
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
 * The Role Assignments.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/roleAssignments']['response']> {
  return {
    ver: 'beta',
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
 * The Role Assignments.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
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
 */
export function create(
  body: IEndpoints['POST /deviceManagement/roleAssignments']['body']
): EndpointRequest<IEndpoints['POST /deviceManagement/roleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/roleAssignments',
    body,
  };
}

export const roleDefinition = {
  /**
   * `GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition`
   *
   * Indicates the role definition for this role assignment.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
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

export const roleScopeTags = {
  /**
   * `GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags`
   *
   * Indicates the set of scope tags for the role assignment. These scope tags will limit the visibility of any Intune resources to those that match any of the scope tags in this collection.
   */
  list: function list(
    params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deviceAndAppManagementRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}`
   *
   * Indicates the set of scope tags for the role assignment. These scope tags will limit the visibility of any Intune resources to those that match any of the scope tags in this collection.
   */
  get: function get(
    params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['deviceAndAppManagementRoleAssignment-id', 'roleScopeTag-id'],
      },
      params,
    };
  },
};
