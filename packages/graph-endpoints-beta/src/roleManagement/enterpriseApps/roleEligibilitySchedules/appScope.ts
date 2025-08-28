import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope`
 *
 * Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}
