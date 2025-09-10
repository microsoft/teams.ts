import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}',
    'delete'
  >;
  'GET /roleManagement/defender/roleDefinitions': Operation<
    '/roleManagement/defender/roleDefinitions',
    'get'
  >;
  'GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}',
    'get'
  >;
  'PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}',
    'patch'
  >;
  'POST /roleManagement/defender/roleDefinitions': Operation<
    '/roleManagement/defender/roleDefinitions',
    'post'
  >;
  'GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'get'
  >;
  'POST /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'post'
  >;
  'GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'get'
  >;
  'PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'patch'
  >;
  'DELETE /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'delete'
  >;
}

/**
  * `DELETE /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}`
  *
  * Delete a unifiedRoleDefinition object for an RBAC provider. You cannot delete built-in roles. This feature requires a Microsoft Entra ID P1 or P2 license. The following RBAC providers are currently supported:
- Cloud PC
- device management (Intune)
- Defender (Microsoft Defender XDR Unified RBAC)
- directory (Microsoft Entra ID) 
  * @deprecated
  */
export function del(
  params?: IEndpoints['DELETE /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleDefinition-id'],
    },
    params,
  };
}

/**
  * `GET /roleManagement/defender/roleDefinitions`
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
  params?: IEndpoints['GET /roleManagement/defender/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/defender/roleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/roleDefinitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}`
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
  params?: IEndpoints['GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      path: ['unifiedRoleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      path: ['unifiedRoleDefinition-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /roleManagement/defender/roleDefinitions`
  *
  * Create a new unifiedRoleDefinition object for an RBAC provider. This feature requires a Microsoft Entra ID P1 or P2 license. The following RBAC providers are currently supported:
- Cloud PC
- device management (Intune)
- Defender (Microsoft Defender XDR)
- directory (Microsoft Entra ID)
  * @deprecated
  */
export function create(
  body: IEndpoints['POST /roleManagement/defender/roleDefinitions']['body']
): EndpointRequest<IEndpoints['POST /roleManagement/defender/roleDefinitions']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/defender/roleDefinitions',
    body,
  };
}

export const inheritsPermissionsFrom = {
  /**
   * `GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
   *
   * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles support this attribute.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRoleDefinition-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['body'],
    params?: IEndpoints['POST /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
      paramDefs: {
        path: ['unifiedRoleDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles support this attribute.
   * @deprecated
   */
  get$1: function get$1(
    params?: IEndpoints['GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['body'],
    params?: IEndpoints['PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        path: ['unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/defender/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
    };
  },
};
