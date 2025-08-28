import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope`
 *
 * Read-only property with details of the app-specific scope when the role eligibility is scoped to an app. Nullable. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleEligibilityScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}
