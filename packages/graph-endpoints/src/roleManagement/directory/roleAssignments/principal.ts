import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/principal': Operation<
    '/roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/principal',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/principal`
 *
 * Referencing the assigned principal. Read-only. Supports $expand except for the Exchange provider.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/principal']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/principal']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/principal',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
