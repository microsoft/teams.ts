import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition`
 *
 * Detailed information for the unifiedRoleDefinition object that is referenced through the roleDefinitionId property. Supports $expand and $select nested in $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignmentScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}
