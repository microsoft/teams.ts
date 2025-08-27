import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope': Operation<
    '/roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope`
 *
 * The directory object that is the scope of the role eligibility or assignment. Read-only.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}
