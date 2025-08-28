import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition`
 *
 * Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}
