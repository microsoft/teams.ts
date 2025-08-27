import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition': Operation<
    '/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition`
 *
 * Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilityScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}
