import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition': Operation<
    '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition`
 *
 * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}
