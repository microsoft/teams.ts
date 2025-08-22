import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope`
 *
 * The directory object that is the scope of the role eligibility or assignment. Read-only.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/directoryScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}
