import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/directoryScope': Operation<
    '/roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/directoryScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/directoryScope`
 *
 * The directory object that is the scope of the assignment. Read-only. Supports $expand for the directory provider.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/directoryScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/directoryScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignments/{unifiedRoleAssignment-id}/directoryScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
