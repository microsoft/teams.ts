import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition': Operation<
    '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition`
 *
 * Indicates the role definition for this role assignment.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/roleAssignments/{deviceAndAppManagementRoleAssignment-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceAndAppManagementRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
