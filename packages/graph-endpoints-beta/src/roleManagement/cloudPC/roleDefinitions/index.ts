export * as inheritsPermissionsFrom from './inheritsPermissionsFrom';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}',
    'delete'
  >;
  'GET /roleManagement/cloudPC/roleDefinitions': Operation<
    '/roleManagement/cloudPC/roleDefinitions',
    'get'
  >;
  'GET /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}',
    'get'
  >;
  'PATCH /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}',
    'patch'
  >;
  'POST /roleManagement/cloudPC/roleDefinitions': Operation<
    '/roleManagement/cloudPC/roleDefinitions',
    'post'
  >;
}

/**
  * `DELETE /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}`
  *
  * Delete a unifiedRoleDefinition object for an RBAC provider. You cannot delete built-in roles. This feature requires a Microsoft Entra ID P1 or P2 license. The following RBAC providers are currently supported:
- Cloud PC
- device management (Intune)
- Defender (Microsoft Defender XDR Unified RBAC)
- directory (Microsoft Entra ID) 
  * @deprecated
  */
export function del(
  params?: IEndpoints['DELETE /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /roleManagement/cloudPC/roleDefinitions`
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
  params?: IEndpoints['GET /roleManagement/cloudPC/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/cloudPC/roleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/cloudPC/roleDefinitions',
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
  * `GET /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}`
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
  params?: IEndpoints['GET /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleDefinition-id', in: 'path' },
    ],
    params,
  };
}

/**
  * `PATCH /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}`
  *
  * Update the properties of a unifiedRoleDefinition object for an RBAC provider. You cannot update built-in roles. This feature requires a Microsoft Entra ID P1 or P2 license. The following RBAC providers are currently supported:
- Cloud PC
- device management (Intune)
- directory (Microsoft Entra ID) 
  * @deprecated
  */
export function update(
  body: IEndpoints['PATCH /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/cloudPC/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: [{ name: 'unifiedRoleDefinition-id', in: 'path' }],
    params,
    body,
  };
}

/**
  * `POST /roleManagement/cloudPC/roleDefinitions`
  *
  * Create a new unifiedRoleDefinition object for an RBAC provider. This feature requires a Microsoft Entra ID P1 or P2 license. The following RBAC providers are currently supported:
- Cloud PC
- device management (Intune)
- Defender (Microsoft Defender XDR)
- directory (Microsoft Entra ID)
  * @deprecated
  */
export function create(
  body: IEndpoints['POST /roleManagement/cloudPC/roleDefinitions']['body'],
  params?: IEndpoints['POST /roleManagement/cloudPC/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/cloudPC/roleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/cloudPC/roleDefinitions',
    paramDefs: [],
    params,
    body,
  };
}
