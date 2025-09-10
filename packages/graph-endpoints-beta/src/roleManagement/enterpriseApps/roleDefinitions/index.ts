import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions',
    'post'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'get'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
    'post'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'patch'
  >;
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['rbacApplication-id', 'unifiedRoleDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions',
    paramDefs: {
      path: ['rbacApplication-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}',
    paramDefs: {
      path: ['rbacApplication-id', 'unifiedRoleDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions',
    paramDefs: {
      path: ['rbacApplication-id'],
    },
    params,
    body,
  };
}

export const inheritsPermissionsFrom = {
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
   *
   * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles support this attribute.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleDefinition-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom`
   *
   * @deprecated
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['body'],
    params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom',
      paramDefs: {
        path: ['rbacApplication-id', 'unifiedRoleDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   * Read-only collection of role definitions that the given role definition inherits from. Only Microsoft Entra built-in roles support this attribute.
   * @deprecated
   */
  get$1: function get$1(
    params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['rbacApplication-id', 'unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   * @deprecated
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['body'],
    params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        path: ['rbacApplication-id', 'unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}`
   *
   * @deprecated
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleDefinitions/{unifiedRoleDefinition-id}/inheritsPermissionsFrom/{unifiedRoleDefinition-id1}',
      paramDefs: {
        header: ['If-Match'],
        path: ['rbacApplication-id', 'unifiedRoleDefinition-id', 'unifiedRoleDefinition-id1'],
      },
      params,
    };
  },
};
