import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    'delete'
  >;
  'GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    'get'
  >;
  'PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    'patch'
  >;
}

/**
 * `DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope`
 *
 * Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand for the entitlement provider only.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['body'],
  params?: IEndpoints['PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    paramDefs: [{ name: 'unifiedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}
