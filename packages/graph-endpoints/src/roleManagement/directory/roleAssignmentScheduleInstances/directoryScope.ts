import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope': Operation<
    '/roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope`
 *
 * The directory object that is the scope of the assignment or role eligibility. Read-only.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/directoryScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}
