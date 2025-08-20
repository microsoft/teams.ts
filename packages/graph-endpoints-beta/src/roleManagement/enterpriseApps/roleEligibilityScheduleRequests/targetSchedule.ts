import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule`
 *
 * The schedule for a role eligibility that is referenced through the targetScheduleId property. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/targetSchedule',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleEligibilityScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}
