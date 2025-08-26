import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope`
 *
 * Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentSchedule-id', in: 'path' },
    ],
    params,
  };
}
