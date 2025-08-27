import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition': Operation<
    '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition`
 *
 * The roleDefinition the assignment is for. Supports $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
