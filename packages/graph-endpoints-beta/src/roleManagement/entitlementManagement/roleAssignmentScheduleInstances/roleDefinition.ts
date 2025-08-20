import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition`
 *
 * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}
