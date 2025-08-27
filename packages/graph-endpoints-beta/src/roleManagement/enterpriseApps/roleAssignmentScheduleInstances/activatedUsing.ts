import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing`
 *
 * If the request is from an eligible administrator to activate a role, this parameter shows the related eligible assignment for that activation. Otherwise, it&#x27;s null. Supports $expand and $select nested in $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}/activatedUsing',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}
