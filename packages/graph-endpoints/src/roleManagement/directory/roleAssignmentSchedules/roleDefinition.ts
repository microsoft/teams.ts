import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition`
 *
 * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentSchedule-id', in: 'path' },
    ],
    params,
  };
}
