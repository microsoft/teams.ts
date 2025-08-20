import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope`
 *
 * The directory object that is the scope of the assignment or role eligibility. Read-only.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}
