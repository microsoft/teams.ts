import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
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
 * `GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags`
 *
 * Indicates the set of scope tags for the role assignment. These scope tags will limit the visibility of any Intune resources to those that match any of the scope tags in this collection.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceAndAppManagementRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}`
 *
 * Indicates the set of scope tags for the role assignment. These scope tags will limit the visibility of any Intune resources to those that match any of the scope tags in this collection.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleScopeTags/{roleScopeTag-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceAndAppManagementRoleAssignment-id', in: 'path' },
      { name: 'roleScopeTag-id', in: 'path' },
    ],
    params,
  };
}
