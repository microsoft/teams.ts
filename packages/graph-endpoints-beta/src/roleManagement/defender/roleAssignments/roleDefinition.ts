import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition': Operation<
    '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition',
    'get'
  >;
}

/**
 * `GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition`
 *
 * Specifies the roleDefinition that the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. Supports $filter (eq operator on id, isBuiltIn, and displayName, and startsWith operator on displayName)  and $expand.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentMultiple-id', in: 'path' },
    ],
    params,
  };
}
