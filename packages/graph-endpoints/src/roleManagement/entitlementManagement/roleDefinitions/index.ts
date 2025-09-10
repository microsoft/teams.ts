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
  'GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'get'
  >;
  'POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'post'
  >;
  'GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'patch'
  >;
  'DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleDefinition-id'],
    },
    params,
  };
}

/**
  * `GET /roleManagement/entitlementManagement/roleDefinitions`
  *
  * Get a list of unifiedRoleDefinition objects for the provider. The following RBAC providers are currently supported:
- directory (Microsoft Entra ID)
- entitlement management (Microsoft Entra Entitlement Management)
  */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleDefinitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * Resource representing the roles allowed by RBAC providers and the permissions assigned to the roles.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      path: ['unifiedRoleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      path: ['unifiedRoleDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleDefinitions',
    body,
  };
}

export const inheritsPermissionsFrom = {
  /**
   * `GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
   *
   * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRoleDefinition-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
   *
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['body'],
    params?: IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
  > {
    return {
      method: 'post',
      path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
      paramDefs: {
        path: ['unifiedRoleDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles (isBuiltIn is true) support this attribute. Supports $expand.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['body'],
    params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      method: 'patch',
      path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        path: ['unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      method: 'delete',
      path: '/roleManagement/entitlementManagement/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
    };
  },
};
