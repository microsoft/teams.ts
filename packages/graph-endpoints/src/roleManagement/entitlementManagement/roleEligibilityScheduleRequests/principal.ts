import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal': Operation<
    '/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal`
 *
 * The principal that&#x27;s getting a role eligibility through the request. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/principal',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilityScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}
