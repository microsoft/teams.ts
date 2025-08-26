import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
      { name: 'unifiedRoleDefinition-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
 *
 * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
 *
 * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
      { name: 'unifiedRoleDefinition-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    paramDefs: [
      { name: 'unifiedRoleDefinition-id', in: 'path' },
      { name: 'unifiedRoleDefinition-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    paramDefs: [{ name: 'unifiedRoleDefinition-id', in: 'path' }],
    params,
    body,
  };
}
