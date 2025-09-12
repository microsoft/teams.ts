import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleDefinitions': Operation<
    '/roleManagement/directory/roleDefinitions',
    'get'
  >;
  'GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleDefinitions': Operation<
    '/roleManagement/directory/roleDefinitions',
    'post'
  >;
  'GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'get'
  >;
  'POST /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'post'
  >;
  'GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'patch'
  >;
  'DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * Delete a unifiedRoleDefinition object. You can&#x27;t delete built-in roles. This feature requires a Microsoft Entra ID P1 or P2 license.
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleDefinition-id'],
    },
    params,
  };
}

/**
  * `GET /roleManagement/directory/roleDefinitions`
  *
  * Get a list of unifiedRoleDefinition objects for the provider. The following RBAC providers are currently supported:
- directory (Microsoft Entra ID)
- entitlement management (Microsoft Entra Entitlement Management)
  */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleDefinitions']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/directory/roleDefinitions']['response']> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleDefinitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * Read the properties and relationships of a unifiedRoleDefinition object. The following role-based access control (RBAC) providers are currently supported:
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      path: ['unifiedRoleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * Update the properties of a unifiedRoleDefinition object. You cannot update built-in roles. This feature requires a Microsoft Entra ID P1 or P2 license.
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      path: ['unifiedRoleDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleDefinitions`
 *
 * Create a new custom unifiedRoleDefinition object. This feature requires a Microsoft Entra ID P1 or P2 license.
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleDefinitions']['body']
): EndpointRequest<IEndpoints['POST /roleManagement/directory/roleDefinitions']['response']> {
  return {
    method: 'post',
    path: '/roleManagement/directory/roleDefinitions',
    body,
  };
}

export const inheritsPermissionsFrom = {
  /**
   * `GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
   *
   * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRoleDefinition-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
   *
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['body'],
    params?: IEndpoints['POST /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
  > {
    return {
      method: 'post',
      path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
      paramDefs: {
        path: ['unifiedRoleDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['body'],
    params?: IEndpoints['PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      method: 'patch',
      path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        path: ['unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      method: 'delete',
      path: '/roleManagement/directory/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
    };
  },
};
