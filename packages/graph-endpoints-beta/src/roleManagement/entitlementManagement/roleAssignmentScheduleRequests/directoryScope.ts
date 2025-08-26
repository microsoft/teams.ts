import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope`
 *
 * The directory object that is the scope of the assignment. Read-only. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/directoryScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}
