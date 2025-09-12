import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignments': Operation<
    '/roleManagement/entitlementManagement/roleAssignments',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleAssignments': Operation<
    '/roleManagement/entitlementManagement/roleAssignments',
    'post'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    'patch'
  >;
  'DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/directoryScope': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/principal': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/principal',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition': Operation<
    '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleAssignment-id'],
    },
    params,
  };
}

/**
  * `GET /roleManagement/entitlementManagement/roleAssignments`
  *
  * Get a list of unifiedRoleAssignment objects for the provider. The following RBAC providers are currently supported:
- directory (Microsoft Entra ID)
- entitlement management (Microsoft Entra entitlement management)
- Exchange Online
  * @deprecated
  */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignments',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: {
      path: ['unifiedRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: {
      path: ['unifiedRoleAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleAssignments`
 *
 * Create a new unifiedRoleAssignment object.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignments']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleAssignments',
    body,
  };
}

export const appScope = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope`
   *
   * Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand for the entitlement provider only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['body'],
    params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
      paramDefs: {
        path: ['unifiedRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/appScope',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/directoryScope`
   *
   * The directory object that is the scope of the assignment. Read-only. Supports $expand for the directory provider.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/directoryScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/principal`
   *
   * Referencing the assigned principal. Read-only. Supports $expand except for the Exchange provider.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition`
   *
   * The roleDefinition the assignment is for. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/entitlementManagement/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignment-id'],
      },
      params,
    };
  },
};
