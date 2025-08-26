import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope`
 *
 * Read-only property with details of the app-specific scope when the assignment or role eligibility is scoped to an app. Nullable.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilityScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}
