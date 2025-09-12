import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/resourceNamespaces': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/resourceNamespaces': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces',
    'post'
  >;
  'GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'get'
  >;
  'POST /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
    'post'
  >;
  'GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'patch'
  >;
  'DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}': Operation<
    '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
    'delete'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/resourceNamespaces`
 *
 */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/resourceNamespaces',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}',
    paramDefs: {
      path: ['unifiedRbacResourceNamespace-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/resourceNamespaces`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/resourceNamespaces']['body']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/resourceNamespaces']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/entitlementManagement/resourceNamespaces',
    body,
  };
}

export const resourceActions = {
  /**
   * `GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['unifiedRbacResourceNamespace-id'],
      },
      params,
    };
  },
  /**
   * `POST /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions`
   *
   */
  create: function create(
    body: IEndpoints['POST /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['body'],
    params?: IEndpoints['POST /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions']['response']
  > {
    return {
      method: 'post',
      path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
  > {
    return {
      method: 'get',
      path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['body'],
    params?: IEndpoints['PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
      paramDefs: {
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/roleManagement/entitlementManagement/resourceNamespaces/{unifiedRbacResourceNamespace-id}/resourceActions/{unifiedRbacResourceAction-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRbacResourceNamespace-id', 'unifiedRbacResourceAction-id'],
      },
      params,
    };
  },
};
