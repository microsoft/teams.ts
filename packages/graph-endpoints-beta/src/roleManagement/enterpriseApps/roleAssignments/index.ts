import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments',
    'post'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    'patch'
  >;
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/directoryScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/principal': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/principal',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments',
    paramDefs: {
      path: ['rbacApplication-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments',
    paramDefs: {
      path: ['rbacApplication-id'],
    },
    params,
    body,
  };
}

export const appScope = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope`
   *
   * Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand for the entitlement provider only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope']['body'],
    params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope',
      paramDefs: {
        path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/appScope',
      paramDefs: {
        header: ['If-Match'],
        path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const directoryScope = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/directoryScope`
   *
   * The directory object that is the scope of the assignment. Read-only. Supports $expand for the directory provider.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/directoryScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/directoryScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const principal = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/principal`
   *
   * Referencing the assigned principal. Read-only. Supports $expand except for the Exchange provider.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/principal',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      },
      params,
    };
  },
};

export const roleDefinition = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition`
   *
   * The roleDefinition the assignment is for. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      },
      params,
    };
  },
};
