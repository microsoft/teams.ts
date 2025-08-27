import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel',
    'post'
  >;
}

/**
 * `POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel`
 *
 * Immediately cancel a unifiedRoleAssignmentScheduleRequest object that is in a Granted status, and have the system automatically delete the canceled request after 30 days. After calling this action, the status of the canceled unifiedRoleAssignmentScheduleRequest changes to Canceled.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/cancel',
    paramDefs: [{ name: 'unifiedRoleAssignmentScheduleRequest-id', in: 'path' }],
    params,
    body,
  };
}
