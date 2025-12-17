import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    'delete'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments': Operation<
    '/roleManagement/deviceManagement/roleAssignments',
    'get'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    'get'
  >;
  'PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    'patch'
  >;
  'POST /roleManagement/deviceManagement/roleAssignments': Operation<
    '/roleManagement/deviceManagement/roleAssignments',
    'post'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes',
    'get'
  >;
  'POST /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes',
    'post'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
    'get'
  >;
  'PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
    'patch'
  >;
  'DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
    'delete'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes',
    'get'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}',
    'get'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals',
    'get'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}',
    'get'
  >;
  'GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition': Operation<
    '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition',
    'get'
  >;
}

/**
  * `DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}`
  *
  * Delete a unifiedRoleAssignmentMultiple object of an RBAC provider.  This is applicable for a RBAC application that supports multiple principals and scopes. The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR Unified RBAC)
  * @deprecated
  */
export function del(
  params?: IEndpoints['DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleAssignmentMultiple-id'],
    },
    params,
  };
}

/**
  * `GET /roleManagement/deviceManagement/roleAssignments`
  *
  * Get a list of unifiedRoleAssignmentMultiple objects for an RBAC provider. The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
  * @deprecated
  */
export function list(
  params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/deviceManagement/roleAssignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/roleAssignments',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}`
  *
  * Get the properties and relationships of a unifiedRoleAssignmentMultiple object of an RBAC provider.  The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR Unified RBAC) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
  * @deprecated
  */
export function get(
  params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentMultiple-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}`
  *
  * Update an existing unifiedRoleAssignmentMultiple object of an RBAC provider.  The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune) In contrast, unifiedRoleAssignment does not support update.
  * @deprecated
  */
export function update(
  body: IEndpoints['PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}',
    paramDefs: {
      path: ['unifiedRoleAssignmentMultiple-id'],
    },
    params,
    body,
  };
}

/**
  * `POST /roleManagement/deviceManagement/roleAssignments`
  *
  * Create a new unifiedRoleAssignmentMultiple object for an RBAC provider.  The following RBAC providers are currently supported:
- Cloud PC 
- device management (Intune)
- Defender (Microsoft Defender XDR) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
  * @deprecated
  */
export function create(
  body: IEndpoints['POST /roleManagement/deviceManagement/roleAssignments']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/deviceManagement/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/deviceManagement/roleAssignments',
    body,
  };
}

export const appScopes = {
  /**
   * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes`
   *
   * Read-only collection with details of the app specific scopes when the assignment scopes are app specific. Containment entity. Read-only.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRoleAssignmentMultiple-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['body'],
    params?: IEndpoints['POST /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes',
      paramDefs: {
        path: ['unifiedRoleAssignmentMultiple-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}`
   *
   * Read-only collection with details of the app specific scopes when the assignment scopes are app specific. Containment entity. Read-only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentMultiple-id', 'appScope-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['body'],
    params?: IEndpoints['PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
      paramDefs: {
        path: ['unifiedRoleAssignmentMultiple-id', 'appScope-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/appScopes/{appScope-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRoleAssignmentMultiple-id', 'appScope-id'],
      },
      params,
    };
  },
};

export const directoryScopes = {
  /**
   * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes`
   *
   * Read-only collection that references the directory objects that are scope of the assignment. Provided so that callers can get the directory objects using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRoleAssignmentMultiple-id'],
      },
      params,
    };
  },
  /**
   * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}`
   *
   * Read-only collection that references the directory objects that are scope of the assignment. Provided so that callers can get the directory objects using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/directoryScopes/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentMultiple-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const principals = {
  /**
   * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals`
   *
   * Read-only collection that references the assigned principals. Provided so that callers can get the principals using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRoleAssignmentMultiple-id'],
      },
      params,
    };
  },
  /**
   * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}`
   *
   * Read-only collection that references the assigned principals. Provided so that callers can get the principals using $expand at the same time as getting the role assignment. Read-only. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/principals/{directoryObject-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentMultiple-id', 'directoryObject-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition`
   *
   * Specifies the roleDefinition that the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. Supports $filter (eq operator on id, isBuiltIn, and displayName, and startsWith operator on displayName)  and $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/deviceManagement/roleAssignments/{unifiedRoleAssignmentMultiple-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleAssignmentMultiple-id'],
      },
      params,
    };
  },
};
