import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope`
 *
 * Read-only property with details of the app-specific scope when the assignment or role eligibility is scoped to an app. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}
