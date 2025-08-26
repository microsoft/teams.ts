export * as inheritsPermissionsFrom from './inheritsPermissionsFrom';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleDefinitions': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleDefinitions': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /roleManagement/entitlementManagement/roleDefinitions`
  *
  * Get a list of unifiedRoleDefinition objects for an RBAC provider. The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR)
- directory (Microsoft Entra ID) 
- entitlement management (Microsoft Entra ID)
- Exchange Online
  * @deprecated
  */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleDefinitions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
  * `GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}`
  *
  * Get the properties and relationships of a unifiedRoleDefinition object of an RBAC provider.  The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR Unified RBAC)
- directory (Microsoft Entra directory roles)
- entitlement management (Microsoft Entra entitlement management)
- Exchange Online (Except China operated by 21Vianet)
  * @deprecated
  */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [{ name: 'unifiedRoleDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleDefinitions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
