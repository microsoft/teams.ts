import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope`
 *
 * Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentSchedule-id', in: 'path' },
    ],
    params,
  };
}
