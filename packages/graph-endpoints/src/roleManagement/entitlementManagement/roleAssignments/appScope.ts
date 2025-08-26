import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    'patch'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope`
 *
 * Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand for the entitlement provider only.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    paramDefs: [{ name: 'unifiedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
