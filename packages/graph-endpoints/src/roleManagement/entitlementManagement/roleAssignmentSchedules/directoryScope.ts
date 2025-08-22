import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope`
 *
 * The directory object that is the scope of the role eligibility or assignment. Read-only.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/directoryScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentSchedule-id', in: 'path' },
    ],
    params,
  };
}
