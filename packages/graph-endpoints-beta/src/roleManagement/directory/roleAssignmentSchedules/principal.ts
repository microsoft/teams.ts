import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal`
 *
 * The principal that&#x27;s getting a role assignment or that&#x27;s eligible for a role through the request.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentSchedule-id', in: 'path' },
    ],
    params,
  };
}
