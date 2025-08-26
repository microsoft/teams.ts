import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope`
 *
 * The directory object that is the scope of the assignment. Read-only. Supports $expand for the directory provider.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
