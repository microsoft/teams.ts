import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition`
 *
 * Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleEligibilityScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}
