import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal`
 *
 * The principal that&#x27;s getting a role assignment or that&#x27;s eligible for a role through the request.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule-id}/principal',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignmentSchedule-id', in: 'path' },
    ],
    params,
  };
}
