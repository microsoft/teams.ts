import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments',
    'post'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    'patch'
  >;
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
    'get'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments',
    paramDefs: {
      header: ['ConsistencyLevel'],
      path: ['rbacApplication-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: {
      header: ['ConsistencyLevel'],
      path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments',
    paramDefs: {
      path: ['rbacApplication-id'],
    },
    params,
    body,
  };
}

export const appScope = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope`
   *
   * Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. Supports $expand for the entitlement provider only.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['body'],
    params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
      paramDefs: {
        path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/appScope',
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
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope`
   *
   * The directory object that is the scope of the assignment. Read-only. Supports $expand for the directory provider.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/directoryScope',
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
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal`
   *
   * Referencing the assigned principal. Read-only. Supports $expand except for the Exchange provider.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/principal',
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
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition`
   *
   * The roleDefinition the assignment is for. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/transitiveRoleAssignments/{unifiedRoleAssignment-id}/roleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleAssignment-id'],
      },
      params,
    };
  },
};
