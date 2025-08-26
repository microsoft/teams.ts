import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal',
    'get'
  >;
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal`
 *
 * Referencing the assigned principal. Read-only. Supports $expand except for the Exchange provider.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}
