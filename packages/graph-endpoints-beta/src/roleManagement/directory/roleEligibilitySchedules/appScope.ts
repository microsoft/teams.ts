import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope`
 *
 * Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}
