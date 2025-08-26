import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing': Operation<
    '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing`
 *
 * If the request is from an eligible administrator to activate a role, this parameter shows the related eligible assignment for that activation. Otherwise, it&#x27;s null. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/activatedUsing',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentSchedule-id', in: 'path' },
    ],
    params,
  };
}
