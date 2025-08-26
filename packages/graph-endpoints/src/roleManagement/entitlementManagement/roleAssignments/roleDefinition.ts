import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition`
 *
 * The roleDefinition the assignment is for. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
