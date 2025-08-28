import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    'delete'
  >;
  'GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    'get'
  >;
  'PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    'patch'
  >;
}

/**
 * `DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope`
 *
 * Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand for the entitlement provider only.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    paramDefs: [{ name: 'unifiedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
