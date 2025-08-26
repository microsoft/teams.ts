import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal`
 *
 * The principal that&#x27;s getting a role assignment or role eligibility through the request.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}/principal',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleEligibilityScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}
