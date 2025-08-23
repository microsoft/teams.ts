import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel': Operation<
    '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel',
    'post'
  >;
}

/**
 * `POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel`
 *
 * Immediately cancel a unifiedRoleEligibilityScheduleRequest object whose status is Granted and have the system automatically delete the cancelled request after 30 days. After calling this action, the status of the cancelled unifiedRoleEligibilityScheduleRequest changes to Revoked.
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel']['body'],
  params?: IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/directory/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/cancel',
    paramDefs: [{ name: 'unifiedRoleEligibilityScheduleRequest-id', in: 'path' }],
    params,
    body,
  };
}
